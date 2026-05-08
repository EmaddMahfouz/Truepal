import { Hero } from "../components/Hero";
import { SolutionsMarquee } from "../components/SolutionsMarquee";
import { AboutUs } from "../components/AboutUs";
import { Solutions } from "../components/Solutions";
import { ContactFooter } from "../components/ContactFooter";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
    <>
      <Hero />
      <SolutionsMarquee />
      <AboutUs />
      <Solutions />
      <ContactFooter />
    </>
  );
}
