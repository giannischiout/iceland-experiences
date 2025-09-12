import { getErrorMessage } from "@/utills/get-error-message";
import axios from "@/utills/axios";
import Image from "next/image";
import type { Media, Category } from "@/payload-types";
import { MoveRight } from "lucide-react";

const getCategories = async () => {
  try {
    const { data } = await axios.get("/api/categories?limit=4");
    return data.docs;
  } catch (e) {
    const error = getErrorMessage(e);
    return error;
  }
};

export async function CategoriesSection() {
  const categories = await getCategories();

  if (!Array.isArray(categories)) {
    return (
      <section className="container mx-auto px-4 py-16">
        <p className="text-red-500">Failed to load categories.</p>
      </section>
    );
  }

  return (
    <section className="container mx-auto flex flex-col gap-12 px-4 py-16">
      {/* Heading & intro */}
      <header className="mb-12 flex flex-col gap-6">
        <h2 className="text-5xl font-semibold">Our great selection of cars</h2>
        <p className="text-md text-muted-foreground max-w-2xl leading-relaxed">
          Iceland's roads are like nowhere else, from smooth highways to bumpy
          mountain tracks, so picking the right car is key. Whether you're
          chasing waterfalls, hunting the Northern Lights, or just getting
          around town, we've got the perfect car waiting for your trip.
        </p>
      </header>

      {/* Categories grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {categories.map((category: Category) => (
          <figure
            key={category.id}
            className="group relative aspect-[4/5] min-h-[400px] w-full cursor-pointer overflow-hidden rounded-2xl shadow-md transition-transform"
          >
            <Image
              alt={(category.landscape_image as Media)?.alt ?? ""}
              fill
              src={(category.landscape_image as Media)?.url ?? ""}
              className="object-cover object-center"
            />

            {/* Category name always visible */}
            <span className="text-background transition-translate absolute bottom-4 left-3 z-10 flex translate-y-0 items-center gap-2 rounded-full px-3 py-1 text-lg font-semibold delay-150 duration-300 ease-in-out group-hover:translate-y-[-54px] group-hover:delay-0">
              {category.name}
              <MoveRight
                size={18}
                className="hidden text-gray-200 group-hover:block"
              />
            </span>

            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent transition-colors group-hover:from-black/100" />

            <div className="absolute inset-0 bottom-4 left-3 flex flex-col items-start justify-end px-3 opacity-0 transition-opacity delay-0 duration-300 group-hover:opacity-100 group-hover:delay-200">
              <p className="mb-2 text-sm leading-relaxed text-gray-200">
                {(category.description as string) ??
                  "Explore our amazing cars!"}
              </p>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
