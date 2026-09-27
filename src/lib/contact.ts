export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  body: string;
}

export interface SendMessageResult {
  success: boolean;
  message?: string;
  needsActivation?: boolean;
}

/**
 * Sends a contact message.
 * - In full-stack environments (local / custom server), attempts /api/contact.
 * - In static hosting (GitHub Pages), uses FormSubmit to deliver emails directly to Truepal.co@gmail.com,
 *   with CC to H.Farag@truepalgroup.com and M.Eldeeb@truepalgroup.com.
 */
export async function sendContactMessage(data: ContactFormData): Promise<SendMessageResult> {
  const isGithubPages = typeof window !== 'undefined' && window.location.hostname.endsWith('github.io');

  // 1. If not on GitHub Pages, try local backend route first
  if (!isGithubPages) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        return { success: true, message: "Message sent successfully!" };
      }
    } catch {
      // Local backend not reachable or static build, proceed to FormSubmit
    }
  }

  // 2. Direct static email delivery via FormSubmit
  try {
    const res = await fetch("https://formsubmit.co/ajax/Truepal.co@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone || "N/A",
        subject: data.subject || "Website Inquiry",
        message: data.body,
        _subject: `New TRUEPAL Inquiry: ${data.subject || "General"} (${data.name})`,
        _cc: "H.Farag@truepalgroup.com,M.Eldeeb@truepalgroup.com",
        _template: "table",
        _captcha: "false",
      }),
    });

    const result = await res.json();

    if (result.success === "true" || result.success === true) {
      return { success: true, message: "Thank you! Your message has been sent to our team." };
    }

    if (result.message && typeof result.message === "string" && result.message.toLowerCase().includes("activation")) {
      return {
        success: true,
        needsActivation: true,
        message: "First-time setup: An activation email was sent to Truepal.co@gmail.com. Please click 'Activate Form' in your inbox to enable incoming submissions.",
      };
    }

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Failed to deliver via FormSubmit:", error);
    return {
      success: false,
      message: "Network error sending message. Please contact us directly via email or WhatsApp below.",
    };
  }
}

export function createMailtoLink(data: Partial<ContactFormData>): string {
  const recipients = "Truepal.co@gmail.com";
  const cc = "H.Farag@truepalgroup.com,M.Eldeeb@truepalgroup.com";
  const subject = encodeURIComponent(`Website Inquiry: ${data.subject || "General Inquiry"}`);
  const body = encodeURIComponent(
    `Name: ${data.name || ''}\nEmail: ${data.email || ''}\nPhone: ${data.phone || 'N/A'}\n\nMessage:\n${data.body || ''}`
  );
  return `mailto:${recipients}?cc=${cc}&subject=${subject}&body=${body}`;
}

export function createWhatsAppLink(phone = "201065272264", text = "Hello TRUEPAL, I would like to inquire about your services."): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
