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
} as const;

const initialFilters = {
  pickup: locations[0],
  dropoff: locations[1],
  pickupTime: timeOptions[0],
  dropoffTime: timeOptions[1],
  range: {
    from: dayjs().toDate(),
    to: dayjs().add(1, "day").toDate(),
  },
  openPopover: null,
};

export function FilterPanel({ top = "110%" }: { top: string }) {
  const pickupRef = useRef<HTMLDivElement | null>(null);
  const dropoffRef = useRef<HTMLDivElement | null>(null);
  const pickupDateRef = useRef<HTMLDivElement | null>(null);
  const dropoffDateRef = useRef<HTMLDivElement | null>(null);
  const pickupTimeRef = useRef<HTMLDivElement | null>(null);
  const dropoffTimeRef = useRef<HTMLDivElement | null>(null);

  const {
    // state:
    dropoffTime,
    pickupTime,
    pickup,
    dropoff,
    range,
    openPopover,
    // handlers:
    setField,
    setDateField,
    onClose,
    onToggle,
  } = useFilterStore();

  const isDatePickerOpen = openPopover === "dateRange";

  return (
    <div className="flex items-end justify-center gap-4">
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
            value={dayjs(range.from).format("MMM D")}
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
          onClose={onClose}
          onToggle={() => onToggle(POPOVERS.dropoff)}
          options={locations}
          value={dropoff}
          onChange={(val) => setField(POPOVERS.dropoff, val)}
        />

        <DateTimeTriggerWrapper label="Pickup Date">
          <DateTrigger
            value={dayjs(range.from).format("MMM D")}
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
            onClose={onClose}
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
        maxMenuHeight={450}
        className="w-full duration-500"
        onClose={onClose}
        open={openPopover === POPOVERS.dateRange}
        anchorRef={pickupDateRef}
      >
        <div className="flex w-full justify-center bg-red-100">
          <DayPicker onChange={setDateField} selected={range} />
        </div>
      </Popover>
    </div>
  );
}
