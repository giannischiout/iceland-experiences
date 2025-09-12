import { CallToActionScreen } from "@/components/booking-filters/filters-mobile/components/screen-call-to-actions";
import { FiltersScreen } from "@/components/booking-filters/filters-mobile/components/screen-filters";
import { SummaryScreen } from "@/components/booking-filters/filters-mobile/components/screen-summary";

export function FiltersMobile() {
  return (
    <div className="mobile-filters">
      <CallToActionScreen />
      <FiltersScreen />
      <SummaryScreen />
    </div>
  );
}
