"use client";

import Image from "next/image";
import { FilterPanel } from "@/components/booking-filters";
import { cn } from "@/lib/utils";
import { useFilterStore } from "@/store/use-filters-store";
import { HeaderSection } from "@/sections/home/hero/blocks";

export function HomePageView() {
  const { openPopover } = useFilterStore();
  const isDatePickerOpen = openPopover === "dateRange";
  return (
    <section className="relative flex h-[calc(100vh-80px)] w-full flex-col items-center overflow-hidden">
      <div className="relative flex w-full flex-1">
        <BackgroundImage />
        <div className="z-20 flex h-full w-full flex-1 flex-col items-center justify-center gap-12">
          <HeaderSection hidden={isDatePickerOpen} />
          <div
            className={cn(
              "relative z-10 flex translate-y-0 items-center gap-6 rounded-2xl bg-white p-6 opacity-100 shadow-lg transition-transform delay-300 duration-200 ease-in-out",
              isDatePickerOpen && "-translate-y-[220%] delay-300",
            )}
          >
            <FilterPanel top="110%" />
          </div>
        </div>
      </div>
      <div className="flex h-[12vh] items-center justify-center bg-red-100" />
    </section>
  );
}

function BackgroundImage() {
  return (
    <>
      <div className="absolute z-1 h-full w-full rounded-lg bg-black/20" />
      <Image
        alt="background image"
        fill
        src="/assets/camper.jpg"
        className="rounded-lg object-cover object-center saturate-50"
      />
    </>
  );
}
