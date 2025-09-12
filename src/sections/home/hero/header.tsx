import { cn } from "@/lib/utils";

export const HeaderSection = ({ hidden }: { hidden: boolean }) => (
  <div
    className={cn(
      "text-background z-10 flex flex-col gap-2 text-center transition-all duration-400 ease-in-out",
      hidden && "opacity-0",
    )}
  >
    <h1 className="text-6xl font-bold">Gear up. Go Anywhere</h1>
    <h1 className="text-3xl font-light">Your expedition our wheels</h1>
  </div>
);
