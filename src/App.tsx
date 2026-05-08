import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SolutionsMarquee } from "./components/SolutionsMarquee";
import { AboutUs } from "./components/AboutUs";
import { Solutions } from "./components/Solutions";
import { ContactFooter } from "./components/ContactFooter";

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-truepal-green selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SolutionsMarquee />
        <AboutUs />
        <Solutions />
      </main>
      <ContactFooter />
    </div>
  );
}
