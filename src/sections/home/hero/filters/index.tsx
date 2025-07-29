"use client";
import { locations, timeOptions } from "@/_mockup";

import { useRef } from "react";
import { Popover } from "@/components/popover";
import dayjs from "dayjs";
import {
  POPOVERS,
  useHeroFilters,
} from "@/sections/home/hero/filters/hooks/use-hero-filters";
import { SelectPickup } from "@/sections/home/hero/filters/fields/select-pickup";
import { SelectDate } from "@/sections/home/hero/filters/fields/select-date";
import { SelectTime } from "@/sections/home/hero/filters/fields/select-time";
import { SearchButton } from "@/sections/home/hero/filters/fields/search-button";
import { FilterRow, HeaderSection } from "@/sections/home/hero/blocks";
import { DayPicker } from "@/sections/home/hero/filters/fields/day-picker";

export const Filters = () => {
  const { onClose, onChange, onToggle, state, openPopover, onDateRangeChange } =
    useHeroFilters();
  //
  const pickupRef = useRef<HTMLDivElement | null>(null);
  const dropoffRef = useRef<HTMLDivElement | null>(null);
  const pickupDateRef = useRef<HTMLDivElement | null>(null);
  const dropoffDateRef = useRef<HTMLDivElement | null>(null);
  const pickupTimeRef = useRef<HTMLDivElement | null>(null);
  const dropoffTimeRef = useRef<HTMLDivElement | null>(null);

  const isDatePickerOpen = openPopover === POPOVERS.dateRange;
  return (
    <div className="z-20 flex h-full w-full flex-1 flex-col items-center justify-center gap-10">
      <HeaderSection hidden={isDatePickerOpen} />
      <FilterRow isDatePickerOpen={isDatePickerOpen}>
        <div className="flex items-center gap-6">
          <SelectPickup
            isDatePickerOpen={isDatePickerOpen}
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
            onToggle={() => onToggle(POPOVERS.dateRange)}
            value={dayjs(state.range.from).format("MMM D")}
          />
          <SelectTime
            isDatePickerOpen={isDatePickerOpen}
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
            isDatePickerOpen={isDatePickerOpen}
            anchorRef={dropoffRef}
            label="Return"
            alignRight
            open={openPopover === POPOVERS.dropoff}
            onClose={onClose}
            onToggle={() => onToggle(POPOVERS.dropoff)}
            options={locations}
            value={state.dropoff}
            onChange={(val) => onChange(POPOVERS.dropoff, val)}
          />
          <SelectDate
            anchorRef={dropoffDateRef}
            onToggle={() => onToggle(POPOVERS.dateRange)}
            value={dayjs(state.range.to).format("MMM D")}
          />
          <SelectTime
            isDatePickerOpen={isDatePickerOpen}
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
          className="w-full duration-500"
          onClose={onClose}
          open={openPopover === POPOVERS.dateRange}
          anchorRef={pickupDateRef}
        >
          <div className="flex w-full justify-center">
            <DayPicker onChange={onDateRangeChange} selected={state.range} />
          </div>
        </Popover>
      </FilterRow>
    </div>
  );
};

export const Divider = () => {
  return <div className="min-w-[1px] self-stretch bg-gray-200" />;
};
