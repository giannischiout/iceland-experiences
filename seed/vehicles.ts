// seedVehicles.ts
import { Payload } from "payload";
import { Vehicle } from "@/payload-types";

const vehicles: Omit<Vehicle, "id" | "createdAt" | "updatedAt">[] = [
  {
    brand: "summit-ridge-outfitters", // Use the slug or ID of the brand
    model: "Summit Cruiser 4x4",
    slug: "summit-cruiser-4x4",
    description:
      "Rugged off-road vehicle designed for overlanding and adventure trips.",
    basePricePerDay: 150,
    stock: 3,
    includedTents: [], // Add tent slugs/IDs if included
    optionalAddOns: [],
    features: [],
    gallery: [],
  },
  {
    brand: "ironpeak-overland",
    model: "IronPeak Expedition",
    slug: "ironpeak-expedition",
    description:
      "Heavy-duty expedition vehicle with optional rooftop tents and full off-road kit.",
    basePricePerDay: 200,
    stock: 2,
    includedTents: ["canvas-overland-tents"], // example of included tent
    optionalAddOns: [],
    features: [],
    gallery: [],
  },
  {
    brand: "trailhaven",
    model: "TrailHaven Voyager",
    slug: "trailhaven-voyager",
    description:
      "Comfort-oriented 4x4 with modular interior and optional family tent setup.",
    basePricePerDay: 180,
    stock: 4,
    includedTents: ["pop-up-tents"],
    optionalAddOns: [],
    features: [],
    gallery: [],
  },
  {
    brand: "venturex-gear-co",
    model: "VentureX Offroad",
    slug: "venturex-offroad",
    description:
      "Innovative overland vehicle with built-in storage and rooftop tent compatibility.",
    basePricePerDay: 175,
    stock: 5,
    includedTents: [],
    optionalAddOns: [],
    features: [],
    gallery: [],
  },
  {
    brand: "ridgeway-expeditions",
    model: "Ridgeway Explorer",
    slug: "ridgeway-explorer",
    description:
      "Reliable overlanding vehicle for serious explorers with optional tent setups.",
    basePricePerDay: 190,
    stock: 2,
    includedTents: [],
    optionalAddOns: [],
    features: [],
    gallery: [],
  },
];

export const seedVehicles = async (payload: Payload) => {
  // Clear existing vehicles
  await payload.delete({
    collection: "vehicles",
    where: {},
  });

  for (const vehicle of vehicles) {
    await payload.create({
      collection: "vehicles",
      data: vehicle,
    });
  }

  console.log("✅ Vehicles seeded successfully!");
};
