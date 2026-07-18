import { Hero } from "../components/Hero";
import { SolutionsMarquee } from "../components/SolutionsMarquee";
import { AboutUs } from "../components/AboutUs";
import { Solutions } from "../components/Solutions";
import { Brands } from "../components/Brands";
import { ContactFooter } from "../components/ContactFooter";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";

export function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Hero />
      <SolutionsMarquee />
      <AboutUs />
      <Solutions />
      <Brands />
      <ContactFooter />
    </motion.div>
  );
}
