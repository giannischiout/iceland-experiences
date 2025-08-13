// seedAddOns.ts
import { Payload } from "payload";
import { Addon } from "@/payload-types";

const addons: Omit<Addon, "id" | "createdAt" | "updatedAt">[] = [
  {
    name: "Extra Sleeping Bag",
    slug: "extra-sleeping-bag",
    description:
      "Keep warm and cozy with an additional sleeping bag for your trip.",
    basePrice: 10,
  },
  {
    name: "Portable Solar Charger",
    slug: "portable-solar-charger",
    description:
      "Charge your devices off-grid with a compact solar power bank.",
    basePrice: 15,
  },
  {
    name: "Camping Stove Kit",
    slug: "camping-stove-kit",
    description: "Lightweight stove with fuel canisters for cooking anywhere.",
    basePrice: 20,
  },
  {
    name: "LED Lantern",
    slug: "led-lantern",
    description: "Bright and long-lasting LED lantern for nighttime use.",
    basePrice: 8,
  },
  {
    name: "Portable Shower",
    slug: "portable-shower",
    description:
      "Enjoy a quick rinse after a long day outdoors with a portable shower bag.",
    basePrice: 12,
  },
];

export const seedAddOns = async (payload: Payload) => {
  // Clear existing Add-ons
  await payload.delete({
    collection: "addons",
    where: {},
  });

  for (const addon of addons) {
    await payload.create({
      collection: "addons",
      data: addon,
    });
  }

  console.log("✅ Add-ons seeded successfully!");
};
