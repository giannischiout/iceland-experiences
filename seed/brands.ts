// seedBrands.ts
import { Payload } from "payload";
import { Brand } from "@/payload-types";

const brands: Omit<Brand, "id" | "createdAt" | "updatedAt">[] = [
  {
    name: "Summit Ridge Outfitters",
    slug: "summit-ridge-outfitters",
    description: "Premium outdoor gear designed for high-altitude adventures.",
  },
  {
    name: "IronPeak Overland",
    slug: "ironpeak-overland",
    description:
      "Durable vehicles and accessories built for the toughest terrain.",
  },
  {
    name: "TrailHaven",
    slug: "trailhaven",
    description: "Comfort-focused overland equipment for extended journeys.",
  },
  {
    name: "VentureX Gear Co.",
    slug: "venturex-gear-co",
    description:
      "Innovative camping gear with a focus on modularity and efficiency.",
  },
  {
    name: "Ridgeway Expeditions",
    slug: "ridgeway-expeditions",
    description:
      "Trusted brand for serious explorers and weekend adventurers alike.",
  },
];

export const seedBrands = async (payload: Payload) => {
  // Clear existing brands
  await payload.delete({
    collection: "brands",
    where: {},
  });

  for (const brand of brands) {
    await payload.create({
      collection: "brands",
      data: brand,
    });
  }

  console.log("✅ Brands seeded successfully!");
};
