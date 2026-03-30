import Image from "next/image";

type SectionBannerProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
};

export default function SectionBanner({
  title,
  imageSrc,
  imageAlt,
}: SectionBannerProps) {
  return (
    <section className="w-full bg-white px-4 pt-2 pb-6 sm:px-6 sm:pb-[40px] lg:px-10">
      <div className="relative h-[195px] w-full overflow-hidden rounded-[20px] lg:h-[380px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover rounded-[20px]"
          sizes="100vw"
          priority
        />
        {/* Card inset from image edges (not padding on the image — spacing card ↔ edges) */}
        <div className="absolute bottom-[10px] left-[10px] right-[10px] lg:bottom-[20px] lg:left-[20px] lg:right-[20px]">
          <div className="box-border flex w-full items-center rounded-[20px] bg-neutral-300 p-5 lg:h-[97px]">
            <h1 className="w-full text-[24px] leading-8 font-normal tracking-[-1px] text-neutral-500 lg:text-[32px] lg:leading-[40px]">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
