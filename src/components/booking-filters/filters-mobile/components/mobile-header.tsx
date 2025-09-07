import { X } from "lucide-react";
import { useFilterStore } from "@/store/use-filters-store";

type Props = {
  label?: string;
  onClick: () => void;
};
export function MobileHeader({
  label = "Select your travel dates and location",
  onClick,
}: Props) {
  const { setCurrentScreen } = useFilterStore();
  return (
    <div className="flex h-12 items-center justify-between border-b p-4 italic">
      <span>{label}</span>
      <button
        onClick={onClick}
        className="flex h-8 w-8 items-center justify-center rounded hover:bg-gray-100"
      >
        <X />
      </button>
    </div>
  );
}
