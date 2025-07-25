import { Navbar } from "@/components/nav";
import Image from "next/image";
import { Filters } from "@/app/sections/home/filters";

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
        <div className="z-200 mt-[6%] flex w-full flex-1 flex-col items-center gap-10">
          <Content />
          <Filters />
        </div>
      </section>
    </main>
  );
}

export const Content = () => {
  return (
    <div className="flex max-w-[700px] flex-col gap-2 text-center">
      <h1 className="text-5xl font-light">Your Local </h1>
      <h1 className="text-6xl font-bold">Card Rental in Iceland</h1>
    </div>
  );
};

export const Logo = () => {
  return (
    <span className="cfont-bold text-4xl text-white">
      Venture<span className="text-orange-500">.</span>
    </span>
  );
};
