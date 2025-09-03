import { cn } from "@/lib/utils";

export const HeaderSection = ({ hidden }: { hidden: boolean }) => (
  <div
    className={cn(
      "z-10 flex max-w-[700px] flex-col gap-2 text-center text-amber-50 transition-all duration-400 ease-in-out",
      hidden && "opacity-0",
    )}
  >
    <h1 className="text-6xl font-bold">Gear up. Go Anywhere</h1>
    <h1 className="text-3xl font-light">Your expedition our wheels</h1>
  </div>
);
