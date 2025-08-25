import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ReactElement } from "react";
import { cn } from "@/lib/utils";

interface SelectFieldProps<T> {
  value: string;
  onChange: (val: string) => void;
  label?: string;
  placeholder?: string;
  items: T[];
  valueKey?: keyof T; // key for value (default: "id" or "value")
  labelKey?: keyof T; // key for label (default: "name" or "label")
  className?: string;
  labelStyle?: string;
  icon?: ReactElement;
}

export function SelectField<T>({
  value,
  onChange,
  label,
  placeholder = "Select an option",
  items,
  valueKey = "value" as keyof T,
  labelKey = "label" as keyof T,
  className = "w-[180px]",
  labelStyle,
  icon,
}: SelectFieldProps<T>) {
  return (
    <div className="flex flex-col gap-2 bg-white text-sm">
      {label && (
        <label className={cn("flex items-center gap-1", labelStyle)}>
          {icon ? icon : null}
          {label}
        </label>
      )}
      <Select onValueChange={onChange} value={value}>
        <SelectTrigger className={className}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item, index) => (
            <SelectItem key={index} value={String(item[valueKey])}>
              {String(item[labelKey])}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
