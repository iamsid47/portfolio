import React, { useState } from "react";

const ComponentName = () => {
  return (
    <div className="relative bgc mx-6 lg:mx-0">
      <section className="relative ">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 "></div>
        </div>

        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2">
          <div className="flex items-start px-4 pb-16  pt-28 sm:px-6 lg:px-8 lg:pb-24 xl:pr-12">
            <div className="max-w-xl mx-auto lg:mx-0">
              <p className="text-5xl sm:text-6xl lg:text-7xl">✨</p>
              <h1 className="mt-10 text-3xl font-semibold text-white sm:text-4xl lg:text-7xl">
                Is developing your idea hard?
              </h1>
              <p className="mt-6 text-base lg:text-lg max-w-lg font-normal leading-7 text-gray-300">
                I understand that startups have a hard time when it comes to
                developing solutions. And that is why, I have decided to help
                you out with your startup, in a fair exchange for 12% of your
                company's equity.
              </p>
              <div className="relative inline-flex mt-10">
                <a href="/" title="" className="buttonc" role="button">
                  Learn More About Me &rarr;
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex items-end px-4 py-16 sm:px-6 lg:pb-24 lg:px-8 xl:pl-12">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              <p className="text-lg  text-white">Check Out My Work</p>

              <div className="mt-6 space-y-5">
                <div className="text-gray-800 overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
                      <a href="/" title="" className="shrink-0">
                        <img
                          className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
                          src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/6/thumbnail-1.png"
                          alt=""
                        />
                      </a>

                      <div className="flex-1 ml-4 lg:ml-6">
                        <p className="mt-2 text-lg font-semibold  lg:text-3xl group-hover:text-gray-600">
                          <p title="" className="">
                            Projects
                          </p>
                        </p>
                        <a href="/" className="buttonc mt-2">
                          Learn More &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-gray-800 overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
                      <a href="/" title="" className="shrink-0">
                        <img
                          className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
                          src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/6/thumbnail-2.png"
                          alt=""
                        />
                      </a>

                      <div className="flex-1 ml-4 lg:ml-6">
                        <p className="mt-2 text-lg font-semibold  lg:text-3xl group-hover:text-gray-600">
                          <p title="" className="">
                            Companies
                          </p>
                        </p>
                        <a href="/" className="buttonc mt-2">
                          Learn More &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-gray-800 overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
                      <a href="/" title="" className="shrink-0">
                        <img
                          className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
                          src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/6/thumbnail-3.png"
                          alt=""
                        />
                      </a>

                      <div className="flex-1 ml-4 lg:ml-6">
                        <p className="mt-2 text-lg font-semibold   lg:text-3xl group-hover:text-gray-600">
                          <p title="" className="">
                            About
                          </p>
                        </p>
                        <a href="/" className="buttonc mt-2">
                          Learn More &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ComponentName;
