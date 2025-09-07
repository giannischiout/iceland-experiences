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
  className,
}: {
  label: string;
  isPrimary?: boolean;
  onToggle: () => void;
  value: string;
  className?: string;

  isDatePickerOpen?: boolean;
  anchorRef?: RefObject<HTMLDivElement | null>;
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
      <div
        className={cn(
          "bg-primary/5 flex h-[40px] items-center gap-2 rounded-md px-2 whitespace-nowrap",
          className,
        )}
      >
        <MapPin size={20} className="text-primary" />
        <span className="max-w-[110px] truncate overflow-hidden text-sm">
          {value}
        </span>
      </div>
    </div>
  );
};
