import Image from "next/image";
import Button from "../ui/Button";

const experiences = [
  {
    icon: "/images/icon-activity.svg",
    title: "Thoughtfully Designed Spaces",
    description:
      "Each room is designed with comfort and simplicity in mind, creating a calm and inviting place to stay.",
  },
  {
    icon: "/images/icon-concierge.svg",
    title: "Warm Hospitality",
    description:
      "Our team provides attentive and thoughtful service, ensuring every stay feels welcoming, personal, and comfortable.",
  },
  {
    icon: "/images/icon-temple.svg",
    title: "A Stay Inspired by Culture",
    description:
      "Experience a living environment that blends modern comfort with the local character of Bingin.",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full bg-white px-4 pb-10 sm:px-6 lg:px-10"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-4">
        {/* Left column - sticky heading */}
        <div className="lg:w-[680px] lg:shrink-0 lg:pr-20">
          <div className="lg:sticky lg:top-[120px] flex flex-col gap-6 lg:pt-[200px]">
            <h2 className="text-[40px] leading-[56px] tracking-[-1px] text-black font-normal max-w-[600px]">
              The NUHO Living Experience
            </h2>
            <p className="text-base leading-6 text-secondary-300 max-w-[600px]">
              Thoughtfully designed spaces and warm hospitality create a stay
              that blends comfort, culture, and the relaxed rhythm of Bingin.
            </p>
            <div>
              <Button variant="secondary" href="#contact">
                Book Your Stay
              </Button>
            </div>
          </div>
        </div>

        {/* Right column - stacking cards */}
        <div className="flex flex-col items-start lg:pb-[180px]">
          {experiences.map((exp, i) => (
            <div
              key={exp.title}
              className={`lg:sticky flex flex-col items-center justify-end w-full lg:w-[664px] ${i === 0 ? "lg:h-[400px]" : "lg:h-[440px]"} ${i < experiences.length - 1 ? "lg:mb-[-180px]" : ""}`}
              style={{ top: `${120 + i * 20}px` }}
            >
              <div className="bg-neutral-300 rounded-2xl p-6 lg:p-8 flex flex-col gap-6 w-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center p-2">
                  <Image
                    src={exp.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="w-8 h-8"
                    unoptimized
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-[32px] leading-[40px] tracking-[-1px] text-black font-normal">
                    {exp.title}
                  </h3>
                  <p className="text-base leading-6 text-secondary-300 max-w-[600px]">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
