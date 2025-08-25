// seedCategories.ts
import { Payload } from "payload";
import { Category } from "@/payload-types";

const categories: Omit<Category, "id" | "createdAt" | "updatedAt">[] = [
  {
    name: "SUV",
    slug: "suv",
    description:
      "Sport Utility Vehicles — ideal for rugged adventures and off-road trips.",
    siteKey: "vehicles",
    image: "689e364383be183b74c2978a", // Replace with actual Media ID
  },
  {
    name: "Campervan",
    slug: "campervan",
    description:
      "Compact van with built-in living space for road trips and camping.",
    siteKey: "vehicles",
    image: "689e364383be183b74c2978a",
  },
  {
    name: "4x4 with Rooftop Tent",
    slug: "4x4-rooftop-tent",
    description:
      "Four-wheel drive vehicles equipped with rooftop tents for overlanding.",
    siteKey: "vehicles",
    image: "689e364383be183b74c2978a",
  },
  {
    name: "Caravan",
    slug: "caravan",
    description:
      "Towable caravans with sleeping, cooking, and living space — great for families.",
    siteKey: "vehicles",
    image: "689e364383be183b74c2978a",
  },
  {
    name: "Overland Truck",
    slug: "overland-truck",
    description:
      "Heavy-duty trucks designed for long-distance expeditions with camping gear.",
    siteKey: "vehicles",
    image: "689e364383be183b74c2978a",
  },
];

export const seedCategories = async (payload: Payload) => {
  // Clear existing categories
  await payload.delete({
    collection: "categories",
    where: {},
  });

  try {
    for (const category of categories) {
      await payload.create({
        collection: "categories",
        data: category,
      });
    }
    console.log("✅ Vehicle Categories seeded successfully!");
  } catch (e) {
    console.error(e);
  }
};
