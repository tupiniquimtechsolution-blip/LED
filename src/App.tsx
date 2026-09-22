import { useEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import PixelGrid from "./components/PixelGrid";
import Noise from "./components/Noise";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Home from "./pages/Home";
import CasePage from "./pages/CasePage";
import Presentation from "./pages/Presentation";

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
      <div className="relative min-h-screen bg-night-950 font-body text-ink antialiased">
        <PixelGrid />
        <Noise />
        <Cursor />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos/:slug" element={<CasePage />} />
            <Route path="/apresentacao" element={<Presentation />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </HashRouter>
  );
}
