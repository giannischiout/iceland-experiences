import { Calendar } from "lucide-react";
import type { RefObject } from "react";

type Props = {
  value: string;
  anchorRef: RefObject<HTMLDivElement | null>;
  onClick: () => void;
};

export function DateTrigger({ value, anchorRef, onClick }: Props) {
  return (
    <div
      ref={anchorRef}
      onClick={onClick}
      className="flex cursor-pointer items-center gap-2 font-medium"
    >
      <Calendar size={16} className="text-gray-400" />
      <span>{value}</span>
    </div>
  );
}
