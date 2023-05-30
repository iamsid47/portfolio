import React from "react";

const data = [
  {
    name: "Projects",
    href: "#",
    lname: "Check it out",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit aperiam ipsum!",
    img: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Companies",
    href: "#",
    lname: "Check it out",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit aperiam ipsum!",
    img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80",
  },
  {
    name: "About",
    href: "#",
    lname: "Check it out",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit aperiam ipsum!",
    img: "https://images.unsplash.com/photo-1518481852452-9415b262eba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

const Section2 = () => {
  return (
    <section>
      <section className="grid grid-cols-3 space-x-1">
        {data.map((item) => (
          <section className="max-w-lg">
            <a href="/" class="group relative block">
              <div class="relative h-[350px] sm:h-[450px] overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  class=" inset-0 h-full w-full object-cover opacity-100 brightness-50 hover:brightness-75"
                />
              </div>

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-3xl font-medium ">{item.name}</h3>

                <p class="mt-1.5 max-w-[40ch] text-lg ">{item.des}</p>

                <a href={item.href}>
                  <span class="mt-3 inline-block rounded-md bg-blue-700 px-3.5 py-1.5 transition duration-200 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ">
                    {item.lname}
                  </span>
                </a>
              </div>
            </a>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Section2;
