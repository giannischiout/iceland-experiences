import Image from "next/image";
import { Reviews } from "@/components/reviews";

const HIGHTLIGHTS = [
  {
    id: 1,
    label: "Embark on Your Iceland Adventure with Confidence",
    image: "/assets/highlights-discovery.jpg",
    description:
      "At Northern Wheels, exploring Iceland is simple, safe, and unforgettable. From rugged highland tracks to scenic coastal drives, our vehicles are ready for every adventure.",
  },
  {
    id: 2,
    label: "Secure & Flexible Deposits",
    image: "/assets/highlights-security.jpg",
    description:
      "We offer transparent security deposits and flexible payment options. Live your adventure without the logistics ",
  },
  {
    id: 3,
    label: "Diverse Fleet for Every Adventure",
    image: "/assets/highlights-diverse.jpg",
    description: "From compact city cars to 4x4 adventure vehicles.",
  },
  {
    id: 4,
    label: "Reliable Support & Safety",
    image: "/assets/highlights-discovery.jpg",
    description:
      "Every rental comes with 24/7 support and full insurance options.",
  },
];

export function Highlights() {
  return (
    <section className="container mx-auto flex flex-col gap-12 px-4 py-16">
      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h2 className="text-5xl font-semibold">Why Choose us</h2>
          <Reviews />
        </div>
        <p className="max-w-[500px]">
          At Northern Wheels, exploring Iceland is simple, safe, and
          unforgettable. From rugged highland tracks to scenic
        </p>
      </header>
      <div className="grid grid-cols-4 gap-6">
        {HIGHTLIGHTS.map((h) => (
          <figure
            key={h.id}
            className="relative min-h-[500px] overflow-hidden rounded-lg"
          >
            <Image
              alt="hightlights-discovery"
              fill
              src={h.image}
              className="object-cover"
            />
            <figcaption className="text-background absolute bottom-4 left-4 z-2 p-4">
              <span className="text-lg font-semibold">{h.label}</span>
              <p className="font-sm text-gray-200">{h.description}</p>
            </figcaption>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
          </figure>
        ))}
      </div>
    </section>
  );
}
