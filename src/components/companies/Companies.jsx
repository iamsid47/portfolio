import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Gallery from "./Gallery";

const Companies = () => {
  return (
    <section className="bg-gray-950 text-gray-50 font-light tracking-tight">
      <Navbar />
      <section>
        <div className="overflow-x-hidden ">
          <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
            <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-3xl mx-auto text-center">
                <p className="inline-flex relative rounded-full px-3 py-1 text-sm leading-6  ring-1 hover:ring-white ring-blue-500 transition duration-200">
                  Solving real-world problems
                </p>
                <h1 className="animate-fade-in-up h1c mt-5">Companies</h1>
                <p className="max-w-md mx-auto mt-6 text-base leading-7 ">
                  Entrepreneurship ain't just about creating products. <br />
                  It's about solving problems.
                </p>

                <div className="relative inline-flex mt-10 group">
                  <a
                    href="https://getnoel.com"
                    title=""
                    className="buttonc"
                    role="button"
                  >
                    Check Out Noel &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16 md:mt-20">
              <img
                className="object-cover object-top w-full h-auto mx-auto scale-150 2xl:max-w-screen-2xl xl:scale-100"
                src="https://d33wubrfki0l68.cloudfront.net/54780decfb9574945bc873b582cdc6156144a2ba/d9fa1/images/hero/4/illustration.png"
                alt=""
              />
            </div>
          </section>
        </div>
      </section>
      <Gallery />
      <Footer />
    </section>
  );
};

export default Companies;
