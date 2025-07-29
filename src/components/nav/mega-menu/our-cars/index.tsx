import { Button } from "@/components/ui/button";
import type { Brand, Category, MainMenu } from "@/payload-types";
import { FaCarAlt } from "react-icons/fa";

export function OurCars({ data }: { data: MainMenu["ourCars"] }) {
  const { categories, brands } = data as {
    categories: Category[];
    brands: Brand[];
  };
  return (
    <div className="grid w-full grid-cols-4 gap-1 py-6">
      <div className="flex flex-col justify-center gap-8 border-r border-gray-200 p-2">
        <div className="flex flex-col">
          <span className="text-3xl font-medium">Our</span>
          <span className="text-4xl font-bold">Rental Cars</span>
        </div>
        <div className="flex gap-3">
          <Button>View all</Button>
          <Button variant="outline">Rent a camper</Button>
        </div>
      </div>
      <div className="grid grid-cols-[60px_auto] flex-col gap-2 border-r p-2">
        <div className="flex justify-end gap-2">
          <FaCarAlt size={24} className="text-primary mt-[4px]" />
        </div>
        <ul className="flex flex-col gap-2">
          <span className="text-lg font-bold">Categories</span>
          {categories.map((category) => (
            <li className="text-sm text-gray-500">{category.name}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center border-r p-2">
        <p className="font-satoshi">this is a test</p>
      </div>
    </div>
  );
}
