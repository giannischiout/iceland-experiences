import { usePayloadQuery } from "@/actions/use-react-query";
import type { PickupLocation } from "@/payload-types";
import { cn } from "@/lib/utils";
import { pickupIcons } from "@/_mockup";
import type { PopoverKey } from "@/store/use-filters-store";
import { useFilterStore } from "@/store/use-filters-store";

type Props = {
  value: any;
  key: PopoverKey;
};
export const LocationsOptions = ({ value, key }: Props) => {
  const { data: options } = usePayloadQuery<PickupLocation>({
    collection: "pickup-locations",
    params: { limit: 100 },
  });
  const { setField, setCurrentScreen, pickup } = useFilterStore();

  const handleChange = (newKey: PopoverKey, option: PickupLocation) => {
    setField(newKey, option);
    setCurrentScreen("filters");
  };
  return (
    <ul className="flex flex-col gap-2">
      {options?.map((option, index) => {
        const isActive = option.id === value?.id;
        return (
          <div
            key={option.id}
            onClick={() => handleChange(key, option)}
            className={cn(
              "flex cursor-pointer items-center gap-2 p-2 pb-3",
              isActive ? "text-foreground font-semibold" : "text-gray-500",
              index !== options.length - 1 && "border-b border-gray-200",
            )}
          >
            {pickupIcons[option.icon]}
            {option.label}
          </div>
        );
      })}
    </ul>
  );
};
