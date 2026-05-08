import { TruepalLogo } from "./TruepalLogo";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";
  const navTextColor = (isHome && !isScrolled) ? "text-white" : "text-truepal-blue";
  const navBgClass = (isHome && !isScrolled) ? "bg-transparent py-5" : "bg-white/95 backdrop-blur-md shadow-sm py-3";

  // Provide native anchor behavior on the homepage for smooth scrolling
  const renderLink = (id: string, label: string) => {
    if (isHome) {
      return (
        <a 
          href={`#${id}`} 
          className={`font-semibold hover:text-truepal-green transition-colors ${navTextColor}`}
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", window.location.pathname + `#${id}`);
          }}
        >
          {label}
        </a>
      );
    }
    return (
      <Link to={`/#${id}`} className={`font-semibold hover:text-truepal-green transition-colors ${navTextColor}`}>
        {label}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass}`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link to="/">
          <TruepalLogo
            isLight={isHome && !isScrolled}
            className={`transition-transform duration-300 ${
              isScrolled || (!isHome) ? "scale-90" : "scale-100"
            }`}
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {renderLink("about", "About")}
          {renderLink("solutions", "Solutions")}
          {renderLink("contact", "Contact")}
        </div>
      </div>
    </nav>
  );
}
