import { useFilterStore } from "@/store/use-filters-store";
import { FiltersDesktop } from "@/components/booking-filters/filters-desktop";
import { usePayloadQuery } from "@/actions/use-react-query";
import type { PickupLocation } from "@/payload-types";
import { useEffect } from "react";

export function FilterPanel({ top = "110%" }: { top: string }) {
  const { locations, onInitLocations } = useFilterStore();

  const { data } = usePayloadQuery<PickupLocation>({
    collection: "pickup-locations",
    params: { limit: 100 },
  });

  // Initialize Zustand store once locations are fetched
  useEffect(() => {
    if (data && data.length > 0 && locations.length === 0) {
      onInitLocations(data);
    }
  }, [data, locations, onInitLocations]);

  return (
    <div className="">
      <FiltersDesktop top={top} />
      {/*<FiltersMobile />*/}
    </div>
  );
}
