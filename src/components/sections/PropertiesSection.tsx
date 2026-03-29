import Image from "next/image";
import Button from "../ui/Button";

/**
 * Property card logos — Figma:
 * https://www.figma.com/design/u9MCVROvQ72BYVpzIsgGpT/NUHO-Living-Landing-Page--V03.03.26-?node-id=183-5707
 * NUHO Living lockup (card chip): node 183-5722 → /images/logo-nuho-living-card.svg
 */
const properties = [
  {
    name: "Desa Seminyak",
    description:
      "A boutique stay located in the heart of Seminyak, offering a vibrant atmosphere close to Bali's dining, shopping, and beach scene.",
    image: "/images/property-desa.jpg",
    logoBg: "bg-[#2d332e]",
    cta: "Visit Website",
    href: "#",
    logoSrc: "/images/logo-desa-seminyak.svg",
    logoAlt: "Desa Seminyak",
    logoClassName:
      "h-8 w-auto max-w-[72px] object-contain object-center",
  },
  {
    name: "NUHO Living",
    description:
      "A boutique stay in Bingin, designed for a calm tropical living experience.",
    image: "/images/property-nuho.jpg",
    logoBg: "bg-primary",
    cta: "Book Your Stay",
    href: "#contact",
    /** Full lockup from Figma (white fills for primary circle) */
    logoSrc: "/images/logo-nuho-living-card.svg",
    logoAlt: "NUHO Living",
    logoClassName:
      "h-[22px] w-auto max-w-[76px] sm:h-6 lg:h-7 object-contain object-center",
  },
];

export default function PropertiesSection() {
  return (
    <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-10">
      <div className="flex flex-col gap-10 lg:gap-12">
        <h2 className="text-[40px] leading-[56px] tracking-[-1px] text-black font-normal">
          Our Properties
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {properties.map((property) => (
            <article
              key={property.name}
              className="flex min-h-[533px] flex-col overflow-hidden rounded-[20px] transition-shadow duration-300 hover:shadow-lg lg:min-h-0"
            >
              {/* Image */}
              <div className="relative h-[232px] w-full shrink-0 lg:h-[211px]">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Content — logo on top; title & body below; CTA bottom-right (Figma ~313-30258) */}
              <div className="flex flex-1 flex-col gap-5 bg-neutral-300 p-5 shadow-[0px_1px_4px_0px_rgba(148,168,190,0.16),0px_4px_8px_0px_rgba(148,168,190,0.12)]">
                <div
                  className={`flex h-[80px] w-[80px] shrink-0 items-center justify-center overflow-hidden rounded-full px-2 lg:h-[100px] lg:w-[100px] ${property.logoBg}`}
                >
                  <Image
                    src={property.logoSrc}
                    alt={property.logoAlt}
                    width={80}
                    height={32}
                    className={property.logoClassName}
                    unoptimized
                  />
                </div>

                <div className="flex min-w-0 flex-col gap-2">
                  <h3 className="text-2xl leading-8 tracking-[-1px] text-black font-normal">
                    {property.name}
                  </h3>
                  <p className="text-base leading-6 text-secondary-300 line-clamp-3">
                    {property.description}
                  </p>
                </div>

                <div className="mt-auto flex justify-end pt-1">
                  <Button variant="secondary" href={property.href}>
                    {property.cta}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
