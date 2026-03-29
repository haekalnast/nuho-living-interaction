"use client";

import { useEffect, useRef, useState } from "react";
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

function DiscoverCard({
  title,
  description,
  image,
}: (typeof discoveries)[number]) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.38, rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="group box-border h-[585px] cursor-pointer rounded-[20px] p-[10px] lg:h-[720px]"
    >
      {/* 10px inset around photo only (Figma 272-6120); inner card padding unchanged */}
      <div className="relative h-full min-h-0 overflow-hidden rounded-[20px]">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${
            inView ? "max-lg:scale-105" : "max-lg:scale-100"
          } lg:scale-100 lg:group-hover:scale-105`}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            inView ? "max-lg:bg-black/20" : "max-lg:bg-black/0"
          } lg:bg-black/0 lg:group-hover:bg-black/20`}
        />

        <div
          className={`absolute bottom-[10px] left-[10px] right-[10px] translate-y-[calc(100%-60px)] transition-transform duration-500 motion-reduce:translate-y-0 lg:bottom-5 lg:left-5 lg:right-5 lg:group-hover:translate-y-0 ${
            inView ? "max-lg:translate-y-0" : ""
          }`}
        >
          <div className="flex flex-col gap-4 rounded-2xl bg-neutral-300 p-6 lg:p-8">
            <h3 className="text-2xl leading-8 tracking-[-1px] text-black font-normal">
              {title}
            </h3>
            <p
              className={`text-base leading-6 text-secondary-300 transition-opacity delay-100 duration-500 motion-reduce:opacity-100 ${
                inView ? "max-lg:opacity-100" : "max-lg:opacity-0"
              } lg:opacity-0 lg:delay-100 lg:group-hover:opacity-100`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DiscoverSection() {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 lg:px-10">
      <div className="flex flex-col gap-10 lg:gap-12">
        <h2 className="text-[40px] leading-[56px] tracking-[-1px] text-black font-normal">
          Discover Bingin
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {discoveries.map((item) => (
            <DiscoverCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
