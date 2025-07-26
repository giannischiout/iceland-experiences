import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export const HeaderSection = ({ hidden }: { hidden: boolean }) => (
  <div
    className={cn(
      "flex max-w-[700px] flex-col gap-2 text-center transition-all duration-400 ease-in-out",
      hidden && "opacity-0",
    )}
  >
    <h1 className="text-4xl font-light">Your Local </h1>
    <h1 className="text-6xl font-bold">Card Rental in Iceland</h1>
  </div>
);

export const FilterRow = ({
  children,
  hidden,
}: {
  children: ReactNode;
  hidden: boolean;
}) => (
  <div
    className={cn(
      "relative top-0 flex items-center gap-6 rounded-2xl bg-white p-6 shadow-lg transition-[top] duration-300 ease-in-out",
      hidden && "-top-40 delay-250",
    )}
  >
    {children}
  </div>
);
