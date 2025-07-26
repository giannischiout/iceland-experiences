import type { RefObject } from "react";
import { FieldWrapper } from "@/app/sections/home/hero/filters/fields/field-wrapper";

type Props = {
  anchorRef: RefObject<HTMLDivElement | null>;
  onToggle: () => void;
  value: string;
};

export function SelectDate({ anchorRef, onToggle, value }: Props) {
  return (
    <FieldWrapper
      onToggle={onToggle}
      anchorRef={anchorRef}
      label="Date"
      value={value}
    />
  );
}
