"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Control } from "react-hook-form";

interface SelectFieldProps<T> {
  control: Control<any>; // Replace with your form type if available
  name: string;
  label?: string;
  placeholder?: string;
  items: T[];
  valueKey?: keyof T; // key for value (default: "id")
  labelKey?: keyof T; // key for label (default: "name")
  className?: string;
  labelStyle?: string;
}

export function SelectField<T>({
  control,
  name,
  label,
  placeholder = "Select an option",
  items,
  valueKey = "id" as keyof T,
  labelKey = "name" as keyof T,
  className = "w-[180px]",
  labelStyle,
}: SelectFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={labelStyle}>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className={className}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items.map((item, index) => (
                <SelectItem key={index} value={String(item[valueKey])}>
                  {String(item[labelKey])}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
