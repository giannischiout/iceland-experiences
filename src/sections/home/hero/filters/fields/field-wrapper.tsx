import { cn } from "@/lib/utils";
import type { RefObject } from "react";

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
  const labelStyle = isPrimary ? "text-primary font-semibold" : "text-gray-500";
  return (
    <div
      ref={anchorRef}
      onClick={onToggle}
      className={cn(
        "relative flex cursor-pointer flex-col gap-0.5 opacity-100",
        isDatePickerOpen && "opacity-15",
      )}
    >
      <span className={cn("text-md", labelStyle)}>{label}</span>
      <div className="max-w-[160px] truncate overflow-hidden font-medium whitespace-nowrap">
        {value}
      </div>
    </div>
  );
};
