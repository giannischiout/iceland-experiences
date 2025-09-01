"use client";
import {
  POPOVERS,
  useHeroFilters,
} from "@/components/booking-filters/hooks/use-hero-filters";
import { useRef } from "react";
import { locations, timeOptions } from "@/_mockup";
import { DateTimeTriggerWrapper } from "@/components/booking-filters/fields/date-time-picker/container";
import { DateTrigger } from "@/components/booking-filters/fields/date-time-picker/date-trigger";
import dayjs from "dayjs";
import { TimeTrigger } from "@/components/booking-filters/fields/date-time-picker/time-trigger";
import { BookingDivider } from "@/components/divider/booking-filter-divider";
import { SearchButton } from "@/components/booking-filters/fields/search-button";
import { Popover } from "@/components/popover";
import { DayPicker } from "@/components/day-picker";
import { SelectPickup } from "@/components/booking-filters/fields/select-pickup";
import { BookingFilterGroup } from "@/components/booking-filters/fields/field-group";
import { cn } from "@/lib/utils";

export function BookingHeroFilters() {
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
  console.log({ openPopover });

  return (
    <div
      className={cn(
        "relative z-10 flex translate-y-0 items-center gap-6 rounded-2xl bg-white p-6 opacity-100 shadow-lg transition-transform duration-200 ease-in-out",
        isDatePickerOpen && "-translate-y-[180%] delay-300",
      )}
    >
      <div className="relative flex items-end justify-center gap-4">
        {/* left */}
        <BookingFilterGroup
          isDatePickerOpen={isDatePickerOpen}
          pickupRef={pickupRef}
          pickupDateRef={pickupDateRef}
          pickupTimeRef={pickupTimeRef}
          state={state}
          openPopover={openPopover}
          onChange={onChange}
          onToggle={onToggle}
          onClose={onClose}
        />
        <BookingDivider />
        {/* right */}
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
              alignRight
              open={openPopover === POPOVERS.dropoffTime}
              options={timeOptions}
              value={state.pickupTime}
              anchorRef={dropoffTimeRef}
              onClose={onClose}
              onToggle={() => onToggle(POPOVERS.dropoffTime)}
              onChange={(val) => onChange(POPOVERS.dropoffTime, val)}
            />
          </DateTimeTriggerWrapper>
        </div>
        <BookingDivider />
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
