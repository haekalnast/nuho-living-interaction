import Image from "next/image";
import Button from "../ui/Button";

const properties = [
  {
    name: "Desa Seminyak",
    description:
      "A boutique stay located in the heart of Seminyak, offering a vibrant atmosphere close to Bali's dining, shopping, and beach scene.",
    image: "/images/property-desa.jpg",
    logo: "/images/logo-desa-seminyak.svg",
    logoBg: "bg-[#2d332e]",
    cta: "Visit Website",
    href: "#",
  },
  {
    name: "NUHO Living",
    description:
      "A boutique stay in Bingin, designed for a calm tropical living experience.",
    image: "/images/property-nuho.jpg",
    logo: "/images/logo-nuho-living.svg",
    logoBg: "bg-primary",
    cta: "Book Your Stay",
    href: "#contact",
  },
];

export default function PropertiesSection() {
  return (
    <section className="w-full bg-white px-6 lg:px-10 py-20">
      <div className="flex flex-col gap-10 lg:gap-12">
        <h2 className="text-[40px] leading-[56px] tracking-[-1px] text-black font-normal">
          Our Properties
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {properties.map((property) => (
            <article
              key={property.name}
              className="flex flex-col rounded-[20px] overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-[200px] lg:h-[211px] w-full">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="bg-neutral-300 p-5 flex flex-col gap-5 shadow-[0px_1px_4px_0px_rgba(148,168,190,0.16),0px_4px_8px_0px_rgba(148,168,190,0.12)]">
                <div className="flex gap-5 items-center">
                  {/* Logo */}
                  <div
                    className={`w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-full ${property.logoBg} flex items-center justify-center shrink-0 overflow-hidden`}
                  >
                    <Image
                      src={property.logo}
                      alt={`${property.name} logo`}
                      width={56}
                      height={25}
                      className="w-14 h-auto brightness-200 invert"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col gap-2 min-w-0">
                    <h3 className="text-2xl leading-8 tracking-[-1px] text-black font-normal">
                      {property.name}
                    </h3>
                    <p className="text-base leading-6 text-secondary-300 line-clamp-2">
                      {property.description}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
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
