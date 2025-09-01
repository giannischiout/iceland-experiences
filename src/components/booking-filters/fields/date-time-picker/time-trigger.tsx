import { cn } from "@/lib/utils";
import { Popover } from "@/components/popover";
import type { RefObject } from "react";

type TimeOption = {
  label: string;
  value: string;
  // icon: keyof typeof pickupIcons;
};

type Props = {
  anchorRef: RefObject<HTMLDivElement | null>;
  value: {
    label: string;
    value: string;
  };
  options: TimeOption[];
  open: boolean;
  onClose: () => void;
  onChange: (option: TimeOption) => void;
  onToggle: () => void;
  alignRight?: boolean;
  top: string;
};

export function TimeTrigger({
  top,
  anchorRef,
  alignRight = false,
  open,
  options,
  value,
  onClose,
  onToggle,
  onChange,
}: Props) {
  const handleChange = (newValue: TimeOption) => {
    onChange(newValue);
    onClose();
  };
  return (
    <>
      <div
        ref={anchorRef}
        onClick={onToggle}
        className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
      >
        <span>{value.label}</span>
      </div>
      <Popover
        top={top}
        alignRight={alignRight}
        anchorRef={anchorRef}
        open={open}
        onClose={onClose}
        maxMenuHeight={400}
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
