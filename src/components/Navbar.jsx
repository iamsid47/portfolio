import React from "react";

const Navbar = () => {
  return (
    <section className="bgc">
      <nav className="pt-4 flex justify-center items-end p-4 group">
        <a href="/">
          <h1 className="text-3xl uppercase tracking-tight font-light">
            Siddhesh K.
          </h1>
        </a>
      </nav>
      <hr className="h-0.5 bg-gray-50 border-0" />
    </section>
  );
};

export default Navbar;
