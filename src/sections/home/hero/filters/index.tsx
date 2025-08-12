"use client";
import { locations, timeOptions } from "@/_mockup";

import { useRef, useState } from "react";
import { Popover } from "@/components/popover";
import {
  POPOVERS,
  useHeroFilters,
} from "@/sections/home/hero/filters/hooks/use-hero-filters";
import { SelectPickup } from "@/sections/home/hero/filters/fields/select-pickup";
import { SearchButton } from "@/sections/home/hero/filters/fields/search-button";
import { FilterRow, HeaderSection } from "@/sections/home/hero/blocks";
import dayjs from "dayjs";
import { DateTimeTriggerWrapper } from "@/sections/home/hero/filters/fields/date-time-picker/container";
import { DateTrigger } from "@/sections/home/hero/filters/fields/date-time-picker/date-trigger";
import { TimeTrigger } from "@/sections/home/hero/filters/fields/date-time-picker/time-trigger";
import { DayPicker } from "@/components/day-picker";
import { cn } from "@/lib/utils";

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

  const [activeTab, setActive] = useState("all");

  const handleActive = (tab: string) => {
    setActive(tab);
  };
  return (
    <div className="z-20 flex h-full w-full flex-1 flex-col items-center justify-center gap-10">
      <HeaderSection hidden={isDatePickerOpen} />

      <FilterRow isDatePickerOpen={isDatePickerOpen}>
        <div className="flex items-center gap-4">
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
          <DateTimeTriggerWrapper label="Pickup Date">
            <DateTrigger
              value={dayjs(state.range.from).format("MMM D")}
              anchorRef={pickupDateRef}
              onClick={() => onToggle(POPOVERS.dateRange)}
            />
            <div className="h-[50%] w-[1px] bg-gray-400" />
            <TimeTrigger
              open={openPopover === POPOVERS.pickupTime}
              options={timeOptions}
              value={state.pickupTime}
              anchorRef={pickupTimeRef}
              onClose={onClose}
              onToggle={() => onToggle(POPOVERS.pickupTime)}
              onChange={(val) => onChange(POPOVERS.pickupTime, val)}
            />
          </DateTimeTriggerWrapper>
        </div>
        <Divider />
        <div className="flex items-center gap-6">
          <SelectPickup
            isDatePickerOpen={isDatePickerOpen}
            anchorRef={dropoffRef}
            label="Dropoff"
            alignRight
            open={openPopover === POPOVERS.dropoff}
            onClose={onClose}
            onToggle={() => onToggle(POPOVERS.dropoff)}
            options={locations}
            value={state.dropoff}
            onChange={(val) => onChange(POPOVERS.dropoff, val)}
          />

          <DateTimeTriggerWrapper label="Pickup Date">
            <DateTrigger
              value={dayjs(state.range.from).format("MMM D")}
              anchorRef={dropoffDateRef}
              onClick={() => onToggle(POPOVERS.dateRange)}
            />
            <div className="h-[50%] w-[1px] bg-gray-400" />
            <TimeTrigger
              open={openPopover === POPOVERS.pickupTime}
              options={timeOptions}
              value={state.pickupTime}
              anchorRef={dropoffTimeRef}
              onClose={onClose}
              onToggle={() => onToggle(POPOVERS.dropoffTime)}
              onChange={(val) => onChange(POPOVERS.dropoffTime, val)}
            />
          </DateTimeTriggerWrapper>
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

export const TabItem = ({ label, onClick, activeTab }) => {
  return (
    <span
      onClick={onClick}
      className={cn(
        "bg-gray-500 p-2 px-4",
        activeTab === label.toLowerCase() && "bg-gray-700",
      )}
    >
      {label}
    </span>
  );
};

export const Divider = () => {
  return <div className="min-w-[1px] self-stretch bg-gray-200" />;
};

{
  /*<SelectDate*/
}
{
  /*  anchorRef={dropoffDateRef}*/
}
{
  /*  onToggle={() => onToggle(POPOVERS.dateRange)}*/
}
{
  /*  value={dayjs(state.range.to).format("MMM D")}*/
}
{
  /*/>*/
}
{
  /*<SelectTime*/
}
{
  /*  isDatePickerOpen={isDatePickerOpen}*/
}
{
  /*  open={openPopover === POPOVERS.dropoffTime}*/
}
{
  /*  onToggle={() => onToggle(POPOVERS.dropoffTime)}*/
}
{
  /*  onClose={onClose}*/
}
{
  /*  anchorRef={dropoffTimeRef}*/
}
{
  /*  options={timeOptions}*/
}
{
  /*  value={state.dropoffTime}*/
}
{
  /*  onChange={(val) => onChange(POPOVERS.dropoffTime, val)}*/
}
{
  /*/>*/
}
