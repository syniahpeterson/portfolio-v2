import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import CaseStudy from "./pages/CaseStudy";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/work" element={<Work />} />

          <Route path="/work/:slug" element={<CaseStudy />} />

          <Route path="/about" element={<About />} />

          <Route path="/resume" element={<Resume />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
