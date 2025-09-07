import { Hero } from "@/sections/home/hero";
import type { PickupLocation } from "@/payload-types";
import axios from "@/utills/axios";

export async function fetchPickupLocations(): Promise<PickupLocation[]> {
  const res = await axios.get("/api/pickup-locations?limit=100");
  return res.data.docs; // Payload returns docs array
}

export async function HomePageView() {
  return <Hero />;
}
