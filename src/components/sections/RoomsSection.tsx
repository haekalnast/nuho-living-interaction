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

export default function RoomsSection() {
  const [active, setActive] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const handleRoomChange = (index: number) => {
    setActive(index);
    setImageIndex(0);
  };

  return (
    <section id="rooms" className="w-full bg-white px-6 lg:px-10 py-10">
      <div className="flex flex-col gap-10 lg:gap-12">
        {/* Heading */}
        <h2 className="text-[40px] leading-[56px] tracking-[-1px] text-black font-normal">
          Our Rooms
        </h2>

        {/* Room preview */}
        <div className="flex flex-col gap-6">
          {/* Tabs */}
          <div className="flex gap-4 lg:gap-6 overflow-x-auto pb-2 -mx-2 px-2">
            {rooms.map((room, i) => (
              <button
                key={room.name}
                onClick={() => handleRoomChange(i)}
                className={`flex-1 min-w-[140px] py-4 px-4 rounded-[20px] text-center text-base lg:text-2xl font-normal transition-all whitespace-nowrap ${
                  i === active
                    ? "bg-primary text-white"
                    : "bg-neutral-300 text-black hover:bg-neutral-200"
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>

          {/* Image & description */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[660px] rounded-[20px] overflow-hidden">
            <Image
              src={rooms[active].image}
              alt={rooms[active].name}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="100vw"
            />

            {/* Overlay content */}
            <div className="absolute inset-0 flex items-end justify-between p-5">
              {/* Description card */}
              <div className="bg-neutral-300 rounded-2xl p-6 lg:p-8 max-w-[435px] flex flex-col gap-4">
                <p className="text-base leading-6 text-secondary-300">
                  {rooms[active].description}
                </p>
                <Button
                  variant="secondary"
                  href="#rooms"
                  className="w-fit self-start shrink-0"
                >
                  View Room
                </Button>
              </div>

              {/* Carousel controls */}
              <div className="hidden sm:flex items-center gap-2 self-end">
                <button
                  onClick={() =>
                    setImageIndex(
                      (imageIndex - 1 + rooms.length) % rooms.length,
                    )
                  }
                  className="w-11 h-11 rounded-full border border-white/40 backdrop-blur-md bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
                  aria-label="Previous"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
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
                  {rooms.map((_, i) => (
                    <span
                      key={i}
                      className={`w-3 h-3 rounded-full transition ${i === active ? "bg-white" : "bg-white/40"}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    setImageIndex((imageIndex + 1) % rooms.length)
                  }
                  className="w-11 h-11 rounded-full border border-white/40 backdrop-blur-md bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
                  aria-label="Next"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
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
          </div>
        </div>
      </div>
    </section>
  );
}
