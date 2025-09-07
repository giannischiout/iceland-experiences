import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Option<T> = {
  value: T;
  label: string;
  icon?: ReactNode;
};

type Props<T> = {
  options: Option<T>[];
  activeValue?: T;
  onSelect: (option: Option<T>) => void;
  containerClass?: string;
};
export function ListOptions<T>({
  options,
  activeValue,
  onSelect,
  containerClass,
}: Props<T>) {
  return (
    <ul className={cn("flex flex-col gap-2", containerClass)}>
      {options.map((option, index) => {
        const isActive = option.value === activeValue;
        return (
          <div
            key={String(option.value)}
            onClick={() => onSelect(option)}
            className={cn(
              "flex cursor-pointer items-center gap-2 p-2 px-4 pb-4",
              isActive ? "text-foreground font-semibold" : "text-gray-500",
              index !== options.length - 1 && "border-b border-gray-200",
            )}
          >
            {option.icon}
            {option.label}
          </div>
        );
      })}
    </ul>
  );
}
