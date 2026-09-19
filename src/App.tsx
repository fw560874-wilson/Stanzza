import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MenuOverlay } from "./components/MenuOverlay";
import { SearchOverlay } from "./components/SearchOverlay";
import { InquiryModal } from "./components/InquiryModal";
import { CookieBanner } from "./components/CookieBanner";
import { useScrollMotion } from "./hooks/useScrollMotion";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Approach } from "./pages/Approach";
import { Contact } from "./pages/Contact";
import { Legal } from "./pages/Legal";
import { NotFound } from "./pages/NotFound";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  useEffect(() => {
    document.title =
      pathname === "/"
        ? "Stanzza"
        : `Stanzza — ${pathname.replace("/", "").split("/")[0].replace(/-/g, " ")}`;
  }, [pathname]);

  return null;
}

export default function App() {
  useScrollMotion();

  return (
    <div className="page">
      <div className="scroll-line" />
      <ScrollManager />
      <Header />
      <MenuOverlay />
      <SearchOverlay />
      <InquiryModal />
      <CookieBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/awards" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Legal kind="privacy" />} />
        <Route path="/terms" element={<Legal kind="terms" />} />
        <Route path="/cookies" element={<Legal kind="cookies" />} />
        <Route path="/documents/privacy-policy" element={<Navigate to="/privacy" replace />} />
        <Route path="/documents/terms-of-service" element={<Navigate to="/terms" replace />} />
        <Route path="/documents/cookie-policy" element={<Navigate to="/cookies" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
