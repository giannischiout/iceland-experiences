import { cn } from "@/lib/utils";
import type { timeOptions } from "@/_mockup";

type Option = (typeof timeOptions)[number];
type Props = {
  options: Option[];
  onChange: (option: Option) => void;
  value: string;
};

export function TimeContent({ options, onChange, value }: Props) {
  return (
    <div className="min-w-[200px]">
      {options.map((option, index) => {
        const isActive = option.value === value;
        return (
          <div
            key={option.value}
            onDragStart={(e) => e.preventDefault()}
            onClick={() => onChange(option)}
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
    </div>
  );
}
