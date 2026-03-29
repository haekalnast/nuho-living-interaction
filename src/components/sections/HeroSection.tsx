"use client";

import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import Image from "next/image";
import Button from "../ui/Button";

/**
 * Hero carousel — Figma hero copy (node 313-25615) + mobile layout (2130-9219).
 * Mobile: image + dots on top, title/body/buttons below (no card).
 * Desktop: card overlay inside the image frame.
 */
const heroSlides = [
  {
    src: "/images/hero-1.jpg",
    alt: "NUHO Living exterior with white architecture",
    title: "Stay Where Comfort Meets Culture",
    subtitle:
      "Modern comfort and local heritage come together in a thoughtfully designed living experience near Bingin Beach.",
  },
  {
    src: "/images/hero-2.jpg",
    alt: "NUHO Living shared living spaces",
    title: "Spaces Designed for Living and Connection",
    subtitle:
      "Warm interiors and shared spaces are crafted for dining, relaxing, and spending meaningful time in a comfortable setting.",
  },
  {
    src: "/images/hero-3.jpg",
    alt: "NUHO Living open air bathroom",
    title: "A Private Space for Rest and Relaxation",
    subtitle:
      "An open air bathroom experience designed for slow mornings, quiet evenings, and a more personal way to unwind.",
  },
  {
    src: "/images/hero-4.jpg",
    alt: "NUHO Living pool and courtyard",
    title: "A Calm Space for Everyday Living",
    subtitle:
      "A shared courtyard with a pool offers a relaxed environment for social moments and a balanced daily stay experience.",
  },
] as const;

const SLIDE_COUNT = heroSlides.length;

function buildExtendedSlides() {
  const last = heroSlides[SLIDE_COUNT - 1];
  const first = heroSlides[0];
  return [
    { ...last, key: "clone-end" },
    ...heroSlides.map((s, i) => ({ ...s, key: `slide-${i}` })),
    { ...first, key: "clone-start" },
  ];
}

