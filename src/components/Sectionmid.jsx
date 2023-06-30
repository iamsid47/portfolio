import React, { useState } from "react";

const Sectionmid = () => {
  return (
    <div className="bgc">
      <section className="py-10 lg:pt-20 lg:pb-32">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-white sm:text-6xl lg:text-7xl">
                I ask 12%{" "}
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-blue-500"></span>
                  <h1 className="relative text-4xl font-bold text-white sm:text-6xl lg:text-7xl">
                    Equity.
                  </h1>
                </div>
              </h1>

              <p className="mt-8 text-base text-white sm:text-xl">
                I understand that startups have a hard time when it comes to
                developing solutions. And that is why, I have decided to help
                you out with your startup, in a fair exchange for 12% of your
                company's equity.
              </p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
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
