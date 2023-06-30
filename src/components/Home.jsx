import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Section3 from "./Section3";
import Footer from "./Footer";
import Sectionmid from "./Sectionmid";
import CTA from "./CTA";

const Home = () => {
  return (
    <section className="bgc">
      <Navbar />
      <Hero />
      <Section3 />
      <Sectionmid />
      <CTA />
      <Footer />
    </section>
  );
};

export default Home;
