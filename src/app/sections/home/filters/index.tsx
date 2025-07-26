"use client";
import { useState } from "react";
import { locations, timeOptions } from "@/_mockup";
import { IoSearchOutline } from "react-icons/io5";
import { SelectTime } from "@/app/sections/home/filters/fields/select-time";
import { SelectPickup } from "@/app/sections/home/filters/fields/select-pickup";
import { SelectDate } from "@/app/sections/home/filters/fields/select-date";
import { Popover } from "@/components/popover";
import { cn } from "@/lib/utils";
import { usePopover } from "@/hooks/use-popover";

export const Filters = () => {
  const [state, setState] = useState({
    pickup: locations[0],
    return: locations[1],
    startDate: "01-01-2025",
    endDate: "02-01-2025",
    pickupTime: timeOptions[1],
    returnTime: "13:30",
  });
  const [openPopover, setOpenPopover] = useState<
    "pickup" | "returnPickup" | "pickupTime" | "returnTime" | "date" | null
  >(null);

  const datePopover = usePopover<HTMLDivElement>();
  const handleChange = (key: any, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="z-200 mt-[6%] flex w-full flex-1 flex-col items-center gap-10 overflow-hidden">
      <div
        className={cn(
          "flex max-w-[700px] flex-col gap-2 text-center transition-all duration-400 ease-in-out",
          datePopover.open && "opacity-0",
        )}
      >
        <h1 className="text-5xl font-light">Your Local </h1>
        <h1 className="text-6xl font-bold">Card Rental in Iceland</h1>
      </div>
      <div
        className={cn(
          "relative top-0 flex items-center gap-6 rounded-2xl bg-red-100 bg-white p-6 shadow-lg transition-[top] duration-300 ease-in-out",
          datePopover.open && "-top-40 delay-250",
        )}
      >
        <div className="flex items-center gap-6">
          <SelectPickup
            options={locations}
            value={state.pickup}
            onChange={(val) => handleChange("pickup", val)}
          />
          <SelectDate
            anchorRef={datePopover.anchorRef}
            onClick={datePopover.onToggle}
            value={state.startDate}
          />
          <SelectTime
            options={timeOptions}
            value={state.pickupTime}
            onChange={(val) => handleChange("pickupTime", val)}
          />
        </div>
        <Divider />
        <div className="flex items-center gap-6">
          <SelectPickup
            alignRight
            options={locations}
            value={state.return}
            onChange={(val) => handleChange("return", val)}
          />
          {/*<SelectDate*/}
          {/*  anchorRef={anchorRef}*/}
          {/*  onClick={onToggle}*/}
          {/*  value={state.startDate}*/}
          {/*/>*/}
          <SelectTime
            alignRight
            options={timeOptions}
            value={state.pickupTime}
            onChange={(val) => handleChange("pickupTime", val)}
          />
        </div>
        <Divider />
        <SubmitButton />
        <Popover
          maxMenuHeight={450}
          className="h-[450px] w-full duration-500"
          onClose={datePopover.onClose}
          open={datePopover.open}
          anchorRef={datePopover.anchorRef}
        >
          <div className="min-h-[600px] w-full bg-red-100">tesst</div>
        </Popover>
      </div>
    </div>
  );
};

export const SubmitButton = () => {
  return (
    <button className="bg-primary hover:bg-primary/80 ml-3 flex h-11 w-11 items-center justify-center rounded-md font-bold text-white transition-colors duration-300 ease-in-out">
      <IoSearchOutline size={24} />
    </button>
  );
};

export const Divider = () => {
  return <div className="w-[1.4px] self-stretch bg-gray-200" />;
};
