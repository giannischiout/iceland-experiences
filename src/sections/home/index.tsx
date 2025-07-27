import { Navbar } from "@/components/nav";
import Image from "next/image";
import { Filters } from "@/sections/home/hero/filters";

export async function HomePageView() {
  return (
    <main className="min-h-screen">
      <section className="relative flex min-h-screen w-full flex-col">
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
