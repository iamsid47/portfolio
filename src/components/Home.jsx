import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Footer from "./Footer";

const Home = () => {
  return (
    <section className="bg-gray-950 text-gray-50 font-light tracking-tight">
      <Navbar />
      <Hero />
      <Section2 />
      <Section3 />
      <Footer />
    </section>
  );
};

export default Home;
