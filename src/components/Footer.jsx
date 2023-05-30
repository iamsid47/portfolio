import React from "react";

const Footer = () => {
  return (
    <section>
      <hr className="my-2 h-0.5 bg-gray-50 border-0" />

      <footer class="p-4 lg:p-7 ">
        <div class="mx-auto max-w-screen-xl text-center flex flex-col items-start">
          <p class="my-6 text-3xl text-gray-300 tracking-tight">
            for the &hearts; of machine learning.
          </p>
          <ul class="flex flex-wrap justify-center items-center mb-6  ">
            <li>
              <a
                href="/"
                class="mr-4 hover:underline md:mr-6 underline-offset-8 "
              >
                Social
              </a>
            </li>
            <li>
              <a
                href="/"
                class="mr-4 hover:underline md:mr-6 underline-offset-8"
              >
                Get in touch
              </a>
            </li>
            <li>
              <a
                href="/"
                class="mr-4 hover:underline md:mr-6 underline-offset-8 "
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="/"
                class="mr-4 hover:underline md:mr-6 underline-offset-8"
              >
                Privacy
              </a>
            </li>
          </ul>
          <span class="text-sm  sm:text-center ">
            © 2023,{" "}
            <a href="/" class="underline underline-offset-8">
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
