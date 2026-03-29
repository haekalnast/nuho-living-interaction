import Image from "next/image";
import Button from "../ui/Button";

const btnCta =
  "flex-1 min-w-0 justify-center whitespace-normal px-3 py-3.5 text-center text-sm sm:px-5 sm:text-base lg:flex-none lg:shrink-0 lg:px-6 lg:py-4";

export default function CTABanner() {
  return (
    <section className="w-full bg-white px-4 pb-10 sm:px-6 lg:px-10">
      <div className="relative flex min-h-[320px] w-full items-center overflow-hidden rounded-[20px] px-4 py-10 sm:min-h-[300px] sm:px-5">
        <Image
          src="/images/hero-1.jpg"
          alt="NUHO Living"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative flex w-full max-w-[505px] flex-col gap-4 rounded-2xl bg-white p-6 lg:gap-6 lg:p-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-[24px] leading-8 font-normal tracking-[-1px] text-black lg:text-[32px] lg:leading-[40px]">
              Stay at NUHO Living
            </h2>
            <p className="text-base leading-6 text-secondary-300">
              Experience a calm tropical stay in the heart of Bingin.
            </p>
          </div>
          {/* Figma 204-4908: primary + secondary satu baris di mobile (bukan stack) */}
          <div className="flex w-full flex-row flex-nowrap items-stretch gap-3 sm:gap-4">
            <Button variant="primary" href="#contact" className={btnCta}>
              Book Your Stay
            </Button>
            <Button variant="secondary" href="#contact" className={btnCta}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
