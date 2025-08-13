// seedFeatures.ts
import { Payload } from "payload";
import { Feature } from "@/payload-types";

const features: Omit<Feature, "id" | "createdAt" | "updatedAt">[] = [
  {
    name: "Waterproof",
    slug: "waterproof",
    description: "Keeps you dry even during heavy rainfall and wet conditions.",
  },
  {
    name: "UV Protection",
    slug: "uv-protection",
    description: "Blocks harmful UV rays, keeping the interior cool and safe.",
  },
  {
    name: "Quick Setup",
    slug: "quick-setup",
    description: "Can be assembled in under 5 minutes without special tools.",
  },
  {
    name: "Lightweight",
    slug: "lightweight",
    description: "Easy to transport and mount, perfect for solo travelers.",
  },
  {
    name: "All-Season",
    slug: "all-season",
    description:
      "Durable design suitable for winter, summer, and rainy seasons.",
  },
];

export const seedFeatures = async (payload: Payload) => {
  await payload.delete({
    collection: "features",
    where: {},
  });

  for (const feature of features) {
    await payload.create({
      collection: "features",
      data: feature,
    });
  }
  console.log("✅ Features seeded successfully!");
};
