import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Footer from "./Footer";
import Sectionmid from "./Sectionmid";

const Home = () => {
  return (
    <section className="bgc">
      <Navbar />
      <Hero />
      <Sectionmid />
      <Section2 />
      <Section3 />
      <Footer />
    </section>
  );
};

export default Home;
