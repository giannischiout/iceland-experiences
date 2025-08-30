import { Button } from "@/components/ui/button";
import type { Category, Media, Navigation, Vehicle } from "@/payload-types";
import { FaCarAlt } from "react-icons/fa";
import { VehicleSmallCard } from "@/components/cards/vehicle-card-small";
import { MediaCard } from "@/components/cards/media-card";
import { Divider } from "@/components/divider";
import type { ReactElement } from "react";

type Props = {
  vehicles: Navigation["vehicles"];
};

export function OurCars({ vehicles }: Props) {
  const categories = vehicles?.categories as Category[];
  const bestSellingVehicles = vehicles?.bestSellingVehicles as Vehicle[];

  return (
    <div className="grid-rows grid w-full gap-1 p-2 lg:grid-cols-[1fr_1px_1fr_1px_1fr]">
      <div className="flex flex-col items-start justify-center gap-8 p-3 lg:items-center">
        <div className="flex flex-col">
          <span className="text-3xl font-medium">Our</span>
          <span className="text-4xl font-bold">Special Offers</span>
          <div className="mt-4">
            <Button className="w-full bg-black">View all</Button>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Divider />
      </div>
      {/* display: categories */}
      <div className="gap-2 lg:px-6">
        <div className="flex flex-col gap-4 p-2">
          <IconTitle
            icon={<FaCarAlt size={24} className="text-primary mt-[2px]" />}
            label="Categories"
          />
          {categories?.map((c) => {
            const image = c.image as Media;
            return (
              <MediaCard
                key={c.id}
                image={image}
                title={c.name}
                subtitle={c.description ?? ""}
              />
            );
          })}
        </div>
      </div>
      <div className="flex items-center">
        <Divider />
      </div>
      {/* display: best Selling vehicles */}
      <div className="flex gap-2 lg:px-6">
        <div className="flex flex-col gap-4 p-2">
          <IconTitle
            icon={<FaCarAlt size={24} className="text-primary mt-[2px]" />}
            label="Best Selling Vehicles"
          />
          {bestSellingVehicles?.map((v) => (
            <VehicleSmallCard key={v.id} vehicle={v} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const IconTitle = ({
  icon,
  label,
}: {
  icon: ReactElement;
  label: string;
}) => {
  return (
    <div className="flex items-center gap-2">
      {/*<FaCarAlt size={24} className="text-primary mt-[2px]" />*/}
      {icon}
      <span className="text-lg font-bold">{label}</span>
    </div>
  );
};
