"use client";
import Image from "next/image";
import { FilterPanel } from "@/components/booking-filters";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="container mx-auto flex w-full flex-col rounded-lg">
      <div className="relative flex min-h-[50vh] w-full flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10 rounded-lg bg-gradient-to-t from-black/40 to-transparent" />
        <div
          className={cn(
            "text-background absolute z-10 flex translate-y-1/2 flex-col gap-2 text-center transition-all duration-400 ease-in-out",
          )}
        >
          <h1 className="text-6xl font-bold">Gear up. Go Anywhere</h1>
          <h1 className="text-3xl font-light">Your expedition our wheels</h1>
        </div>
        <BackgroundImage />
      </div>
      {/*<HeroFilters />*/}
      <div className="relative z-2 z-10 mx-auto mt-[-50px] rounded-lg bg-white p-6">
        <FilterPanel top="110%" />
      </div>

      <div className="flex h-full items-center p-2" />
    </section>
  );
}

function BackgroundImage() {
  return (
    <Image
      alt="background image"
      fill
      src="/assets/background.jpg"
      className="rounded-lg object-cover object-center brightness-95 contrast-105 hue-rotate-20"
    />
  );
}
