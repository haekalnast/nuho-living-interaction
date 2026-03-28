"use client";

import Image from "next/image";

const discoveries = [
  {
    title: "Beach & Ocean",
    description:
      "Bingin is known for its beautiful coastline and surf culture, offering stunning ocean views just minutes from NUHO Living.",
    image: "/images/beach-ocean.jpg",
  },
  {
    title: "Local Culture",
    description:
      "Discover the rich culture of Bali through nearby temples, traditional ceremonies, and village life.",
    image: "/images/local-culture.jpg",
  },
  {
    title: "Wellness & Relaxation",
    description:
      "Slow down and recharge with yoga studios, spa treatments, and the calm coastal atmosphere of Bingin.",
    image: "/images/wellness.jpg",
  },
  {
    title: "Tropical Lifestyle",
    description:
      "Enjoy the relaxed rhythm of Bingin with scenic walks, sunset views, and a peaceful tropical environment.",
    image: "/images/tropical.jpg",
  },
];

export default function DiscoverSection() {
  return (
    <section className="w-full bg-white px-6 lg:px-10 py-10">
      <div className="flex flex-col gap-10 lg:gap-12">
        <h2 className="text-[40px] leading-[56px] tracking-[-1px] text-black font-normal">
          Discover Bingin
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {discoveries.map((item) => (
            <div
              key={item.title}
              className="group relative h-[400px] sm:h-[500px] lg:h-[720px] rounded-[20px] overflow-hidden cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

              {/* Card that slides up on hover */}
              <div className="absolute bottom-5 left-5 right-5 translate-y-[calc(100%-60px)] group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-neutral-300 rounded-2xl p-6 lg:p-8 flex flex-col gap-4">
                  <h3 className="text-2xl leading-8 tracking-[-1px] text-black font-normal">
                    {item.title}
                  </h3>
                  <p className="text-base leading-6 text-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
