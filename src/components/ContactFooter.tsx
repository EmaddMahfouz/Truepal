import { MapPin, Phone, Mail } from "lucide-react";

export function ContactFooter() {
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

          <div className="bg-white rounded-2xl p-8 text-gray-800 shadow-2xl">
            <h3 className="text-2xl font-bold text-truepal-blue mb-6">Send a Message</h3>
            <form 
              action="mailto:H.Farag@truepalgroup.com,M.Eldeeb@truepalgroup.com" 
              method="GET" 
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-truepal-green focus:border-transparent transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Message</label>
                <textarea 
                  name="body"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-truepal-green focus:border-transparent transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-truepal-green hover:bg-truepal-green-dark text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-truepal-green/20 mt-4"
              >
                Send Request via Email
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Footer */}
      <div className="container mx-auto px-6 max-w-7xl py-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-blue-200 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} TRUEPAL FOR TRADING AND CONTRACTING. All rights reserved.
        </p>
        <a href="https://www.truepalgroup.com" className="font-semibold hover:text-truepal-green transition-colors">
          www.truepalgroup.com
        </a>
      </div>
    </footer>
  );
}
