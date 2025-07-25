"use client";
import { useState } from "react";
import { locations, timeOptions } from "@/_mockup";
import { IoSearchOutline } from "react-icons/io5";
import { SelectTime } from "@/app/sections/home/filters/fields/select-time";
import { SelectPickup } from "@/app/sections/home/filters/fields/select-pickup";
import { SelectDate } from "@/app/sections/home/filters/fields/select-date";
import { usePopover } from "@/hooks/use-popover";
import { Popover } from "@/components/popover";
import { cn } from "@/lib/utils";

export const Filters = () => {
  const [state, setState] = useState({
    pickup: locations[0],
    return: locations[1],
    startDate: "01-01-2025",
    endDate: "02-01-2025",
    pickupTime: timeOptions[1],
    returnTime: "13:30",
  });
  const { anchorRef, onToggle, onClose, open } = usePopover<HTMLDivElement>();
  const handleChange = (key: any, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div
      className={cn(
        "relative top-0 flex items-center gap-6 rounded-2xl bg-red-100 bg-white p-6 shadow-lg transition-[top] duration-300 ease-in-out",
        open && "-top-40",
      )}
    >
      <div className="flex items-center gap-6">
        <SelectPickup
          options={locations}
          value={state.pickup}
          onChange={(val) => handleChange("pickup", val)}
        />
        <SelectDate
          anchorRef={anchorRef}
          onClick={onToggle}
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
        <SelectDate
          anchorRef={anchorRef}
          onClick={onToggle}
          value={state.startDate}
        />
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
        className="h-[450px] w-full"
        onClose={onClose}
        open={open}
        anchorRef={anchorRef}
      >
        <div className="min-h-[600px] w-full bg-red-100">tesst</div>
      </Popover>
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
