import Hero from "./Hero";
import WhatWeDo from "../components/WhatWeDo";
import WhyUs from "../components/WhyUs";
import Blog from "../components/Blog";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <WhyUs variant="teaser" />
      <Blog variant="teaser" />
      <FAQ variant="teaser" />
      <Contact variant="teaser" />
    </>
  );
}
