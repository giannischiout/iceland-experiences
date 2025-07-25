import { FieldWrapper } from "@/app/sections/home/filters/field-wrapper";
import { Popover } from "@/components/popover";
import { usePopover } from "@/components/popover/usePopover";
import { cn } from "@/lib/utils";

type Option = {
  label: string;
  value: string;
};
type Props = {
  options: Option[];
  value: Option;
  onChange: (value: Option) => void;
  alignRight?: boolean;
};

export function SelectTime({ alignRight, options, value, onChange }: Props) {
  const { anchorRef, open, onClose, onToggle } = usePopover<HTMLDivElement>();

  const handleChange = (newValue: (typeof options)[number]) => {
    onChange(newValue);
    onClose();
  };
  return (
    <>
      <FieldWrapper label="Time">
        <div
          ref={anchorRef}
          onClick={onToggle}
          className="cursor-pointer font-medium"
        >
          {value.label}
        </div>
      </FieldWrapper>
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
