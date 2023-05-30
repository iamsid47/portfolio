import React from "react";

const About = () => {
  return (
    <section className="bg-gray-950 text-gray-50 font-light tracking-tight">
      <section className="">
        <nav className=" pt-12 flex justify-center items-end p-4">
          <h1 className="text-4xl uppercase tracking-tight font-light">
            <a href="/" className="mx-5">
              Siddhesh K.{" "}
            </a>
            /
            <a href="/about" className="">
              <span className="font-bold tracking-tighter bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 bg-clip-text text-transparent py-2">
                ABOUT
              </span>
            </a>
          </h1>
        </nav>
        <hr className="my-4 h-0.5 bg-gray-50 border-0" />
      </section>
      <section className="py-10">
        <div className="flex justify-center items-center">
          <div className="max-w-lg mx-8">
            <img
              src="https://images.unsplash.com/photo-1473830394358-91588751b241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="ml-8 rounded-xl shadow-lg"
            />
          </div>
          <div className="max-w-xl mx-8">
            <h1 className="tracking-wide text-xl max-w-xl ml-12">
              As a machine learning enthusiast, I'm deeply passionate about
              pushing the boundaries of what's possible with data-driven
              technologies. With unwavering dedication, I strive to create
              innovative solutions that harness the power of machine learning to
              drive positive change and unlock new opportunities.
            </h1>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
