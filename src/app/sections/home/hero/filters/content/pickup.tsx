import { cn } from "@/lib/utils";
import type { locations } from "@/_mockup";
import { pickupIcons } from "@/_mockup";

type Option = (typeof locations)[number];
type Props = {
  options: Option[];
  onChange: (option: Option) => void;
  value: string;
};

export function PickupContent({ options, onChange, value }: Props) {
  return (
    <div className="min-w-[200px]">
      {options.map((option, index) => {
        const isActive = option.value === value;
        return (
          <div
            key={option.value}
            onClick={() => onChange(option)}
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
  );
}
