import { cn } from "@/lib/utils";
import type { RefObject } from "react";

export const FieldWrapper = ({
  label,
  isPrimary = false,
  onToggle,
  anchorRef,
  value,
}: {
  label: string;
  isPrimary?: boolean;
  onToggle: () => void;
  value: string;
  anchorRef: RefObject<HTMLDivElement | null>;
}) => {
  const labelStyle = isPrimary ? "text-primary font-semibold" : "text-gray-500";
  return (
    <div
      ref={anchorRef}
      onClick={onToggle}
      className="relative flex cursor-pointer flex-col gap-0.5"
    >
      <span className={cn("text-md", labelStyle)}>{label}</span>
      <div className="text-md max-w-[160px] truncate overflow-hidden font-medium whitespace-nowrap">
        {value}
      </div>
    </div>
  );
};
