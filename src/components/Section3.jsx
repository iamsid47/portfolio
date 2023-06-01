import React from "react";

const Section3 = () => {
  return (
    <section>
      <section class="grid grid-cols-1 my-1">
        <section class="">
          <a href="/research" class="group relative block">
            <div class="relative h-[500px] md:h-[350px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt=""
                class=" h-full w-full object-cover opacity-60 brightness-50"
              />
            </div>

            <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
              <h3 class="text-5xl hover:bg-gray-50 hover:text-black px-2.5 py-2.5 font-medium bg-black text-gray-50 transition duration-200">
                Research
              </h3>

              <p class="mt-1.5 text-lg max-w-xl">
                Explore my latest research endeavors, where I delve into
                cutting-edge technologies and innovative solutions
              </p>
            </div>
          </a>
        </section>
      </section>
    </section>
  );
};

export default Section3;
