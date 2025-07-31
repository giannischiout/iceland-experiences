import type { RefObject } from "react";

type Props = {
  anchorRef: RefObject<HTMLDivElement | null>;
  onToggle: () => void;
  value: string;
};

export function SelectDate({ anchorRef, onToggle, value }: Props) {
  return (
    <div
      ref={anchorRef}
      onClick={onToggle}
      className="relative z-200 flex w-[60px] cursor-pointer flex-col gap-0.5"
    >
      <span className="text-md text-gray-500">Date</span>
      <div className="text-md max-w-[160px] min-w-[120px] truncate overflow-hidden rounded-md bg-gray-100 p-2 font-medium whitespace-nowrap">
        {value}
      </div>
    </div>
  );
}
