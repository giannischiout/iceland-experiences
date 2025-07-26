import { useEffect, useState } from "react";
import { locations, timeOptions } from "@/_mockup";

export const POPOVERS = {
  pickup: "pickup",
  dropoff: "dropoff",
  pickupTime: "pickupTime",
  dropoffTime: "dropoffTime",
  pickupDate: "pickupDate",
  dropoffDate: "dropoffDate",
} as const;

type PopoverKey = keyof typeof POPOVERS;
export type PopoverType = PopoverKey | null;

export const useHeroFilters = () => {
  const [state, setState] = useState({
    pickup: locations[0],
    dropoff: locations[1],
    pickupDate: "01-01-2025",
    dropoffDate: "02-01-2025",
    pickupTime: timeOptions[1],
    dropoffTime: timeOptions[1],
  });

  const [openPopover, setOpenPopover] = useState<PopoverType>(null);

  useEffect(() => {
    console.log("render filters hook");
  }, []);

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
    console.log("onclose");
    setOpenPopover(null);
  };

  const isDateOpen = openPopover === "pickupDate";

  return {
    onClose,
    onChange,
    onToggle,
    isDateOpen,
    openPopover,
    //
    state,
  };
};
