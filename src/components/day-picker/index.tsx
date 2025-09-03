import { DayPicker as ReactDayPicker } from "react-day-picker";
import type { DateRange } from "react-day-picker";
import { useFilterStore } from "@/store/use-filters-store";

export function DayPicker() {
  const { range, setDateField, onClose } = useFilterStore();

  const onChange = (r: DateRange | undefined) => {
    if (!r) return;
    setDateField(r);
  };
  return (
    <ReactDayPicker
      animate
      mode="range"
      selected={{
        from: range.from || undefined,
        to: range.to || undefined,
      }}
      onSelect={onChange}
      numberOfMonths={2}
      pagedNavigation={false}
    />
  );
}
