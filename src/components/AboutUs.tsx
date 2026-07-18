import { motion } from "motion/react";

export function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/2">
          <div className="relative">
            <motion.div 
              className="absolute -inset-4 border-2 border-truepal-green rounded-lg z-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            />
            <img 
              src="https://images.unsplash.com/photo-1543158097-f58c738e4a9e?auto=format&fit=crop&w=1000&q=80" 
              alt="Pool and Architecture" 
              className="relative z-10 rounded-lg shadow-2xl object-cover h-[500px] w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-truepal-blue text-white p-6 rounded-lg z-20 shadow-xl hidden sm:block">
              <p className="text-xl font-extrabold text-truepal-green uppercase tracking-wider mb-1">Truepal</p>
              <p className="font-semibold text-sm text-blue-100">Trading &<br/>Contracting</p>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-truepal-green font-bold tracking-widest uppercase mb-2">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-truepal-blue mb-6">Expertise in Aquatic & Thermal Systems</h3>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                <strong>TRUEPAL</strong> is a specialized company in swimming pools, water features, and heating systems, delivering complete and integrated solutions from concept, design, and equipment supply to installation and commissioning.
              </p>
              <p>
                We support contractors and companies with reliable, high-quality systems tailored to meet project requirements and timelines.
              </p>
              <p>
                Backed by strong regional expertise, our team has successfully contributed to delivering large-scale projects across multiple markets, ensuring professional execution, advanced engineering, and long-term performance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
