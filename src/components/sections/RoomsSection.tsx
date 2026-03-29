"use client";

import { useState } from "react";
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

export default function RoomsSection() {
  const [active, setActive] = useState(0);

  const handleRoomChange = (index: number) => {
    setActive(index);
  };

  const goPrevRoom = () => {
    setActive((a) => (a - 1 + rooms.length) % rooms.length);
  };

  const goNextRoom = () => {
    setActive((a) => (a + 1) % rooms.length);
  };

  return (
    <section
      id="rooms"
      className="w-full bg-white px-4 py-10 sm:px-6 lg:px-10"
    >
      <div className="flex flex-col gap-10 lg:gap-12">
        {/* Heading */}
        <h2 className="text-[40px] leading-[56px] tracking-[-1px] text-black font-normal">
          Our Rooms
        </h2>

        {/* Room preview */}
        <div className="flex flex-col gap-6">
          {/* Tabs */}
          <div
            className="flex gap-4 lg:gap-6 overflow-x-auto pb-2 -mx-2 px-2"
            role="tablist"
            aria-label="Room types"
          >
            {rooms.map((room, i) => (
              <button
                key={room.name}
                type="button"
                role="tab"
                id={`room-tab-${i}`}
                aria-selected={i === active}
                aria-controls="room-panel"
                tabIndex={i === active ? 0 : -1}
                onClick={() => handleRoomChange(i)}
                className={`flex min-h-[52px] w-[248px] shrink-0 items-center justify-center rounded-[20px] px-3 py-3 text-center text-2xl font-normal leading-8 tracking-[-1px] whitespace-normal transition-colors lg:min-h-[56px] lg:w-[322px] lg:px-4 lg:py-4 ${
                  i === active
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "bg-neutral-300 text-black hover:bg-secondary-100 hover:text-white"
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>

          {/* Image & description */}
          <div
            id="room-panel"
            role="tabpanel"
            aria-labelledby={`room-tab-${active}`}
            className="relative h-[589px] w-full overflow-hidden rounded-[20px] lg:h-[660px]"
          >
            <Image
              src={rooms[active].image}
              alt={rooms[active].name}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="100vw"
            />

            {/* Overlay: mobile 10px; lg 20px (p-5) */}
            <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-[10px] lg:flex-row lg:items-end lg:justify-between lg:p-5">
              {/* Description card — mobile max 338px / fill; desktop max 435px */}
              <div className="pointer-events-auto flex w-full max-w-[338px] flex-col gap-4 self-start rounded-2xl bg-neutral-300 p-4 lg:max-w-[435px] lg:self-auto lg:p-8">
                <p className="text-base leading-6 text-secondary-300">
                  {rooms[active].description}
                </p>
                <Button
                  variant="secondary"
                  href="#rooms"
                  className="w-fit shrink-0 self-start"
                >
                  View Room
                </Button>
              </div>

              {/* Desktop: same grouped control strip as Hero */}
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
                      onClick={() => handleRoomChange(i)}
                      className={`h-3 w-3 rounded-full transition-all ${
                        i === active
                          ? "bg-neutral-500"
                          : "bg-neutral-500/30 hover:bg-neutral-500/45"
                      }`}
                      aria-label={`Show room ${i + 1}`}
                      aria-current={i === active ? "true" : undefined}
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

            {/* Mobile / tablet: Hero-style arrows at L/R, dots centered (max horizontal gap) */}
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
                    onClick={() => handleRoomChange(i)}
                    className={`h-2.5 w-2.5 shrink-0 rounded-full transition-all ${
                      i === active
                        ? "bg-neutral-500"
                        : "bg-neutral-500/30"
                    }`}
                    aria-label={`Show room ${i + 1}`}
                    aria-current={i === active ? "true" : undefined}
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
