import { useFilterStore } from "@/store/use-filters-store";

export function LocationsPanel() {
  const { locations } = useFilterStore();
  return (
    <ul className="flex flex-col">
      {locations.map((location) => (
        <li>{location.label}</li>
      ))}
    </ul>
  );
}
