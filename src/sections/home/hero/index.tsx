import Image from "next/image";
import { HeroFilters } from "@/sections/home/hero/filters";

export function Hero() {
  return (
    <section className="relative flex h-[calc(100vh-80px)] w-full flex-col items-center overflow-hidden">
      <div className="relative flex w-full flex-1">
        <BackgroundImage />
        <div className="z-20 flex h-full w-full flex-1 flex-col items-center justify-center gap-12">
          <HeroFilters />
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
