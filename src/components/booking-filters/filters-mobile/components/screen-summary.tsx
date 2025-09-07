import { PortalDialog } from "@/components/booking-filters/filters-mobile/components/portal-dialog";
import { type PopoverKey, useFilterStore } from "@/store/use-filters-store";
import { MobileHeader } from "@/components/booking-filters/filters-mobile/components/mobile-header";
import { pickupIcons, timeOptions } from "@/_mockup";
import { usePayloadQuery } from "@/actions/use-react-query";
import type { PickupLocation } from "@/payload-types";
import SimpleBar from "simplebar-react";
import { ListOptions } from "@/components/booking-filters/list-options";
import { DayPicker } from "react-day-picker";

export function SummaryScreen() {
  const { data: locationOptions } = usePayloadQuery<PickupLocation>({
    collection: "pickup-locations",
    params: { limit: 100 },
  });
  const {
    setField,
    setCurrentScreen,
    currentScreen,
    pickup,
    pickupTime,
    openPopover,
    onClose,
  } = useFilterStore();

  const handleChange = (newKey: PopoverKey, option: any) => {
    setField(newKey, option);
    setCurrentScreen("filters");
    onClose(newKey);
  };
  const renderOptions = () => {
    switch (openPopover) {
      case "pickup":
        return (
          <ListOptions
            activeValue={pickup?.id}
            options={
              locationOptions?.map((option) => ({
                ...option,
                value: option.id,
                label: option.label,
                icon: pickupIcons[option.icon],
              })) ?? []
            }
            onSelect={(opt) =>
              handleChange("pickup", {
                ...opt,
                id: opt.value,
              })
            }
          />
        );
      case "pickupTime":
        return (
          <ListOptions
            options={timeOptions}
            activeValue={pickupTime?.value}
            onSelect={(opt) => handleChange("pickupTime", opt)}
          />
        );
      case "dateRange":
        return (
          <div>
            <DayPicker numberOfMonths={1} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <PortalDialog isOpen={currentScreen === "summary"}>
      <MobileHeader
        label={`Select ${getLabel(openPopover)}`}
        onClick={() => setCurrentScreen("filters")}
      />
      <SimpleBar style={{ maxHeight: "70vh" }} autoHide={false}>
        <div className="p-2">{renderOptions()}</div>
      </SimpleBar>
    </PortalDialog>
  );
}

const getLabel = (popoverKey: PopoverKey | null) => {
  if (!popoverKey) return "";

  const label: Record<PopoverKey, string> = {
    pickup: "Pickup",
    dropoff: "Dropoff",
    pickupTime: "Pickup Time",
    dropoffTime: "Dropoff Time",
    dateRange: "Date Range",
  };
  return label[popoverKey];
};
