import { Button } from "@/components/ui/button";
import type {
  Brand,
  Category,
  MainMenu,
  Media,
  Transmission,
} from "@/payload-types";
import { FaCarAlt } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import Image from "next/image";

export function OurCars({ data }: { data: MainMenu["ourCars"] }) {
  const { categories, brands, transmissions } = data as {
    categories: Category[];
    brands: Brand[];
    transmissions: Transmission[];
  };
  return (
    <div className="grid w-full grid-cols-4 gap-1 py-6">
      <div className="flex flex-col justify-center gap-8 border-r border-gray-200 p-2">
        <div className="flex flex-col">
          <span className="text-3xl font-medium">Our</span>
          <span className="text-4xl font-bold">Rental Cars</span>
        </div>
        <div className="flex gap-3">
          <Button className="bg-black">View all</Button>
          <Button variant="outline">Rent a camper</Button>
        </div>
      </div>
      <div className="gap-2 border-r p-3">
        <div className="flex flex-col gap-3 p-2">
          <div className="flex items-center gap-2">
            <FaCarAlt size={24} className="text-primary mt-[2px]" />
            <span className="text-lg font-bold">Categories</span>
          </div>
          {categories.map((c) => {
            const image = c.image as Media;
            return (
              <div key={c.name} className="flex gap-2 text-gray-500">
                <div className="relative h-[50px] w-[70px] overflow-hidden rounded-md">
                  <Image
                    src={image?.url}
                    alt={image?.alt}
                    fill
                    sizes=""
                    className="rounded-md object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="font-bold">{c.name}</span>
                  <span className="text-muted-foreground max-h-10 max-w-[200px] overflow-hidden text-sm">
                    {c.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-[60px_auto] flex-col gap-2 border-r p-2">
        <div className="flex justify-end gap-2">
          <FaRankingStar size={24} className="text-primary" />
        </div>
        <ul className="flex flex-col gap-3">
          <span className="text-lg font-bold">Popular Brands</span>
          {brands.map((b) => (
            <li key={b.name} className="text-gray-500">
              <span className="nav_item">{b.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-[60px_auto] flex-col gap-2 p-2">
        <div className="flex justify-end gap-2">
          <FaRankingStar size={24} className="text-primary" />
        </div>
        <ul className="flex flex-col gap-3">
          <span className="text-lg font-bold">Popular Brands</span>
          {transmissions.map((t) => (
            <li key={t.label} className="flex flex-col gap-1 text-gray-500">
              <p>
                <span className="nav_item inline">{t.label}</span>
              </p>
              <span className="text-sm text-gray-400">{t.tagline}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
