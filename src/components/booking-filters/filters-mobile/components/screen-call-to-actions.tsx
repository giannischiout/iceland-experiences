import { Calendar, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFilterStore } from "@/store/use-filters-store";

export function CallToActionScreen() {
  const { currentScreen, setCurrentScreen } = useFilterStore();
  return (
    <div
      onClick={() => setCurrentScreen("filters")}
      className={cn(
        "items-center justify-center gap-6",
        currentScreen === "callToAction" ? "flex" : "hidden",
      )}
    >
      <div className="flex gap-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100">
          <Calendar size={22} className="text-primary" />
        </span>
        <div className="flex flex-col text-sm">
          <p className="text-[16px] font-medium">Start your adventure</p>
          <span className="text-muted-foreground text-[13px]">
            Enter your trip details
          </span>
        </div>
      </div>
      <div className="rounded-full border border-gray-200 p-1">
        <ChevronDown className="text-gray-500" size={18} />
      </div>
    </div>
  );
}
