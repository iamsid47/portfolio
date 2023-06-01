import React from "react";

const data = [
  {
    name: "Projects",
    href: "/projects",
    lname: "Check it out",
    des: "Contributed to a lot of project that includes the use of machine learning, web dev, and even game development!",
    img: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Companies",
    href: "/companies",
    lname: "Check it out",
    des: "Being an entrepreneur is an amazing experience. Check out my companies to learn out the problems I'm solving",
    img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80",
  },
  {
    name: "About",
    href: "/about",
    lname: "Check it out",
    des: "Learn more about me, my story behind being an entrepreneur, and the reason why I love coffee so much",
    img: "https://images.unsplash.com/photo-1518481852452-9415b262eba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

const Section2 = () => {
  return (
    <section>
      <section class="grid grid-cols-1 md:grid-cols-3 md:space-x-1 space-y-4 md:space-y-0">
        {data.map((item) => (
          <section class="max-w-lg">
            <a href={item.href} class="group relative block">
              <div class="relative h-[500px] md:h-[550px] overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  class=" h-full w-full object-cover opacity-60 brightness-50"
                />
              </div>

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-5xl hover:bg-gray-50 hover:text-black px-2.5 py-2.5 font-medium bg-black text-gray-50 transition duration-200">
                  {item.name}
                </h3>

                <p class="mt-1.5 text-lg max-w-xl">{item.des}</p>
              </div>
            </a>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Section2;
