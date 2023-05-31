import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen">
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
            <h1 className="animate-fade-in-up text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 bg-clip-text text-transparent py-2">
              Machine Learning Engineer
            </h1>
            <p className="mt-6 text-lg leading-8 px-12 lg:w-3/5 tracking-normal">
              Hey 👋 I'm Siddhesh. I make and break stuff, love coffee and am
              always improving myself. Not an overfitting model, but rather an
              iterating one!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="rounded-md bg-blue-700 px-3.5 py-1.5 transition duration-200 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get in touch
              </a>
              <a
                href="https://getnoel.com/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold leading-6 text-gray-100 hover:underline underline-offset-8"
              >
                Check Noel <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="24"
            height="24"
            className="animate-bounce"
          >
            <path d="M12 20c-.5 0-1-.2-1.4-.6L1.9 11.9c-.8-.8-.8-2 0-2.8s2-.8 2.8 0L12 16.6l7.3-7.5c.8-.8 2-.8 2.8 0s.8 2 0 2.8l-9.7 9.6c-.4.4-.9.6-1.4.6z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
