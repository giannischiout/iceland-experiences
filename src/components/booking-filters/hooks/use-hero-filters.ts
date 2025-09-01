import { useEffect, useState } from "react";
import { locations, timeOptions } from "@/_mockup";
import type { DateRange } from "react-day-picker";
import { useRouter, useSearchParams } from "next/navigation";

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
  const router = useRouter();
  const searchParams = useSearchParams();
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

  // 👇 hydrate state from URL
  useEffect(() => {
    if (!searchParams) return;

    const pickup = searchParams.get("pickup");
    const dropoff = searchParams.get("dropoff");
    const pickupTime = searchParams.get("pickupTime");
    const dropoffTime = searchParams.get("dropoffTime");
    const from = searchParams.get("from");
    const to = searchParams.get("to");

    setState((prev) => ({
      ...prev,
      pickup: locations.find((l) => l.value === pickup) ?? prev.pickup,
      dropoff: locations.find((l) => l.value === dropoff) ?? prev.dropoff,
      pickupTime:
        timeOptions.find((t) => t.value === pickupTime) ?? prev.pickupTime,
      dropoffTime:
        timeOptions.find((t) => t.value === dropoffTime) ?? prev.dropoffTime,
      range: {
        from: from ? new Date(from) : prev.range.from,
        to: to ? new Date(to) : prev.range.to,
      },
    }));
  }, [searchParams]);

  const onChange = (key: any, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const onToggle = (key: PopoverType) => {
    console.log({ key });
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

  const onFiltersSubmit = (href: string) => {
    const params = getAllParams();
    router.push(`${href}?${params.toString()}`, { scroll: false });
  };

  const getAllParams = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("pickup", state.pickup.value);
    params.set("dropoff", state.dropoff.value);
    params.set("pickupTime", state.pickupTime.value);
    params.set("dropoffTime", state.dropoffTime.value);
    if (state.range.from) {
      params.set("from", state.range.from.toISOString());
    }
    if (state.range.to) {
      params.set("to", state.range.to.toISOString());
    }
    return params;
  };

  return {
    onClose,
    onChange,
    onToggle,
    openPopover,
    onDateRangeChange,
    state,
    onFiltersSubmit,
  };
};
