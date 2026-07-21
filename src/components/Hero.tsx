import { motion } from "motion/react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        {/* Overlay gradient simulating the blue tone from the PDF */}
        <div className="absolute inset-0 bg-truepal-blue/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-truepal-blue/90 via-truepal-blue/40 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 uppercase tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Delivering <span className="text-truepal-green">Solutions</span>,<br/>
          Earning <span className="text-truepal-green">Trust</span>.
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-2xl text-blue-100 mb-10 max-w-2xl font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Specialized in swimming pools, water features, and heating systems.
        </motion.p>

        <motion.div 
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a 
            href="#about" 
            className="px-8 py-4 bg-truepal-green text-white font-bold rounded-lg hover:bg-truepal-green-dark transition-all transform hover:scale-105 shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              window.history.pushState(null, "", window.location.pathname + "#about");
            }}
          >
            Discover More
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-white/10 backdrop-blur border border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition-all shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              window.history.pushState(null, "", window.location.pathname + "#contact");
            }}
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Social Links Side */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
        {[Facebook, Instagram, Linkedin].map((Icon, i) => (
          <a 
            key={i} 
            href="#" 
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-truepal-green transition-colors border border-white/20"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </section>
  );
}
