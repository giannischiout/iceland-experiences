import { Filters } from "@/sections/home/hero/filters";
import Image from "next/image";

export async function HomePageView() {
  return (
    <section className="relative flex h-[88vh] w-full flex-col items-center overflow-hidden">
      <div className="relative flex w-full flex-1">
        <BackgroundImage />
        <Filters />
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
