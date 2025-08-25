"use client";
import { SelectPickup } from "@/sections/home/hero/filters/fields/select-pickup";
import {
  POPOVERS,
  useHeroFilters,
} from "@/sections/home/hero/filters/hooks/use-hero-filters";
import { locations, timeOptions } from "@/_mockup";
import { DateTimeTriggerWrapper } from "@/sections/home/hero/filters/fields/date-time-picker/container";
import { DateTrigger } from "@/sections/home/hero/filters/fields/date-time-picker/date-trigger";
import dayjs from "dayjs";
import { TimeTrigger } from "@/sections/home/hero/filters/fields/date-time-picker/time-trigger";
import { SearchButton } from "@/sections/home/hero/filters/fields/search-button";
import { Popover } from "@/components/popover";
import { DayPicker } from "@/components/day-picker";
import { Divider } from "@/sections/home/hero/filters";
import { useRef } from "react";

export function BookingFilters() {
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
    <div className="sticky top-0 flex w-full items-center justify-center gap-4 border-t-1 border-gray-200 bg-white p-4 shadow-[0_4px_4px_rgba(0,0,0,0.03)]">
      <div className="relative flex items-end justify-center gap-4">
        <div className="flex items-end gap-4">
          <SelectPickup
            top="120%"
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
            top="120%"
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
        <SearchButton onSubmit={() => {}} />
        {/* date popover */}
        <Popover
          top="120%"
          maxMenuHeight={450}
          className="w-full duration-500"
          onClose={onClose}
          open={openPopover === POPOVERS.dateRange}
          anchorRef={pickupDateRef}
        >
          <div className="flex w-full justify-center bg-red-100">
            <DayPicker onChange={onDateRangeChange} selected={state.range} />
          </div>
        </Popover>
      </div>
    </div>
  );
}
