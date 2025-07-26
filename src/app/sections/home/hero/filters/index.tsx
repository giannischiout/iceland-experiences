"use client";
import { FilterRow, HeaderSection } from "@/app/sections/home/hero/blocks";
import { SearchButton } from "@/app/sections/home/hero/filters/fields/search-button";
import { useRef, useState } from "react";
import { Popover } from "@/components/popover";
import { locations, timeOptions } from "@/_mockup";
import { Field } from "@/app/sections/home/hero/filters/fields/field-wrapper";

const POPOVERS = {
  pickup: "pickup",
  dropoff: "dropoff",
  pickupTime: "pickupTime",
  dropoffTime: "dropoffTime",
  pickupDate: "pickupDate",
  dropoffDate: "dropoffDate",
} as const;

type PopoverKey = keyof typeof POPOVERS;
export type PopoverType = PopoverKey | null;

type PopoverContentProps = {
  onChange: (value: any) => void;
};

export const Filters = () => {
  const [state, setState] = useState({
    pickup: locations[0],
    dropoff: locations[1],
    pickupDate: "01-01-2025",
    dropoffDate: "02-01-2025",
    pickupTime: timeOptions[1],
    dropoffTime: timeOptions[1],
  });
  const [activePopover, setActivePopover] = useState<PopoverType>(null);
  const pickupRef = useRef<HTMLDivElement | null>(null);
  const pickupTimeRef = useRef<HTMLDivElement | null>(null);

  const onToggle = (key: PopoverKey) => {
    if (activePopover === key) {
      setActivePopover(null);
    } else {
      setTimeout(() => {
        setActivePopover(key);
      }, 200);
    }
  };

  const onClose = () => {
    setActivePopover(null);
  };

  const onChange = (key: any, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const POPOVER_CONFIGS: Record<
    PopoverKey,
    { component: React.FC<PopoverContentProps>; anchorRef: React.RefObject<HTMLDivElement | null> }
  > = {
    pickup: {
      component: (
        <Popover
          key="pickup"
          className="left-0 h-[400px]"
          onClose={onClose}
          open={!!activePopover}
          anchorRef={pickupRef}
        >
          <ul>
            <li onClick={() => onChange("pickup", { label: "1", value: "1" })}>pickup time 1</li>
            <li onClick={() => onChange("pickup", { label: "2", value: "2" })}>pickup time 2</li>
          </ul>
        </Popover>
      ),
      anchorRef: pickupRef,
    },
    pickupTime: {
      component: (
        <Popover
          key="pickup"
          className="left-[400px] h-[400px]"
          onClose={onClose}
          open={!!activePopover}
          anchorRef={pickupTimeRef}
        >
          <ul>
            <li onClick={() => onChange("pickupTime", { label: "1", value: "1" })}>
              picksefsefsup time 1
            </li>
            <li onClick={() => onChange("pickupTime", { label: "2", value: "2" })}>
              picefsefkup time 2
            </li>
          </ul>
        </Popover>
      ),
      anchorRef: pickupTimeRef,
      className: "left-[400px] h-[400px]",
    },
  };

  return (
    <div className="z-200 mt-[6%] flex w-full flex-1 flex-col items-center gap-10 overflow-hidden">
      <HeaderSection hidden={false} />
      <FilterRow hidden={false}>
        <div className="flex items-center gap-6">
          <Field
            onToggle={() => onToggle(POPOVERS.pickup)}
            isPrimary
            anchorRef={pickupRef}
            label="Pickup"
            value={state.pickup.label}
          />
          <Field
            onToggle={() => onToggle(POPOVERS.pickupTime)}
            anchorRef={pickupTimeRef}
            label="Time"
            value={state.pickupTime.label}
          />
        </div>
        <Divider />

        <Divider />
        <SearchButton />
        {/* popovers */}
        {POPOVER_CONFIGS?.[activePopover]?.component}
      </FilterRow>
    </div>
  );
};

export const Divider = () => {
  return <div className="w-[1.4px] self-stretch bg-gray-200" />;
};
