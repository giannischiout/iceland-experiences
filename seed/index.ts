import { seedTents } from "./tents";
import { Payload } from "payload";
import { seedAddOns } from "./addons";
import { seedFeatures } from "./features";
import { seedBrands } from "./brands";
import { seedCategories } from "./categories";
import { seedVehicles } from "./vehicles";

export const initializeData = async (payload: Payload) => {
  await seedTents(payload);
  await seedAddOns(payload);
  await seedFeatures(payload);
  await seedBrands(payload);
  await seedCategories(payload);
  // await seedVehicles(payload);
};
