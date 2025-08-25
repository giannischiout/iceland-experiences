import { Popover } from "@/components/popover";
import { cn } from "@/lib/utils";
import { pickupIcons } from "@/_mockup";
import type { RefObject } from "react";
import { FieldWrapper } from "@/sections/home/hero/filters/fields/field-wrapper";

type Value = {
  value: string;
  label: string;
  icon: keyof typeof pickupIcons; // "busstop" | "airport" | "area"
};

type Props = {
  options: Value[];
  value: Value;
  onChange: (value: Value) => void;
  open: boolean;
  anchorRef: RefObject<HTMLDivElement | null>;
  onClose: () => void;
  onToggle: () => void;
  alignRight?: boolean;
  label?: string;
  isDatePickerOpen: boolean;
  top: string;
};

export function SelectPickup({
  open,
  label = "Pickup",
  top,
  anchorRef,
  onClose,
  onToggle,
  options,
  value,
  onChange,
  alignRight,
  isDatePickerOpen,
}: Props) {
  const handleChange = (newValue: Value) => {
    onChange(newValue);
    onClose();
  };

  return (
    <>
      <FieldWrapper
        isDatePickerOpen={isDatePickerOpen}
        onToggle={onToggle}
        isPrimary
        anchorRef={anchorRef}
        label={label}
        value={value.label}
      />
      <Popover
        top={top}
        alignRight={alignRight}
        anchorRef={anchorRef}
        open={open}
        onClose={onClose}
      >
        <div className="min-w-[200px]">
          {options.map((option, index) => {
            const isActive = option.value === value.value;
            return (
              <div
                key={option.value}
                onClick={() => handleChange(option)}
                className={cn(
                  "flex cursor-pointer items-center gap-2 p-2 pb-3",
                  isActive ? "text-foreground font-semibold" : "text-gray-500",
                  index !== options.length - 1 && "border-b border-gray-200",
                )}
              >
                {pickupIcons[option.icon]}
                {option.label}
              </div>
            );
          })}
        </div>
      </Popover>
    </>
  );
}
