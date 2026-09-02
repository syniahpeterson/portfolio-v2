import Hero from "../sections/Hero";
import WhatIDo from "../sections/WhatIDo";
import FeaturedWork from "../sections/FeaturedWork";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import AboutPreview from "../sections/AboutPreview";
import FinalCTA from "../sections/FinalCTA";

function Home() {
  return (
    <main>
      <Hero />
      <WhatIDo />
      <FeaturedWork />
      <Experience />
      <Skills />
      <AboutPreview />
      <FinalCTA />
    </main>
  );
}

export default Home;
