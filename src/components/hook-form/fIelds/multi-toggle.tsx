import { cn } from "@/lib/utils";
import type { ReactElement } from "react";

type Option = {
  label: string;
  value: string;
};

type MultiToggleProps = {
  options: Option[];
  value: string[];
  onChange: (value: string[]) => void;
  label?: string;
  labelStyle?: string;
  icon?: ReactElement;
};

export function MultiToggle({
  options,
  value,
  onChange,
  label,
  labelStyle,
  icon,
}: MultiToggleProps) {
  const isActive = (option: Option) => {
    return value.some((item) => item === option.value);
  };

  const handleToggle = (option: Option) => {
    const exists = value.some((val) => val === option.value);
    let newValue;
    if (exists) {
      newValue = value.filter((val) => val !== option.value);
    } else {
      newValue = [...value, option.value];
    }
    onChange(newValue);
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className={cn("flex items-center gap-1 text-sm", labelStyle)}>
          {icon ? icon : null} {label}
        </label>
      )}
      <div className="flex items-center gap-2">
        {options.map((option) => {
          const active = isActive(option);
          return (
            <div
              key={option.value}
              onClick={() => handleToggle(option)}
              className={cn(
                "flex min-h-9 min-w-11 cursor-pointer items-center justify-center rounded-md border border-gray-300 px-3 py-1 shadow-sm transition-colors",
                active
                  ? "border-black bg-black text-white"
                  : "bg-white text-black hover:bg-gray-100",
              )}
            >
              <span className="text-sm">{option.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
