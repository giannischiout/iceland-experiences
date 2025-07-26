import { useRef, useState } from "react";
import { locations, timeOptions } from "@/_mockup";

export const POPOVERS = {
  pickup: "pickup",
  returnPickup: "returnPickup",
  pickupTime: "pickupTime",
  returnTime: "returnTime",
  date: "date",
} as const;

type PopoverKey = keyof typeof POPOVERS; // "pickup" | "returnPickup" | ...
export type PopoverType = PopoverKey | null;

export const useHeroFilters = () => {
  const [state, setState] = useState({
    pickup: locations[0],
    return: locations[1],
    startDate: "01-01-2025",
    endDate: "02-01-2025",
    pickupTime: timeOptions[1],
    returnTime: "13:30",
  });
  const [openPopover, setOpenPopover] = useState<PopoverType>(null);
  const pickupRef = useRef<HTMLDivElement | null>(null);
  const returnRef = useRef<HTMLDivElement | null>(null);
  const startDateRef = useRef<HTMLDivElement | null>(null);
  const endDateRef = useRef<HTMLDivElement | null>(null);

  const onChange = (key: any, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const onToggle = (key: PopoverType) => {
    setOpenPopover((prev) => {
      if (prev === key) return null;
      else return key;
    });
  };
  const onClose = () => setOpenPopover(null);

  const isDateOpen = openPopover === "date";

  return {
    onClose,
    onChange,
    onToggle,
    isDateOpen,
    openPopover,
    //
    state,
    refs: {
      endDateRef,
      returnRef,
      startDateRef,
      pickupRef,
    },
  };
};
