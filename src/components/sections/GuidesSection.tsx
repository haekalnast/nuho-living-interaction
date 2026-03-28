import Image from "next/image";
import Button from "../ui/Button";

const guides = [
  {
    date: "March 7, 2026",
    title: "Chela Bingin",
    description:
      "Chela is the kind of place to go in Bingin. We recommend starting with their small plates and staying for another round.",
    image: "/images/guide-chela.jpg",
  },
  {
    date: "March 3, 2026",
    title: "Alchemy Bingin",
    description:
      "Yoga here feels like part of the Bingin lifestyle. Whether you're keeping a routine or just dropping in, Alchemy is a good place to come back to yourself.",
    image: "/images/guide-alchemy.jpg",
  },
  {
    date: "February 23, 2026",
    title: "Design Inspired by Bali",
    description:
      "Discover how NUHO Living blends modern architecture with elements of Balinese heritage.",
    image: "/images/guide-design.jpg",
  },
];

export default function GuidesSection() {
  return (
    <section id="guides" className="w-full bg-white px-6 lg:px-10 pt-20 pb-10">
      <div className="flex flex-col gap-10 lg:gap-12 items-end">
        <div className="w-full">
          <h2 className="text-[40px] leading-[56px] tracking-[-1px] text-black font-normal">
            Guides
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {guides.map((guide) => (
            <article
              key={guide.title}
              className="flex flex-col rounded-[20px] overflow-hidden border border-neutral-200 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-[240px] lg:h-[320px] w-full">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="bg-neutral-300 flex flex-col gap-5 p-5 flex-1">
                <div className="flex flex-col gap-4">
                  <p className="text-base leading-6 text-secondary-300">
                    {guide.date}
                  </p>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl leading-8 tracking-[-1px] text-black font-normal">
                      {guide.title}
                    </h3>
                    <p className="text-base leading-6 text-secondary-300 line-clamp-2">
                      {guide.description}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end mt-auto">
                  <Button variant="secondary" href="#">
                    Read Article
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Button variant="primary" href="#">
          View All Journal
        </Button>
      </div>
    </section>
  );
}
