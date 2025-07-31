import { cn } from "@/lib/utils";
import type { RefObject } from "react";
import { MapPin } from "lucide-react";

export const FieldWrapper = ({
  label,
  isPrimary = false,
  onToggle,
  anchorRef,
  value,
  isDatePickerOpen,
}: {
  label: string;
  isPrimary?: boolean;
  onToggle: () => void;
  value: string;
  isDatePickerOpen: boolean;
  anchorRef: RefObject<HTMLDivElement | null>;
}) => {
  const labelStyle = isPrimary ? "text-primary font-medium" : "text-gray-500";
  return (
    <div
      ref={anchorRef}
      onClick={onToggle}
      className={cn(
        "relative flex cursor-pointer flex-col gap-0.5 opacity-100",
        isDatePickerOpen && "opacity-15",
      )}
    >
      <span className={cn("text-sm", labelStyle)}>{label}</span>
      <div className="bg-primary/5 flex h-[40px] max-w-[180px] items-center gap-2 rounded-md px-2 font-medium whitespace-nowrap">
        <MapPin size={30} className="text-primary" />
        <span className="max-w-[150px] truncate overflow-hidden">{value}</span>
      </div>
    </div>
  );
};
