import Image from "next/image";
import Button from "../ui/Button";

export default function CTABanner() {
  return (
    <section className="w-full bg-white px-6 lg:px-10 pb-10">
      <div className="relative w-full rounded-[20px] overflow-hidden px-5 py-10 min-h-[300px] flex items-center">
        {/* Background image */}
        <Image
          src="/images/hero-1.jpg"
          alt="NUHO Living"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Card */}
        <div className="relative bg-white rounded-2xl p-6 lg:p-8 max-w-[505px] flex flex-col gap-4 lg:gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-[32px] leading-[40px] tracking-[-1px] text-black font-normal">
              Stay at NUHO Living
            </h2>
            <p className="text-base leading-6 text-secondary-300">
              Experience a calm tropical stay in the heart of Bingin.
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
      </div>
    </section>
  );
}
