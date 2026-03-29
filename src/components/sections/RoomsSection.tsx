"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";

const rooms = [
  {
    name: "Poolside Room",
    image: "/images/poolside-room.jpg",
    description:
      "A tranquil room with direct access to the pool, designed for a refreshing tropical stay.",
  },
  {
    name: "Mezzanine Room",
    image: "/images/hero-2.jpg",
    description:
      "An elevated room with a loft-style mezzanine, offering a unique and spacious layout.",
  },
  {
    name: "Rooftop Room",
    image: "/images/hero-3.jpg",
    description:
      "A room with rooftop access, perfect for enjoying stunning sunset views over Bingin.",
  },
  {
    name: "One Bedroom Villa",
    image: "/images/hero-4.jpg",
    description:
      "A private villa with a full bedroom, living area, and outdoor space for a complete tropical retreat.",
  },
];

const controlShell =
  "rounded-full border border-neutral-500/25 bg-white/85 backdrop-blur-sm shadow-sm";
const iconStroke = "#000000";

const SWIPE_THRESHOLD_PX = 50;

export default function RoomsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);

  const goPrevRoom = useCallback(() => {
    setActiveIndex((a) => (a - 1 + rooms.length) % rooms.length);
  }, []);

  const goNextRoom = useCallback(() => {
    setActiveIndex((a) => (a + 1) % rooms.length);
  }, []);

  useEffect(() => {
    const el = tabRefs.current[activeIndex];
    if (!el) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIndex]);

  const onRoomPanelTouchStart = (e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button, a")) {
      touchStartX.current = null;
      return;
    }
    touchStartX.current = e.touches[0].clientX;
  };

  const onRoomPanelTouchEnd = (e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button, a")) {
      touchStartX.current = null;
      return;
    }
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const dx = endX - touchStartX.current;
    touchStartX.current = null;
    if (dx > SWIPE_THRESHOLD_PX) goPrevRoom();
    else if (dx < -SWIPE_THRESHOLD_PX) goNextRoom();
  };

  return (
    <section
      id="rooms"
      className="w-full bg-white px-4 py-10 sm:px-6 lg:px-10"
    >
      <div className="flex flex-col gap-10 lg:gap-12">
        <h2 className="text-[40px] leading-[56px] tracking-[-1px] text-black font-normal">
          Our Rooms
        </h2>

        <div className="flex flex-col gap-6">
          <div
            className="-mx-2 flex flex-nowrap gap-4 overflow-x-auto whitespace-nowrap px-2 pb-2 lg:gap-6"
            role="tablist"
            aria-label="Room types"
          >
            {rooms.map((room, i) => (
              <button
                key={room.name}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`room-tab-${i}`}
                aria-selected={i === activeIndex}
                aria-controls="room-panel"
                tabIndex={i === activeIndex ? 0 : -1}
                onClick={() => setActiveIndex(i)}
                className={`flex min-h-[52px] w-[248px] shrink-0 items-center justify-center rounded-[20px] px-3 py-3 text-center text-2xl font-normal leading-8 tracking-[-1px] whitespace-normal transition-colors lg:min-h-[56px] lg:w-[322px] lg:px-4 lg:py-4 ${
                  i === activeIndex
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "bg-neutral-300 text-black hover:bg-secondary-100 hover:text-white"
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>

          <div
            id="room-panel"
            role="tabpanel"
            aria-labelledby={`room-tab-${activeIndex}`}
            className="relative h-[589px] w-full overflow-hidden rounded-[20px] lg:h-[660px]"
            onTouchStart={onRoomPanelTouchStart}
            onTouchEnd={onRoomPanelTouchEnd}
          >
            <Image
              key={rooms[activeIndex].image}
              src={rooms[activeIndex].image}
              alt={rooms[activeIndex].name}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="100vw"
            />

            <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-[10px] lg:flex-row lg:items-end lg:justify-between lg:p-5">
              <div className="pointer-events-auto flex w-full max-w-none flex-col gap-4 self-start rounded-2xl bg-neutral-300 p-4 lg:max-w-[435px] lg:self-auto lg:p-8">
                <p className="text-base leading-6 text-secondary-300">
                  {rooms[activeIndex].description}
                </p>
                <Button
                  variant="secondary"
                  href="#rooms"
                  className="w-fit shrink-0 self-start"
                >
                  View Room
                </Button>
              </div>

              <div className="pointer-events-auto hidden shrink-0 items-center gap-2 self-end lg:flex">
                <button
                  type="button"
                  onClick={goPrevRoom}
                  className={`flex h-11 w-11 items-center justify-center transition hover:bg-white ${controlShell}`}
                  aria-label="Previous room"
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

                <div
                  className={`flex items-center gap-4 px-4 py-3 ${controlShell}`}
                >
                  {rooms.map((_, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-3 w-3 rounded-full transition-all ${
                        i === activeIndex
                          ? "bg-neutral-500"
                          : "bg-neutral-500/30 hover:bg-neutral-500/45"
                      }`}
                      aria-label={`Show room ${i + 1}`}
                      aria-current={i === activeIndex ? "true" : undefined}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={goNextRoom}
                  className={`flex h-11 w-11 items-center justify-center transition hover:bg-white ${controlShell}`}
                  aria-label="Next room"
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

            <div className="pointer-events-auto absolute inset-x-[10px] bottom-[10px] z-10 flex min-h-10 items-center justify-between lg:hidden">
              <button
                type="button"
                onClick={goPrevRoom}
                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center transition hover:bg-white ${controlShell}`}
                aria-label="Previous room"
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
                {rooms.map((_, i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2.5 w-2.5 shrink-0 rounded-full transition-all ${
                      i === activeIndex
                        ? "bg-neutral-500"
                        : "bg-neutral-500/30"
                    }`}
                    aria-label={`Show room ${i + 1}`}
                    aria-current={i === activeIndex ? "true" : undefined}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goNextRoom}
                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center transition hover:bg-white ${controlShell}`}
                aria-label="Next room"
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
        </div>
      </div>
    </section>
  );
}
