import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

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

export const FilterRow = ({
  children,
  isDatePickerOpen,
}: {
  children: ReactNode;
  isDatePickerOpen: boolean;
}) => (
  <div
    className={cn(
      "relative z-10 flex translate-y-0 items-center gap-6 rounded-2xl bg-white p-6 opacity-100 shadow-lg transition-transform duration-200 ease-in-out",
      isDatePickerOpen && "-translate-y-[180%] delay-300",
    )}
  >
    {children}
  </div>
);
