"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Button from "../ui/Button";

const heroImages = [
  { src: "/images/hero-1.jpg", alt: "NUHO Living exterior with white architecture" },
  { src: "/images/hero-2.jpg", alt: "NUHO Living ocean view" },
  { src: "/images/hero-3.jpg", alt: "NUHO Living tropical garden" },
  { src: "/images/hero-4.jpg", alt: "NUHO Living rooftop view" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full bg-white pt-2 pb-[40px] px-6 lg:px-10">
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[760px] rounded-[20px] overflow-hidden">
        {/* Images */}
        {heroImages.map((img, i) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-end justify-between p-5 lg:p-5">
          {/* Card */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 max-w-[720px] flex flex-col gap-4 lg:gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-[32px] lg:text-[48px] leading-[40px] lg:leading-[56px] tracking-[-1px] text-black font-normal">
                Stay Where Comfort Meets Culture
              </h1>
              <p className="text-base leading-6 text-secondary-500 max-w-[600px]">
                Modern comfort and local heritage come together in a
                thoughtfully designed living experience near Bingin Beach.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Button variant="primary" href="#contact">
                Book Your Stay
              </Button>
              <Button variant="secondary" href="#contact">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Carousel controls */}
          <div className="hidden sm:flex items-center gap-2 self-end">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-white/40 backdrop-blur-md bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
              aria-label="Previous slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="flex items-center gap-4 px-4 py-3 rounded-full border border-white/40 backdrop-blur-md bg-white/20">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-white" : "bg-white/40"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-white/40 backdrop-blur-md bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
              aria-label="Next slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18l6-6-6-6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dots */}
        <div className="sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-white" : "bg-white/40"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
