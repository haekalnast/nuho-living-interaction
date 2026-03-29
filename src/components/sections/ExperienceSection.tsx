"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    icon: "/images/icon-activity.svg",
    title: "Thoughtfully Designed Spaces",
    description:
      "Each room is designed with comfort and simplicity in mind, creating a calm and inviting place to stay.",
  },
  {
    icon: "/images/icon-concierge.svg",
    title: "Warm Hospitality",
    description:
      "Our team provides attentive and thoughtful service, ensuring every stay feels welcoming, personal, and comfortable.",
  },
  {
    icon: "/images/icon-temple.svg",
    title: "A Stay Inspired by Culture",
    description:
      "Experience a living environment that blends modern comfort with the local character of Bingin.",
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const list = listRef.current;
    if (!section || !list) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      if (reduced) return;

      const items = gsap.utils.toArray<HTMLElement>(
        list.querySelectorAll(".card-item"),
      );
      if (items.length === 0) return;

      gsap.from(items, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: list,
          start: "top 80%",
        },
      });
    }, section);

    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="experience"
      aria-label="The NUHO Living Experience"
    >
      <div className="experience-shell">
        <div className="experience-grid">
          <div className="experience-left flex flex-col items-start gap-6 text-left">
            <h2 className="max-w-[600px] text-[40px] leading-[56px] font-normal tracking-[-1px] text-black">
              The NUHO Living Experience
            </h2>
            <p className="max-w-[600px] text-base leading-6 text-secondary-300">
              Thoughtfully designed spaces and warm hospitality create a stay
              that blends comfort, culture, and the relaxed rhythm of Bingin.
            </p>
            <div>
              <Button variant="secondary" href="#contact">
                Book Your Stay
              </Button>
            </div>
          </div>

          <div className="experience-right">
            <div className="experience-sticky">
              <div ref={listRef} className="experience-card-list">
                {experiences.map((exp) => (
                  <article key={exp.title} className="card-item">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary p-2">
                      <Image
                        src={exp.icon}
                        alt=""
                        width={32}
                        height={32}
                        className="h-8 w-8"
                        unoptimized
                      />
                    </div>
                    <div className="flex min-h-0 flex-1 flex-col gap-3">
                      <h3 className="shrink-0 text-[32px] font-normal leading-[40px] tracking-[-1px] text-black">
                        {exp.title}
                      </h3>
                      <p className="min-h-0 text-base leading-6 text-secondary-300 line-clamp-3 lg:line-clamp-2">
                        {exp.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
