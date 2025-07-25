import { FieldWrapper } from "@/app/sections/home/filters/field-wrapper";
import type { RefObject } from "react";

type Props = {
  anchorRef: RefObject<HTMLDivElement | null>;
  onClick: () => void;
  value: string;
};

export function SelectDate({ anchorRef, onClick, value }: Props) {
  return (
    <FieldWrapper label="Date">
      <div
        ref={anchorRef}
        onClick={onClick}
        className="cursor-pointer font-medium"
      >
        {value}
      </div>
    </FieldWrapper>
  );
}
