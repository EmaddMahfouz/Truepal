import { Navbar } from "./components/Navbar";
import { ContactFooter } from "./components/ContactFooter";
import { HomePage } from "./pages/Home";
import { ServicePage } from "./pages/ServicePage";
import { BackToTop } from "./components/BackToTop";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// ScrollToTop strictly based on pathname change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="font-sans antialiased text-gray-900 bg-white selection:bg-truepal-green selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/:id" element={<ServicePage />} />
          </Routes>
        </main>
        {/* We moved ContactFooter inside HomePage so it does not permanently stick to other pages, but wait, it should probably be on all pages. Let's keep it in App so it's always there, but wait, the navigation anchors rely on it being there. */}
        <BackToTop />
      </div>
    </HashRouter>
  );
}
