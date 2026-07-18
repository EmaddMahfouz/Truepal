import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/services";

export function Solutions() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-truepal-green font-bold tracking-widest uppercase mb-2">Our Capabilities</h2>
          <h3 className="text-4xl font-extrabold text-truepal-blue mb-6">Our Services & Solutions</h3>
          <p className="text-gray-600 text-lg">
            We don't just supply equipment; we deliver a complete experience. We manage every technical detail of your aquatic and thermal projects to ensure a seamless journey from the first sketch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link to={`/services/${service.id}`} className="block h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group border border-gray-100 flex flex-col">
                <div className="h-48 overflow-hidden relative shrink-0">
                  <div className="absolute inset-0 bg-truepal-blue/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-3 rounded-xl z-20 shadow-sm text-truepal-green">
                    <service.icon size={24} />
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="text-xl font-bold text-truepal-blue mb-3 group-hover:text-truepal-green transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 mb-4 flex-1">
                    {service.description}
                  </p>
                  <div className="text-truepal-green font-semibold flex items-center mt-auto text-sm">
                    Read more 
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
