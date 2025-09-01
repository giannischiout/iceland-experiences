import { SelectPickup } from "@/components/booking-filters/fields/select-pickup";
import type {
  HeroFilterState,
  PopoverType,
} from "@/components/booking-filters/hooks/use-hero-filters";

import { POPOVERS } from "@/components/booking-filters/hooks/use-hero-filters";

import type { pickupIcons } from "@/_mockup";
import { locations, timeOptions } from "@/_mockup";
import { DateTimeTriggerWrapper } from "@/components/booking-filters/fields/date-time-picker/container";
import { DateTrigger } from "@/components/booking-filters/fields/date-time-picker/date-trigger";
import dayjs from "dayjs";
import { TimeTrigger } from "@/components/booking-filters/fields/date-time-picker/time-trigger";
import type { RefObject } from "react";

type Value = {
  value: string;
  label: string;
  icon: keyof typeof pickupIcons; // "busstop" | "airport" | "area"
};

type Props = {
  isDatePickerOpen: boolean;
  openPopover: PopoverType;
  onClose: () => void;
  pickupRef: RefObject<HTMLDivElement | null>;
  pickupDateRef: RefObject<HTMLDivElement | null>;
  pickupTimeRef: RefObject<HTMLDivElement | null>;
  state: HeroFilterState;
  onChange: (type: PopoverType, val: any) => void;
  onToggle: (type: PopoverType) => void;
};

export const BookingFilterGroup = ({
  isDatePickerOpen,
  pickupRef,
  state,
  onChange,
  pickupDateRef,
  pickupTimeRef,
  openPopover,
  onClose,
  onToggle,
}: Props) => {
  return (
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
  );
};
