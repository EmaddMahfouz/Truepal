import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON bodies
  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, subject, body } = req.body;

      if (!name || !email || !body) {
        return res.status(400).json({ error: "Name, email, and message body are required." });
      }

      // Check if SMTP is configured
      if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
        // If not configured, we just log it and simulate success for the demo environment
        console.warn("SMTP credentials missing. Simulating email send. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL_TO in .env");
        console.log(`Simulated Email From: ${name} <${email}>`);
        console.log(`Phone: ${phone || 'N/A'}`);
        console.log(`Subject: ${subject || 'General Inquiry'}`);
        console.log(`Body: ${body}`);
        return res.status(200).json({ success: true, message: "Email simulated successfully." });
      }

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const targetEmails = process.env.CONTACT_EMAIL_TO 
        ? process.env.CONTACT_EMAIL_TO 
        : 'H.Farag@truepalgroup.com, M.Eldeeb@truepalgroup.com, Truepal.co@gmail.com';

      const mailOptions = {
        from: `"${name}" <${process.env.SMTP_USER}>`, // Send from authenticated user
        replyTo: email,
        to: targetEmails,
        subject: `New Website Contact: ${subject || 'General Inquiry'}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${body}`,
        html: `
          <h3>New Contact Request</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <p>${body.replace(/\n/g, '<br>')}</p>
        `
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "Email sent successfully." });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
