"use client";
import { HeaderSection } from "@/sections/home/hero/header";
import { FilterPanel } from "@/components/booking-filters";
import { useFilterStore } from "@/store/use-filters-store";
import { cn } from "@/lib/utils";

export function HeroFilters() {
  const { openPopover } = useFilterStore();
  const isDatePickerOpen = openPopover === "dateRange";
  return (
    <>
      <HeaderSection hidden={isDatePickerOpen} />
      <div
        className={cn(
          "relative rounded-md bg-white p-6 transition-all delay-150 duration-300 ease-in-out",
          isDatePickerOpen ? "translate-y-[-280px]" : "translate-y-0",
        )}
      >
        <FilterPanel top="110%" />
      </div>
    </>
  );
}
