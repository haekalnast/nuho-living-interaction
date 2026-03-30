import Image from "next/image";
import Button from "../ui/Button";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-white px-4 py-10 sm:px-6 lg:px-10"
    >
      <div className="flex flex-col gap-6 lg:min-h-[900px] lg:flex-row lg:gap-6 items-stretch">
        {/* Text — below image on mobile (Figma 2001-36359) */}
        <div className="order-2 flex flex-1 flex-col justify-start lg:order-1 lg:min-w-0 xl:w-full">
          <div className="flex max-w-[600px] flex-col gap-6 lg:pr-[72px] xl:max-w-none xl:w-full">
            <h2 className="text-[24px] leading-8 tracking-[-1px] text-black font-normal lg:text-[32px] lg:leading-[40px]">
              A Boutique Living Experience in Bingin
            </h2>
            <p className="text-base leading-6 text-secondary-300">
              NUHO Living is a boutique stay in Bingin, Uluwatu, designed for
              modern tropical living. A thoughtfully crafted space that blends
              comfort, design, and the calm rhythm of coastal Bali.
            </p>
            <div>
              <Button variant="secondary" href="/about">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Image — first on mobile, 546px asset height */}
        <div className="order-1 w-full shrink-0 lg:order-2 lg:w-[672px] xl:flex-1 xl:min-w-0 xl:w-full">
          <div className="relative h-[546px] w-full overflow-hidden rounded-[20px] lg:h-full">
            <Image
              src="/images/about-us.jpg"
              alt="NUHO Living boutique interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, (max-width: 1279px) 672px, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
