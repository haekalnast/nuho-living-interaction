import Image from "next/image";

const SECTION_IMAGE_SRC = "/images/about-us.jpg";

const experienceCardShell =
  "flex flex-col items-start text-left gap-4 overflow-hidden rounded-[16px] bg-neutral-200 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)]";

const pillars = [
  {
    icon: "/images/icon-design-forward.svg",
    title: "Design Forward Spaces",
    description:
      "Every space follows a modern tropical approach, combining clean architecture with natural materials and functional layouts.",
  },
  {
    icon: "/images/icon-comfortable-living.svg",
    title: "Comfortable Living",
    description:
      "Spaces are designed for everyday comfort, supporting both short stays and longer living in a calm environment.",
  },
  {
    icon: "/images/icon-natural-atmosphere.svg",
    title: "Natural Atmosphere",
    description:
      "Open layouts, natural light, and greenery create a relaxed setting inspired by Bingin's coastal lifestyle.",
  },
  {
    icon: "/images/icon-curated-experience.svg",
    title: "Curated Experience",
    description:
      "A balance of private and shared spaces designed for connection, relaxation, and modern living.",
  },
] as const;

type Pillar = (typeof pillars)[number];

function WhatDefinesCard({ item, variant }: { item: Pillar; variant: "mobile" | "desktop" }) {
  return (
    <article
      className={`${experienceCardShell} ${
        variant === "mobile"
          ? "h-[286px]"
          : "h-full min-h-0"
      }`}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary p-2">
        <Image
          src={item.icon}
          alt=""
          width={32}
          height={32}
          className="h-8 w-8"
          unoptimized
        />
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto">
        <h3 className="shrink-0 text-heading-h3-mobile font-normal tracking-[-1px] text-black lg:text-heading-h3-desktop">
          {item.title}
        </h3>
        <p className="min-h-0 text-base leading-6 text-secondary-300">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function WhatDefinesSection() {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 lg:px-10">
      <div className="flex flex-col gap-10 lg:gap-12">
        <h2 className="text-heading-h2-mobile font-normal tracking-[-1px] text-black lg:text-heading-h2-desktop">
          What Defines NUHO Living
        </h2>

        <div className="flex flex-col gap-10 lg:hidden">
          <div className="grid grid-cols-1 gap-4">
            {pillars.map((item) => (
              <WhatDefinesCard key={item.title} item={item} variant="mobile" />
            ))}
          </div>
          <div className="relative h-[546px] w-full overflow-hidden rounded-[20px]">
            <Image
              src={SECTION_IMAGE_SRC}
              alt="NUHO Living boutique interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 672px"
            />
          </div>
        </div>

        <div className="hidden lg:flex lg:min-h-[900px] lg:flex-row lg:items-stretch lg:gap-6">
          <div className="w-full shrink-0 lg:w-[672px] xl:flex-1 xl:min-w-0 xl:w-full">
            <div className="relative h-[546px] w-full overflow-hidden rounded-[20px] lg:h-full">
              <Image
                src={SECTION_IMAGE_SRC}
                alt="NUHO Living boutique interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, (max-width: 1279px) 672px, 50vw"
              />
            </div>
          </div>
          <div className="grid min-h-0 min-w-0 flex-1 grid-cols-2 gap-6 self-stretch [grid-template-rows:repeat(2,minmax(0,1fr))]">
            {pillars.map((item) => (
              <WhatDefinesCard key={item.title} item={item} variant="desktop" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
