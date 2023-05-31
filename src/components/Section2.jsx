import React from "react";

const data = [
  {
    name: "Projects",
    href: "#",
    lname: "Check it out",
    des: "Contributed to a lot of project that includes the use of machine learning, web dev, and even game development!",
    img: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Companies",
    href: "#",
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
      <section className="grid grid-cols-3 space-x-1">
        {data.map((item) => (
          <section className="max-w-lg">
            <a href={item.href} class="group relative block">
              <div class="relative h-[350px] sm:h-[450px] overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  class="transform hover:scale-110 transition-transform duration-300 ease-in-out h-full w-full object-cover opacity-60 brightness-50"
                />
              </div>

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-5xl bg-gray-50 text-black px-1.5 py-1.5 font-medium ">
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
