import { Popover } from "@/components/popover";
import { cn } from "@/lib/utils";
import type { RefObject } from "react";
import { FieldWrapper } from "@/sections/home/hero/filters/fields/field-wrapper";

type Option = {
  label: string;
  value: string;
};
type Props = {
  options: Option[];
  value: Option;
  onChange: (value: Option) => void;
  alignRight?: boolean;
  onToggle: () => void;
  anchorRef: RefObject<HTMLDivElement | null>;
  onClose: () => void;
  open: boolean;
};

export function SelectTime({
  onToggle,
  onClose,
  anchorRef,
  alignRight,
  options,
  value,
  onChange,
  open,
}: Props) {
  const handleChange = (newValue: (typeof options)[number]) => {
    onChange(newValue);
    onClose();
  };

  return (
    <>
      <FieldWrapper
        onToggle={onToggle}
        isPrimary
        anchorRef={anchorRef}
        label="Time"
        value={value.label}
      />

      <Popover
        alignRight={alignRight}
        anchorRef={anchorRef}
        open={open}
        onClose={onClose}
        maxMenuHeight={280}
      >
        {options.map((option, index) => {
          const isActive = option.label === value?.label;
          return (
            <div
              key={option.value}
              onDragStart={(e) => e.preventDefault()}
              onClick={() => handleChange(option)}
              className={cn(
                "flex cursor-pointer items-center gap-2 p-2 pb-3",
                isActive ? "text-foreground font-medium" : "text-gray-500",
                index !== options.length - 1 && "border-b border-gray-200",
              )}
            >
              {option.label}
            </div>
          );
        })}
      </Popover>
    </>
  );
}
