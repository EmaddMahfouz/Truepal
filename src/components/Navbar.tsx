import { TruepalLogo } from "./TruepalLogo";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <TruepalLogo
          className={`transition-transform duration-300 ${
            isScrolled ? "scale-90" : "scale-100"
          }`}
        />
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className={`font-semibold hover:text-truepal-green transition-colors ${isScrolled ? 'text-truepal-blue' : 'text-white'}`}>About</a>
          <a href="#solutions" className={`font-semibold hover:text-truepal-green transition-colors ${isScrolled ? 'text-truepal-blue' : 'text-white'}`}>Solutions</a>
          <a href="#contact" className={`font-semibold hover:text-truepal-green transition-colors ${isScrolled ? 'text-truepal-blue' : 'text-white'}`}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
