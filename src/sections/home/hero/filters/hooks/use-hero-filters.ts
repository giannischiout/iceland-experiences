import { useState } from "react";
import { locations, timeOptions } from "@/_mockup";
import type { DateRange } from "react-day-picker";

export const POPOVERS = {
  pickup: "pickup",
  dropoff: "dropoff",
  pickupTime: "pickupTime",
  dropoffTime: "dropoffTime",
  dateRange: "dateRange",
} as const;

type PopoverKey = keyof typeof POPOVERS; // "pickup" | "returnPickup" | ...
export type PopoverType = PopoverKey | null;
type Location = (typeof locations)[number];
type TimeOption = (typeof timeOptions)[number];
export type HeroFilterState = {
  pickup: Location;
  dropoff: Location;
  pickupTime: TimeOption;
  dropoffTime: TimeOption;
  range: DateRange;
};

export const useHeroFilters = () => {
  const [state, setState] = useState<HeroFilterState>({
    pickup: locations[0],
    dropoff: locations[1],
    pickupTime: timeOptions[1],
    dropoffTime: timeOptions[1],
    range: {
      from: new Date(),
      to: new Date(),
    },
  });
  const [openPopover, setOpenPopover] = useState<PopoverType>(null);

  const onChange = (key: any, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const onToggle = (key: PopoverType) => {
    setOpenPopover((prev) => {
      if (prev === key) return null;
      else return key;
    });
  };

  const onClose = () => {
    setOpenPopover(null);
  };

  const onDateRangeChange = (range: DateRange | undefined) => {
    if (!range) return;
    setState((prev) => ({ ...prev, range }));
  };

  return {
    onClose,
    onChange,
    onToggle,
    openPopover,
    onDateRangeChange,
    state,
  };
};
