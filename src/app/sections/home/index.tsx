import { Navbar } from "@/components/nav";
import Image from "next/image";
import { Filters } from "@/app/sections/home/hero/filters";

export async function HomePageView() {
  return (
    <main className="min-h-screen">
      <section className="o relative flex min-h-screen w-full flex-col">
        <Navbar />
        <div className="absolute inset-0 z-1 bg-white/0" />
        <Image
          alt="background image"
          fill
          sizes="100vh"
          src="/assets/2.png"
          className="object-cover"
        />
        <Filters />
      </section>
    </main>
  );
}

export const Logo = () => {
  return (
    <span className="cfont-bold text-4xl text-white">
      Venture<span className="text-orange-500">.</span>
    </span>
  );
};
