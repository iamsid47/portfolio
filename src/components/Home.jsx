import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Section2 from "./Section2";
import Blockquote from "./Blockquote";
import Footer from "./Footer";

const Home = () => {
  return (
    <section className="bg-gray-950 text-gray-50 font-light tracking-tight">
      <Navbar />
      <Hero />
      <Section2 />
      <Blockquote />
      <Footer />
    </section>
  );
};

export default Home;
