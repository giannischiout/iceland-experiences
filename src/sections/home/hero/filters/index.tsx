"use client";
import { locations, timeOptions } from "@/_mockup";

import { useRef } from "react";
import { Popover } from "@/components/popover";
import {
  POPOVERS,
  useHeroFilters,
} from "@/sections/home/hero/filters/hooks/use-hero-filters";
import { FilterRow, HeaderSection } from "@/sections/home/hero/blocks";
import { SelectPickup } from "@/sections/home/hero/filters/fields/select-pickup";
import { SelectDate } from "@/sections/home/hero/filters/fields/select-date";
import { SelectTime } from "@/sections/home/hero/filters/fields/select-time";
import { SearchButton } from "@/sections/home/hero/filters/fields/search-button";

export const Filters = () => {
  const { isDateOpen, onClose, onChange, onToggle, state, openPopover } =
    useHeroFilters();
  //
  const pickupRef = useRef<HTMLDivElement | null>(null);
  const dropoffRef = useRef<HTMLDivElement | null>(null);
  //
  const pickupDateRef = useRef<HTMLDivElement | null>(null);
  const dropoffDateRef = useRef<HTMLDivElement | null>(null);
  //
  const pickupTimeRef = useRef<HTMLDivElement | null>(null);
  const dropoffTimeRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="z-200 mt-[6%] flex w-full flex-1 flex-col items-center gap-10 overflow-hidden">
      <HeaderSection hidden={isDateOpen} />
      <FilterRow hidden={isDateOpen}>
        <div className="flex items-center gap-6">
          <SelectPickup
            open={openPopover === POPOVERS.pickup}
            onClose={onClose}
            onToggle={() => onToggle(POPOVERS.pickup)}
            anchorRef={pickupRef}
            options={locations}
            value={state.pickup}
            onChange={(val) => onChange(POPOVERS.pickup, val)}
          />
          <SelectDate
            anchorRef={pickupDateRef}
            onToggle={() => onToggle(POPOVERS.pickupDate)}
            value={state.pickupDate}
          />
          <SelectTime
            open={openPopover === POPOVERS.pickupTime}
            onToggle={() => onToggle(POPOVERS.pickupTime)}
            onClose={onClose}
            anchorRef={pickupTimeRef}
            options={timeOptions}
            value={state.pickupTime}
            onChange={(val) => onChange(POPOVERS.pickupTime, val)}
          />
        </div>
        <Divider />
        <div className="flex items-center gap-6">
          <SelectPickup
            anchorRef={dropoffRef}
            alignRight
            open={openPopover === POPOVERS.dropoff}
            onClose={onClose}
            onToggle={() => onToggle(POPOVERS.dropoff)}
            options={locations}
            value={state.dropoff}
            onChange={(val) => onChange(POPOVERS.dropoff, val)}
          />
          <SelectTime
            open={openPopover === POPOVERS.dropoffTime}
            onToggle={() => onToggle(POPOVERS.dropoffTime)}
            onClose={onClose}
            anchorRef={dropoffTimeRef}
            options={timeOptions}
            value={state.dropoffTime}
            onChange={(val) => onChange(POPOVERS.dropoffTime, val)}
          />
        </div>
        <Divider />
        <SearchButton />
        {/* date popover */}
        <Popover
          maxMenuHeight={450}
          className="h-[450px] w-full duration-500"
          onClose={onClose}
          open={openPopover === POPOVERS.pickupDate}
          anchorRef={pickupDateRef}
        >
          <div className="min-h-[600px] w-full bg-red-100">tesst</div>
        </Popover>
      </FilterRow>
    </div>
  );
};

export const Divider = () => {
  return <div className="w-[1.4px] self-stretch bg-gray-200" />;
};
