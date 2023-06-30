import React from "react";

const Footer = () => {
  return (
    <section className=" bottom-0 bg-gray-900 text-gray-50">
      <hr className=" h-0.5 bg-gray-50 border-0" />

      <footer className="p-4">
        <div className="mx-auto max-w-screen-xl text-center flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col lg:items-start justify-center items-center">
            <p className="my-2 text-base lg:text-2xl text-gray-300 tracking-tight">
              for the &#10084; of startups.
            </p>
            <ul className="flex flex-wrap justify-center items-center my-2 text-sm capitalize">
              <li>
                <a
                  href="/contact"
                  className="mr-4 hover:underline md:mr-6 underline-offset-8"
                >
                  Get in touch
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="mr-4 hover:underline md:mr-6 underline-offset-8 "
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="mr-4 hover:underline md:mr-6 underline-offset-8"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          <span className="sm:text-center text-sm my-3 md:my-0">
            © 2023,{" "}
            <a
              href="https://kulthe.com"
              rel="noreferrer"
              target="_blank"
              className="hover:underline md:underline underline-offset-8"
            >
              Kulthe Media, Limited
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
