import { SelectPickup } from "@/components/booking-filters/fields/select-pickup";
import { locations, timeOptions } from "@/_mockup";
import { DateTimeTriggerWrapper } from "@/components/booking-filters/fields/date-time-picker/container";
import { DateTrigger } from "@/components/booking-filters/fields/date-time-picker/date-trigger";
import dayjs from "dayjs";
import { TimeTrigger } from "@/components/booking-filters/fields/date-time-picker/time-trigger";
import { BookingDivider } from "@/components/divider/booking-filter-divider";
import { SearchButton } from "@/components/booking-filters/fields/search-button";
import { Popover } from "@/components/popover";
import { DayPicker } from "@/components/day-picker";
import { useFilterStore } from "@/store/use-filters-store";
import { useRef } from "react";

export const POPOVERS = {
  pickup: "pickup",
  dropoff: "dropoff",
  pickupTime: "pickupTime",
  dropoffTime: "dropoffTime",
  dateRange: "dateRange",
  from: "from",
  to: "to",
} as const;

export function FiltersDesktop({ top = "110%" }: { top: string }) {
  const pickupRef = useRef<HTMLDivElement | null>(null);
  const dropoffRef = useRef<HTMLDivElement | null>(null);
  const pickupDateRef = useRef<HTMLDivElement | null>(null);
  const dropoffDateRef = useRef<HTMLDivElement | null>(null);
  const pickupTimeRef = useRef<HTMLDivElement | null>(null);
  const dropoffTimeRef = useRef<HTMLDivElement | null>(null);

  const {
    dropoffTime,
    pickupTime,
    pickup,
    dropoff,
    range,
    openPopover,
    setField,
    onClose,
    onToggle,
  } = useFilterStore();

  const isDatePickerOpen = openPopover === "dateRange";

  return (
    <div className="desktop-filters max-h-[70px] items-end justify-center gap-4">
      <div className="flex items-end gap-2">
        <SelectPickup
          top={top}
          isDatePickerOpen={isDatePickerOpen}
          open={openPopover === POPOVERS.pickup}
          onClose={() => onClose(POPOVERS.pickup)}
          onToggle={() => onToggle(POPOVERS.pickup)}
          anchorRef={pickupRef}
          options={locations}
          value={pickup}
          onChange={(val) => setField(POPOVERS.pickup, val)}
        />
        <DateTimeTriggerWrapper label="Pickup Date">
          <DateTrigger
            value={range.from ? dayjs(range?.from).format("MMM D") : null}
            anchorRef={pickupDateRef}
            onClick={() => onToggle(POPOVERS.dateRange)}
          />
          <div className="h-[50%] w-[1px] bg-gray-400" />
          <TimeTrigger
            top={top}
            open={openPopover === POPOVERS.pickupTime}
            options={timeOptions}
            value={pickupTime}
            anchorRef={pickupTimeRef}
            onClose={() => onClose(POPOVERS.pickupTime)}
            onToggle={() => onToggle(POPOVERS.pickupTime)}
            onChange={(val) => setField(POPOVERS.pickupTime, val)}
          />
        </DateTimeTriggerWrapper>
      </div>
      <BookingDivider />
      {/* right */}
      <div className="flex items-center gap-2">
        <SelectPickup
          top={top}
          isDatePickerOpen={isDatePickerOpen}
          anchorRef={dropoffRef}
          label="Dropoff"
          alignRight
          open={openPopover === POPOVERS.dropoff}
          onClose={() => onClose(POPOVERS.dropoff)}
          onToggle={() => onToggle(POPOVERS.dropoff)}
          options={locations}
          value={dropoff}
          onChange={(val) => setField(POPOVERS.dropoff, val)}
        />
        <DateTimeTriggerWrapper label="Pickup Date">
          <DateTrigger
            value={range.to ? dayjs(range?.to).format("MMM D") : null}
            anchorRef={dropoffDateRef}
            onClick={() => onToggle(POPOVERS.dateRange)}
          />
          <div className="h-[50%] w-[1px] bg-gray-400" />
          <TimeTrigger
            top={top}
            alignRight
            open={openPopover === POPOVERS.dropoffTime}
            options={timeOptions}
            value={dropoffTime}
            anchorRef={dropoffTimeRef}
            onClose={() => onClose(POPOVERS.dropoffTime)}
            onToggle={() => onToggle(POPOVERS.dropoffTime)}
            onChange={(val) => setField(POPOVERS.dropoffTime, val)}
          />
        </DateTimeTriggerWrapper>
      </div>
      <BookingDivider />
      <SearchButton onSubmit={() => {}} />
      {/* date popover */}
      <Popover
        top={top}
        className="w-full p-0 duration-500"
        onClose={() => onClose(POPOVERS.dateRange)}
        open={isDatePickerOpen}
        anchorRef={pickupDateRef}
      >
        <div className="flex w-full items-center justify-center p-6">
          <DayPicker />
        </div>
      </Popover>
    </div>
  );
}
