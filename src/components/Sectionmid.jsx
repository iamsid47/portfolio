import React, { useState } from "react";

const Sectionmid = () => {
  return (
    <div className="bgc">
      <section className="py-10 lg:pt-20 lg:pb-32">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:flex lg:flex-row-reverse">
            <div className="mx-4">
              <h1 className="text-4xl font-bold text-white sm:text-6xl lg:text-7xl capitalize">
                Hire a dev for 12%{" "}
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-blue-500"></span>
                  <h1 className="relative text-4xl font-bold text-white sm:text-6xl lg:text-7xl">
                    Equity.
                  </h1>
                </div>
              </h1>

              <p className="mt-8 text-base text-white sm:text-xl">
                With startups having little to no capital, equity is the only
                thing that they can offer. While, I can promise to stick with
                the idea for a long time and be a lead developer in your
                organization!
              </p>

              <div className="mt-10 flex items-center space-x-4">
                <a href="/" title="" className="buttonc" role="button">
                  Hire Me &rarr;
                </a>

                <a href="/" title="" className="buttoncs">
                  Projects
                </a>
              </div>
            </div>

            <div>
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Sectionmid;
