import { DayPicker as ReactDayPicker } from "react-day-picker";
import type { DateRange } from "react-day-picker";

type DatePickerProps = {
  selected: DateRange;
  onChange: (range: DateRange | undefined) => void;
};
export function DayPicker({ selected, onChange }: DatePickerProps) {
  return (
    <ReactDayPicker
      animate
      mode="range"
      selected={selected}
      onSelect={onChange}
      numberOfMonths={2}
      pagedNavigation={false}
    />
  );
}
