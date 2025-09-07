import { PortalDialog } from "@/components/booking-filters/filters-mobile/components/portal-dialog";
import { MobileHeader } from "@/components/booking-filters/filters-mobile/components/mobile-header";
import { MobileFieldWrapper } from "@/components/booking-filters/filters-mobile/components/field-wrapper";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";
import type { PopoverKey } from "@/store/use-filters-store";
import { useFilterStore } from "@/store/use-filters-store";
import dayjs from "dayjs";

// Recreate your Row component if needed
const Row = ({ children }: { children: ReactNode }) => {
  return <div className="flex w-full gap-2 self-start p-6">{children}</div>;
};

export function FiltersScreen() {
  const {
    setCurrentScreen,
    currentScreen,
    setField,
    pickup,
    dropoff,
    dropoffTime,
    pickupTime,
    range,
    onOpen,
  } = useFilterStore();

  const handleChange = (key: PopoverKey) => {
    setCurrentScreen("summary");
    onOpen(key);
  };
  console.log({ pickup });

  return (
    <PortalDialog isOpen={currentScreen === "filters"}>
      {/* header */}
      <MobileHeader
        label="Select your travel dates and location"
        onClick={() => setCurrentScreen("callToAction")}
      />
      {/* content (fills everything between header + footer) */}
      <div className="flex flex-1 flex-col">
        <Row>
          <MobileFieldWrapper
            onClick={() => handleChange("pickup")}
            label="Pickup"
            value={pickup?.label ?? ""}
          />
          <MobileFieldWrapper
            onClick={() => handleChange("dateRange")}
            label="DateRange"
            value={dayjs(range?.from ?? "").format("MMM D")}
          />
          <MobileFieldWrapper
            onClick={() => handleChange("pickupTime")}
            label="Time"
            value={pickupTime.value}
          />
        </Row>

        <Separator className="bg-gray-200" />
        <Row>
          <MobileFieldWrapper onClick={() => {}} label="Return Pickup" />
        </Row>
      </div>

      <div className="p-4">
        <Button className="w-full">Submit</Button>
      </div>
    </PortalDialog>
  );
}
