import { cn } from "@/lib/utils";
import Image from "next/image";
import type { Category, Media, Vehicle } from "@/payload-types";

type Props = {
  vehicle: Vehicle;
};

export const VehicleSmallCard = ({ vehicle }: Props) => {
  const image = (vehicle?.image as Media) || null;
  return (
    <div className={cn("flex items-center gap-3 rounded-md")}>
      <div className="relative h-[70px] w-[90px]">
        <Image
          className="rounded-md border border-gray-200 object-cover"
          alt={image?.alt as string}
          src={image?.url as string}
          fill
          sizes="60px 70px"
        />
      </div>

      <div className="flex flex-col items-center gap-0.5">
        <div className="flex w-full flex-col">
          <span className="text-[16px] font-bold text-gray-500">
            {vehicle?.model.charAt(0).toUpperCase() + vehicle?.model.slice(1)}
          </span>
          <span className="text-muted-foreground mt-[-2px] text-[12px]">
            {(vehicle?.category as Category).name}
          </span>
        </div>
        <div className="flex gap-2">
          <div className="flex w-full items-center gap-0.5">
            {/*<MdAirlineSeatIndividualSuite className="text-gray-400" size={18} />*/}
            <span className="text-[13px] text-nowrap text-gray-500">
              Sleeps:{" "}
              <span className="font-bold text-black">{vehicle.sleeps}</span>
            </span>
          </div>

          <div className="flex w-full items-center gap-0.5">
            {/*<MdEventSeat className="mb-0.5 text-gray-400" size={18} />*/}
            <span className="text-[13px] text-gray-500">
              Seats:
              <span className="font-bold text-black">{vehicle.sleeps}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
