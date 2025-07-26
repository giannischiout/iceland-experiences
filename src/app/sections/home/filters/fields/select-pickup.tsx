import { FieldWrapper } from "@/app/sections/home/filters/field-wrapper";
import { usePopover } from "@/hooks/use-popover";
import { Popover } from "@/components/popover";
import { cn } from "@/lib/utils";
import { pickupIcons } from "@/_mockup"; // assuming this exists

type Value = {
  value: string;
  label: string;
  icon: "busstop" | "airport" | "area";
};

type Props = {
  options: Value[];
  value: Value;
  onChange: (value: Value) => void;
  alignRight?: boolean;
};

export function SelectPickup({ options, value, onChange, alignRight }: Props) {
  const { anchorRef, open, onClose, onToggle } = usePopover<HTMLDivElement>();

  console.log({ open });
  const handleChange = (newValue: Value) => {
    onChange(newValue);
    onClose();
  };

  const handleToggle = () => {
    console.log("used");
    onToggle();
  };
  return (
    <>
      <FieldWrapper isPrimary label="Pickup">
        <div
          ref={anchorRef}
          onClick={handleToggle}
          className="text-md w-[160px] cursor-pointer truncate overflow-hidden font-medium whitespace-nowrap"
        >
          {value.label}
        </div>
      </FieldWrapper>
      <Popover
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
