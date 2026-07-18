import { useParams, Navigate, Link } from "react-router-dom";
import { servicesData } from "../data/services";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export function ServicePage() {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white min-h-screen pt-24 pb-12"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <Link 
          to="/#services" 
          className="inline-flex items-center text-truepal-green font-semibold hover:text-truepal-green-dark mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to all services
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg border border-gray-100"
        >
          <div className="h-[40vh] min-h-[300px] relative">
            <div className="absolute inset-0 bg-truepal-blue/40 mix-blend-multiply z-10" />
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center p-8 text-center bg-gradient-to-t from-truepal-blue/80 to-transparent">
              <div>
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/20 backdrop-blur-md p-4 rounded-full inline-block mb-6 shadow-xl"
                >
                  <service.icon className="w-12 h-12 text-white" />
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                  {service.title}
                </h1>
                <p className="text-xl text-blue-100 font-medium max-w-2xl mx-auto mb-8">
                  {service.description}
                </p>
                <div className="flex justify-center">
                  <a
                    href="#service-contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('service-contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center px-8 py-4 bg-truepal-green text-white font-bold rounded-lg hover:bg-truepal-green-dark transition-all transform hover:scale-105 shadow-lg"
                  >
                    {service.ctaText || "Get Started"}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="prose max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                {service.longDescription}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-truepal-blue mb-8 uppercase tracking-wide border-b-2 border-truepal-green inline-block pb-2">
              Specific Features & Supply Scope
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {service.features.map((featureBlock, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-truepal-blue mb-4">
                    {featureBlock.title}
                  </h3>
                  <ul className="space-y-3">
                    {featureBlock.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-truepal-green shrink-0 mr-3 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {service.gallery && service.gallery.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-truepal-blue mb-8 uppercase tracking-wide border-b-2 border-truepal-green inline-block pb-2">
                  Project Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                  {service.gallery.map((imgUrl, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      className="rounded-2xl overflow-hidden shadow-md aspect-video relative group"
                    >
                      <div className="absolute inset-0 bg-truepal-blue/10 group-hover:bg-transparent transition-colors z-10" />
                      <img 
                        src={imgUrl} 
                        alt={`${service.title} Gallery Image ${idx + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Us Section */}
            <div id="service-contact" className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-extrabold text-truepal-blue mb-2 tracking-tight">
                {service.ctaText || `Inquire About ${service.title}`}
              </h2>
              <p className="text-gray-600 mb-8 text-lg">Fill out the form below and our engineering team will get back to you shortly.</p>
              
              <form 
                action="mailto:M.Eldeeb@truepalgroup.com,H.Farag@truepalgroup.com" 
                method="GET" 
                encType="text/plain"
                className="space-y-4"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-truepal-green focus:border-transparent transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-truepal-green focus:border-transparent transition-all"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    defaultValue={`Inquiry about ${service.title}`}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-truepal-green focus:border-transparent transition-all"
                    placeholder="Subject"
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
                  className="w-full md:w-auto px-10 bg-truepal-green hover:bg-truepal-green-dark text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-truepal-green/20 mt-4 text-lg"
                >
                  {service.ctaText || "Send Inquiry"}
                </button>
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
