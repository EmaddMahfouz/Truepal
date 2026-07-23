import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

export function ContactFooter() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request. In a real app, integrate EmailJS, SendGrid, or a custom backend API here.
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <footer id="contact" className="bg-truepal-blue text-white">
      {/* Contact Section */}
      <div className="container mx-auto px-6 max-w-7xl py-20 border-b border-white/10">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-extrabold mb-6 text-truepal-green">Get In Touch</h2>
            <p className="text-blue-100 mb-10 text-lg">
              Partner with TRUEPAL for professional execution, advanced engineering, and long-term performance on your next large-scale project.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-truepal-green" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Address</h4>
                  <p className="text-blue-200">Saqqara Street,<br/>Giza, Egypt.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="text-truepal-green" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone</h4>
                  <p className="text-blue-200">+20 106 527 2264</p>
                  <p className="text-blue-200">+20 111 113 9669</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="text-truepal-green" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-blue-200">H.Farag@truepalgroup.com</p>
                  <p className="text-blue-200">M.Eldeeb@truepalgroup.com</p>
                  <p className="text-blue-200">Truepal.co@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-gray-800 shadow-2xl relative">
            <h3 className="text-2xl font-bold text-truepal-blue mb-6">Send a Message</h3>
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-8 text-center h-full">
                <div className="w-16 h-16 bg-truepal-green/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-truepal-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="text-xl font-bold text-truepal-blue mb-2">Message Sent!</h4>
                <p className="text-gray-600 mb-6">Thank you for contacting us. We will get back to you shortly.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-truepal-green focus:border-transparent transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-truepal-green focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-truepal-green focus:border-transparent transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Message</label>
                  <textarea 
                    name="body"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-truepal-green focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-truepal-green hover:bg-truepal-green-dark text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-truepal-green/20 mt-4 flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Footer */}
      <div className="container mx-auto px-6 max-w-7xl py-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-blue-200 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} TRUEPAL FOR TRADING AND CONTRACTING. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
