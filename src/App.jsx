import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/work" element={<Work />} />

          <Route path="/work/:slug" element={<CaseStudy />} />

          <Route path="/about" element={<About />} />

          <Route path="/resume" element={<Resume />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
