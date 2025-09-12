import { Hero } from "@/sections/home/hero";
import { CategoriesSection } from "@/sections/home/categories";
import { Highlights } from "@/sections/home/hightlights";

export async function HomePageView() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <Highlights />
    </>
  );
}
