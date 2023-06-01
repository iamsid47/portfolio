import React from "react";

const data = [
  {
    name: "Codemugg",
    href: "https://www.crunchbase.com/organization/codemugg",

    des: "Codemugg is an organization that aims to promote and teach programming without a price tag.",
    img: "https://landingfoliocom.imgix.net/store/collection/niftyui/images/gallery/2/image-3.png",
  },
  {
    name: "Kulthe Media",
    href: "https://kulthe.com",

    des: "Kulthe Media is a data-driven advertising agency that bring faster growth to your business.",
    img: "https://landingfoliocom.imgix.net/store/collection/niftyui/images/gallery/2/image-2.png",
  },
  {
    name: "Noel",
    href: "https://getnoel.com",

    des: "Noel is an AI-powered support rep that works 24/7 and can save you thousands!",
    img: "https://landingfoliocom.imgix.net/store/collection/niftyui/images/gallery/2/image-5.png",
  },
];

const Gallery = () => {
  return (
    <section className="my-12">
      <section class="grid grid-cols-1 md:grid-cols-3 md:space-x-1 space-y-4 md:space-y-0 justify-center items-center">
        {data.map((item) => (
          <section class="max-w-2xl">
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

export default Gallery;
