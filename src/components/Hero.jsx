import React from "react";
import Social from "./Social";

export default function Hero() {
  return (
    <div className="pb-16">
      <div className="flex flex-col items-center justify-center">
        <div className="mx-auto max-w-7xl py-24">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <a
              href="https://twitter.com/9to5ML"
              target="_blank"
              rel="noreferrer"
              className="font-semibold"
            >
              <div className="relative rounded-full px-3 py-1 text-sm leading-6  ring-1 hover:ring-white ring-blue-500 transition duration-200">
                Check me out on Twitter &rarr;
              </div>
            </a>
          </div>
          <div className="text-center flex flex-col justify-center items-center">
            <h1 className="animate-fade-in-up text-5xl md:text-8xl mx-3 font-bold tracking-tighter text-white py-2">
              Have an{" "}
              <span className="text-yellow-400 underline underline-offset-8">
                idea
              </span>
              , but no{" "}
              <span className="text-green-500 underline underline-offset-8 pr-3">
                money
              </span>
              ?
            </h1>
            <p className="mt-6 text-base lg:text-lg leading-8 px-12 lg:w-3/5 tracking-normal">
              Hey 👋 I'm Siddhesh. I'm a Machine Learning Engineer, also with
              experience in Web and App development. I can help you out with
              your idea or projects!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/contact" className="buttonc">
                Hire Me &rarr;
              </a>
              <a href="/projects" className="buttoncs">
                Projects
              </a>
            </div>
          </div>
        </div>
        <div>
          <Social />
        </div>
      </div>
    </div>
  );
}
