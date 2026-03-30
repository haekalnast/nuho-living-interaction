import Image from "next/image";

const BODY_COPY =
  "NUHO Living was created to respond to the growing demand for more thoughtful, design driven stays in Bingin. The space is designed to reflect a calm and comfortable coastal lifestyle in Uluwatu.";

const BODY_COPY_SECOND =
  "Rather than a conventional stay, NUHO Living is shaped as a living space. Each area balances privacy and shared experience, allowing guests to feel both relaxed and connected.";

export default function DesignedAroundBinginSection() {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 lg:px-10">
      <div className="flex flex-col gap-6 lg:min-h-[900px] lg:flex-row lg:gap-6 items-stretch">
        {/* Text — first on mobile (above image); left column on desktop */}
        <div className="order-1 flex flex-1 flex-col justify-start lg:order-1 lg:min-w-0">
          <div className="flex flex-col gap-6 lg:pr-[72px] max-w-[600px]">
            <h2 className="text-heading-h2-mobile font-normal tracking-[-1px] text-black lg:text-heading-h2-desktop">
              Designed Around Bingin Living
            </h2>
            <p className="text-base leading-6 text-secondary-300">{BODY_COPY}</p>
            <p className="text-base leading-6 text-secondary-300">
              {BODY_COPY_SECOND}
            </p>
          </div>
        </div>

        {/* Image — second on mobile (below text); right column on desktop */}
        <div className="order-2 w-full shrink-0 lg:order-2 lg:w-[672px]">
          <div className="relative h-[546px] w-full overflow-hidden rounded-[20px] lg:h-full">
            <Image
              src="/images/designed-around-bingin-living.png"
              alt="Bingin coastline and cliffs near NUHO Living"
              fill
              className="object-cover rounded-[20px]"
              sizes="(max-width: 1024px) 100vw, 672px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
