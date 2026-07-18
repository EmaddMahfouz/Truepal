import { TruepalLogo } from "./TruepalLogo";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (location.pathname === "/") {
        const sections = ["about", "services", "products", "contact"];
        let current = "";

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            // Highlight when section is within the top portion of the viewport
            if (rect.top <= 200 && rect.bottom >= 200) {
              current = section;
              break;
            }
          }
        }
        
        if (window.scrollY < 100) {
          current = "";
        } else if (!current && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
           current = "contact";
        }
        
        setActiveSection(current);
      }
    };
    
    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const navTextColor = (isHome && !isScrolled) ? "text-white" : "text-truepal-blue";
  const navBgClass = (isHome && !isScrolled) ? "bg-transparent py-5" : "bg-white/95 backdrop-blur-md shadow-sm py-3";

  // Provide native anchor behavior on the homepage for smooth scrolling
  const renderLink = (id: string, label: string) => {
    const isActive = activeSection === id;
    const baseClasses = `font-semibold transition-colors ${navTextColor}`;
    const activeClasses = isActive 
      ? (isHome && !isScrolled ? "text-truepal-green border-b-2 border-truepal-green pb-1" : "text-truepal-green border-b-2 border-truepal-green pb-1") 
      : "hover:text-truepal-green";

    if (isHome) {
      return (
        <a 
          href={`#${id}`} 
          className={`${baseClasses} ${activeClasses}`}
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
      <Link to={`/#${id}`} className={`${baseClasses} hover:text-truepal-green`}>
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
          {renderLink("services", "Services")}
          {renderLink("products", "Products")}
          {renderLink("contact", "Contact")}
        </div>
      </div>
    </nav>
  );
}
