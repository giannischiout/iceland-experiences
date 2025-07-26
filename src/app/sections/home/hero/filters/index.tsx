"use client";
import { locations, timeOptions } from "@/_mockup";
import { Popover } from "@/components/popover";
import { SelectTime } from "@/app/sections/home/hero/filters/fields/select-time";
import { FilterRow, HeaderSection } from "@/app/sections/home/hero/blocks";
import { SelectPickup } from "@/app/sections/home/hero/filters/fields/select-pickup";
import { SelectDate } from "@/app/sections/home/hero/filters/fields/select-date";
import { SearchButton } from "@/app/sections/home/hero/filters/fields/search-button";
import {
  POPOVERS,
  useHeroFilters,
} from "@/app/sections/home/hero/filters/hooks/use-hero-filters";

export const Filters = () => {
  const { isDateOpen, onClose, onChange, onToggle, state, refs, openPopover } =
    useHeroFilters();
  return (
    <div className="z-200 mt-[6%] flex w-full flex-1 flex-col items-center gap-10 overflow-hidden">
      <HeaderSection hidden={isDateOpen} />
      <FilterRow hidden={isDateOpen}>
        <div className="flex items-center gap-6">
          <SelectPickup
            open={openPopover === POPOVERS.pickup}
            onClose={onClose}
            onToggle={() => onToggle(POPOVERS.pickup)}
            anchorRef={refs.pickupRef}
            options={locations}
            value={state.pickup}
            onChange={(val) => onChange(POPOVERS.pickup, val)}
          />
          <SelectDate
            anchorRef={refs.startDateRef}
            onToggle={() => onToggle(POPOVERS.date)}
            value={state.startDate}
          />
          <SelectTime
            options={timeOptions}
            value={state.pickupTime}
            onChange={(val) => onChange(POPOVERS.pickupTime, val)}
          />
        </div>
        <Divider />
        <div className="flex items-center gap-6">
          <SelectPickup
            anchorRef={refs.returnRef}
            alignRight
            open={openPopover === POPOVERS.returnPickup}
            onClose={onClose}
            onToggle={() => onToggle(POPOVERS.returnPickup)}
            options={locations}
            value={state.pickup}
            onChange={(val) => onChange(POPOVERS.returnPickup, val)}
          />
          <SelectTime
            alignRight
            options={timeOptions}
            value={state.pickupTime}
            onChange={(val) => onChange(POPOVERS.pickupTime, val)}
          />
        </div>
        <Divider />
        <SearchButton />
        {/* date popover */}
        <Popover
          maxMenuHeight={450}
          className="h-[450px] w-full duration-500"
          onClose={onClose}
          open={openPopover === POPOVERS.date}
          anchorRef={refs.startDateRef}
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
