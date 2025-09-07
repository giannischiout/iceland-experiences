import { CallToActionScreen } from "@/components/booking-filters/filters-mobile/components/screen-call-to-actions";
import { useFilterStore } from "@/store/use-filters-store";
import { FiltersScreen } from "@/components/booking-filters/filters-mobile/components/screen-filters";
import { SummaryScreen } from "@/components/booking-filters/filters-mobile/components/screen-summary";

export function FiltersMobile() {
  const { currentScreen, setCurrentScreen } = useFilterStore();

  //
  return (
    <div className="block md:hidden">
      <CallToActionScreen />
      <FiltersScreen />
      <SummaryScreen />
    </div>
  );
}
