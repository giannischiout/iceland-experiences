"use client";
import { locations, timeOptions } from "@/_mockup";
import { FilterRow, HeaderSection } from "@/app/sections/home/hero/blocks";
import { SearchButton } from "@/app/sections/home/hero/filters/fields/search-button";
import {
  POPOVERS,
  useHeroFilters,
} from "@/app/sections/home/hero/filters/hooks/use-hero-filters";
import { SelectTime } from "@/app/sections/home/hero/filters/fields/select-time";
import { useRef } from "react";
import { SelectPickup } from "@/app/sections/home/hero/filters/fields/select-pickup";
import { Popover } from "@/components/popover";
import { SelectDate } from "@/app/sections/home/hero/filters/fields/select-date";
import { DayPicker } from "@/app/sections/home/hero/filters/fields/day-picker";
import dayjs from "dayjs";

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
    <div className="z-200 mt-[6%] flex w-full flex-1 flex-col items-center gap-10 overflow-hidden">
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
