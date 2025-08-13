// seedCategories.ts
import { Payload } from "payload";
import { Category } from "@/payload-types";

const categories: Omit<Category, "id" | "createdAt" | "updatedAt">[] = [
  {
    name: "Rooftop Tents",
    slug: "rooftop-tents",
    description:
      "Mounted on the roof of a vehicle; ideal for overlanding and compact storage.",
    siteKey: "tents",
    image: "upload_media_id_1", // Replace with actual Media ID
  },
  {
    name: "Pop-up Tents",
    slug: "pop-up-tents",
    description:
      "Quick setup tent for 2-4 people, great for short trips and easy transport.",
    siteKey: "tents",
    image: "upload_media_id_2",
  },
  {
    name: "4-Person Ground Tents",
    slug: "4-person-ground-tents",
    description:
      "Spacious ground tent suitable for families or groups; comes with separate rooms.",
    siteKey: "tents",
    image: "upload_media_id_3",
  },
  {
    name: "2-Person Ground Tents",
    slug: "2-person-ground-tents",
    description:
      "Lightweight and compact tent for two; easy to carry for backpacking or short trips.",
    siteKey: "tents",
    image: "upload_media_id_4",
  },
  {
    name: "Family Tents",
    slug: "family-tents",
    description:
      "Large tents for 5+ people with multiple compartments; ideal for longer stays.",
    siteKey: "tents",
    image: "upload_media_id_5",
  },
  {
    name: "Canvas Overland Tents",
    slug: "canvas-overland-tents",
    description:
      "Durable canvas tent, often included in overlanding vehicles; good for harsh conditions.",
    siteKey: "tents",
    image: "upload_media_id_6",
  },
  {
    name: "Awning Tents",
    slug: "awning-tents",
    description:
      "Attaches to the side of the vehicle to create extra sheltered space.",
    siteKey: "tents",
    image: "upload_media_id_7",
  },
];

export const seedCategories = async (payload: Payload) => {
  // Clear existing categories
  await payload.delete({
    collection: "categories",
    where: {},
  });

  for (const category of categories) {
    await payload.create({
      collection: "categories",
      data: category,
    });
  }

  console.log("✅ Categories seeded successfully!");
};
