"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "../ui/Button";

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
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(
      (el): el is HTMLElement => el != null,
    );
    if (cards.length === 0) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      cards.forEach((el) => el.classList.add("experience-card-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("experience-card-visible");
          io.unobserve(entry.target);
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    cards.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="experience"
      aria-label="The NUHO Living Experience"
    >
      <div className="experience-shell">
        <div className="experience-grid">
          <div className="experience-left flex min-w-0 flex-col items-start gap-6 text-left xl:w-full">
            <h2 className="max-w-[600px] text-[32px] leading-[40px] tracking-[-1px] font-normal text-black lg:text-[40px] lg:leading-[56px] xl:max-w-none">
              The NUHO Living Experience
            </h2>
            <p className="max-w-[600px] text-base leading-6 text-secondary-300 xl:max-w-none">
              Thoughtfully designed spaces and warm hospitality create a stay
              that blends comfort, culture, and the relaxed rhythm of Bingin.
            </p>
            <div>
              <Button variant="secondary" href="#contact">
                Book Your Stay
              </Button>
            </div>
          </div>

          <div className="experience-right min-w-0 xl:w-full">
            <div className="experience-card-list">
              {experiences.map((exp, i) => (
                <article
                  key={exp.title}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  className="card-item"
                >
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
                    <h3 className="shrink-0 text-[24px] font-normal leading-8 tracking-[-1px] text-black lg:text-[32px] lg:leading-[40px]">
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
    </section>
  );
}
