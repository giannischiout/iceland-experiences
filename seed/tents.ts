// seed.ts
import { Payload } from "payload";
import { Tent } from "@/payload-types";

const tents: Omit<Tent, "id" | "createdAt" | "updatedAt">[] = [
  {
    name: "Nomad Skyview Roof Tent",
    description:
      "A premium rooftop tent with panoramic windows, designed for stargazing and ultimate comfort. Quick setup in under 5 minutes.",
    sleepingCapacity: 2,
    slug: "nomad-skyview-roof-tent",
    type: "rooftop",
    basePricePerDay: 75,
    stock: 3,
  },
  {
    name: "Trailblazer Summit XL",
    description:
      "Spacious rooftop tent with an extended annex for extra gear storage. Built with heavy-duty waterproof fabric for all-season use.",
    sleepingCapacity: 4,
    slug: "trailblazer-summit-xl",
    type: "rooftop",
    basePricePerDay: 95,
    stock: 3,
  },
  {
    name: "Overlander Lite",
    description:
      "Compact and lightweight rooftop tent perfect for solo travelers or couples. Easy to mount and store when not in use.",
    sleepingCapacity: 2,
    slug: "overlander-lite",
    type: "rooftop",
    basePricePerDay: 65,
    stock: 3,
  },
  {
    name: "Adventure Pro Expedition",
    description:
      "Rugged and durable rooftop tent designed for extreme conditions. Features an insulated base and rainfly for cold-weather camping.",
    sleepingCapacity: 3,
    slug: "adventure-pro-expedition",
    type: "rooftop",
    basePricePerDay: 85,
    stock: 3,
  },
  {
    name: "Skyline Safari Rooftop Tent",
    description:
      "A versatile tent with 360° mesh panels for ventilation and scenic views. Ideal for summer adventures and warm climates.",
    sleepingCapacity: 2,
    slug: "skyline-safari-rooftop-tent",
    type: "rooftop",
    basePricePerDay: 70,
    stock: 3,
  },
];

export const seedTents = async (payload: Payload) => {
  // Clear existing tents if reseeding
  await payload.delete({
    collection: "tents",
    where: {},
  });

  for (const tent of tents) {
    await payload.create({
      collection: "tents",
      data: tent,
    });
  }
  console.log("✅ Roof tents seeded successfully!");
};
