import { Filters } from "@/sections/home/hero/filters";
import Image from "next/image";

export async function HomePageView() {
  return (
    <section className="relative flex h-[88vh] w-full flex-col items-center overflow-hidden">
      <div className="relative flex w-[90%] flex-1">
        <div className="absolute z-1 h-full w-full bg-black/20" />
        <Image
          alt="background image"
          fill
          src="/assets/background2.jpg"
          className="rounded-md object-cover object-bottom saturate-50"
        />
        <Filters />
      </div>
      <div className="flex h-[12vh] items-center justify-center bg-red-100">
        <span>test</span>
      </div>
    </section>
  );
}
