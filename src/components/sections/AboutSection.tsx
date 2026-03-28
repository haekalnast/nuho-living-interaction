import Image from "next/image";
import Button from "../ui/Button";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-white px-6 lg:px-10 py-10 lg:py-0"
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-6 items-stretch lg:min-h-[900px]">
        {/* Left column - Text */}
        <div className="flex-1 flex flex-col justify-start pt-10 lg:min-w-0">
          <div className="flex flex-col gap-6 lg:pr-[72px] max-w-[600px]">
            <h2 className="text-[32px] leading-[40px] tracking-[-1px] text-black font-normal">
              A Boutique Living Experience in Bingin
            </h2>
            <p className="text-base leading-6 text-secondary-300">
              NUHO Living is a boutique stay in Bingin, Uluwatu, designed for
              modern tropical living. A thoughtfully crafted space that blends
              comfort, design, and the calm rhythm of coastal Bali.
            </p>
            <div>
              <Button variant="secondary" href="#about">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Right column - Image */}
        <div className="w-full lg:w-[672px] shrink-0">
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-full rounded-[20px] overflow-hidden">
            <Image
              src="/images/about-us.jpg"
              alt="NUHO Living boutique interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 672px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
