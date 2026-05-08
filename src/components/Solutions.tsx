import { motion } from "motion/react";
import { Droplets, Waves, ThermometerSun, Sparkles, LocateIcon, Map } from "lucide-react";

const services = [
  {
    title: "Swimming Pools",
    description: "Residential & Commercial (Skimmer, Overflow, Infinity).",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Fountains & Water Features",
    description: "Architectural and interactive fountains.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1543158097-f58c738e4a9e?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Lagoons",
    description: "Large-scale artificial lakes and lagoons systems.",
    icon: Map,
    image: "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Heating Solutions",
    description: "Advanced heat pumps and boiler systems for pools & Jacuzzis.",
    icon: ThermometerSun,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Wellness & Jacuzzis",
    description: "Custom-built and pre-fabricated luxury systems.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1590487988358-854746654261?auto=format&fit=crop&w=800&q=80"
  }
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-truepal-green font-bold tracking-widest uppercase mb-2">Our Capabilities</h2>
          <h3 className="text-4xl font-extrabold text-truepal-blue mb-6">Our Services & Solutions</h3>
          <p className="text-gray-600 text-lg">
            We don't just supply equipment; we deliver a complete experience. We manage every technical detail of your aquatic and thermal projects to ensure a seamless journey from the first sketch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group border border-gray-100"
            >
              <div className="h-48 overflow-hidden relative">
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
              <div className="p-8">
                <h4 className="text-xl font-bold text-truepal-blue mb-3 group-hover:text-truepal-green transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
