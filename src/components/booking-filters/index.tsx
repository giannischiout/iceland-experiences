import { useFilterStore } from "@/store/use-filters-store";
import { FiltersDesktop } from "@/components/booking-filters/filters-desktop";
import { usePayloadQuery } from "@/actions/use-react-query";
import type { PickupLocation } from "@/payload-types";
import { useEffect } from "react";
import { FiltersMobile } from "@/components/booking-filters/filters-mobile";
import { useResponsive } from "@/hooks/use-responsive";

export function FilterPanel({ top = "110%" }: { top: string }) {
  const { locations, onInitLocations } = useFilterStore();
  const { isSmaller } = useResponsive(963);
  const { data } = usePayloadQuery<PickupLocation>({
    collection: "pickup-locations",
    params: { limit: 100 },
  });

  useEffect(() => {
    if (data && data.length > 0 && locations.length === 0) {
      onInitLocations(data);
    }
  }, [data, locations, onInitLocations]);

  return <>{isSmaller ? <FiltersMobile /> : <FiltersDesktop top={top} />}</>;
}