export default function HeroSection() {
  const extendedSlides = useMemo(() => buildExtendedSlides(), []);
  const panelCount = extendedSlides.length;

  const [index, setIndex] = useState(1);
  const [transitionOn, setTransitionOn] = useState(true);
  const indexRef = useRef(index);
  indexRef.current = index;

  const contentIndex =
    index <= 0
      ? SLIDE_COUNT - 1
      : index >= panelCount - 1
        ? 0
        : index - 1;

  const slide = heroSlides[contentIndex] ?? heroSlides[0];

  const bumpTransition = useCallback(() => {
    setTransitionOn(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setTransitionOn(true));
    });
  }, []);

  const handleTrackTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (e.propertyName !== "transform") return;
      const current = indexRef.current;
      if (current === panelCount - 1) {
        bumpTransition();
        setIndex(1);
      } else if (current === 0) {
        bumpTransition();
        setIndex(SLIDE_COUNT);
      }
    },
    [panelCount, bumpTransition],
  );

  const goNext = useCallback(() => {
    setIndex((i) => (i < panelCount - 1 ? i + 1 : i));
  }, [panelCount]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i > 0 ? i - 1 : i));
  }, []);

  const goToSlide = useCallback(
    (realIdx: number) => {
      const target = realIdx + 1;
      if (target === index) return;
      if (index === SLIDE_COUNT && target === 1) {
        goNext();
        return;
      }
      if (index === 1 && target === SLIDE_COUNT) {
        goPrev();
        return;
      }
      setIndex(target);
    },
    [index, goNext, goPrev],
  );

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  const trackTransform = `translateX(-${(index * 100) / panelCount}%)`;

  const controlShell =
    "rounded-full border border-neutral-500/25 bg-white/85 backdrop-blur-sm shadow-sm";
  const iconStroke = "#000000";

  /* ---------- shared image strip ---------- */
  const imageStrip = (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className={`flex h-full will-change-transform ${
          transitionOn
            ? "transition-transform duration-700 ease-out motion-reduce:transition-none motion-reduce:duration-0"
            : ""
        }`}
        style={{
          width: `${panelCount * 100}%`,
          transform: trackTransform,
        }}
        onTransitionEnd={handleTrackTransitionEnd}
      >
        {extendedSlides.map((s, i) => (
          <div
            key={s.key}
            className="relative h-full shrink-0"
            style={{ width: `${100 / panelCount}%` }}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              className="object-cover"
              priority={i === 1}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative w-full bg-white pt-2 pb-6 sm:pb-[40px] px-4 sm:px-6 lg:px-10">
      {/* ===== MOBILE (< sm): image block + text below ===== */}
      <div className="sm:hidden flex flex-col gap-4">
        {/* Image + dots */}
        {/* Figma mobile hero frame: 390px tall (node ~313-31155) */}
        <div className="relative h-[390px] w-full rounded-[16px] overflow-hidden">
          {imageStrip}

          {/* Arrows at bottom L/R; dots centered (Figma ~313-31158, max horizontal space) */}
          <div className="pointer-events-auto absolute inset-x-3 bottom-3 z-10 flex min-h-10 items-center justify-between">
            <button
              type="button"
              onClick={goPrev}
              className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center transition hover:bg-white ${controlShell}`}
              aria-label="Previous slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke={iconStroke}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              className={`pointer-events-auto absolute left-1/2 top-1/2 z-[5] flex w-fit -translate-x-1/2 -translate-y-1/2 items-center gap-3 px-3 py-2.5 ${controlShell}`}
            >
              {heroSlides.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`h-2.5 w-2.5 shrink-0 rounded-full transition-all ${
                    i === contentIndex
                      ? "bg-neutral-500"
                      : "bg-neutral-500/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === contentIndex ? "true" : undefined}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center transition hover:bg-white ${controlShell}`}
              aria-label="Next slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18l6-6-6-6"
                  stroke={iconStroke}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Title + body + buttons — outside the image, no card */}
        <div
          className="flex flex-col gap-4 transition-opacity duration-500 ease-out motion-reduce:transition-none"
          key={`mobile-${contentIndex}`}
          aria-live="polite"
        >
          <h1 className="text-2xl leading-8 tracking-[-1px] text-black font-normal">
            {slide.title}
          </h1>
          <p className="text-base leading-6 text-secondary-500">
            {slide.subtitle}
          </p>
          {/* Hug width, side by side (Figma ~313-31229) */}
          <div className="flex flex-row flex-wrap items-center gap-4">
            <Button variant="primary" href="#contact" className="shrink-0">
              Book Your Stay
            </Button>
            <Button variant="secondary" href="#contact" className="shrink-0">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* ===== DESKTOP (sm+): image frame with card overlay ===== */}
      <div className="hidden sm:block relative w-full h-[600px] lg:h-[760px] rounded-[20px] overflow-hidden">
        {imageStrip}

        <div className="absolute inset-0 flex items-end justify-between p-5 lg:p-5 pointer-events-none">
          {/* Card */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 max-w-[720px] flex flex-col gap-4 lg:gap-6 pointer-events-auto">
            <div
              className="flex flex-col gap-4 transition-opacity duration-500 ease-out motion-reduce:transition-none"
              key={`desktop-${contentIndex}`}
              aria-live="polite"
            >
              <h1 className="text-[32px] lg:text-[48px] leading-[40px] lg:leading-[56px] tracking-[-1px] text-black font-normal">
                {slide.title}
              </h1>
              <p className="text-base leading-6 text-secondary-500 max-w-[600px]">
                {slide.subtitle}
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

          {/* Desktop controls */}
          <div className="flex items-center gap-2 self-end shrink-0 pointer-events-auto">
            <button
              type="button"
              onClick={goPrev}
              className={`w-11 h-11 flex items-center justify-center hover:bg-white transition ${controlShell}`}
              aria-label="Previous slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke={iconStroke}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className={`flex items-center gap-4 px-4 py-3 ${controlShell}`}>
              {heroSlides.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === contentIndex
                      ? "bg-neutral-500"
                      : "bg-neutral-500/30 hover:bg-neutral-500/45"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === contentIndex ? "true" : undefined}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className={`w-11 h-11 flex items-center justify-center hover:bg-white transition ${controlShell}`}
              aria-label="Next slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18l6-6-6-6"
                  stroke={iconStroke}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
