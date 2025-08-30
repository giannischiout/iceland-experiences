import { cn } from "@/lib/utils";
import type { ActiveState } from "@/components/nav/types";
import type { RefObject } from "react";
import { useEffect, useState } from "react";
import type { Navigation } from "@/payload-types";
import { OurCars } from "@/components/nav/desktop-menu/mega-menu/our-cars";
import { Roadtrips } from "@/components/nav/desktop-menu/mega-menu/roadtrips";

type Props = {
  active: ActiveState;
  containerRef: RefObject<HTMLDivElement | null>;
  data: Navigation;
};

export function MegaMenu({ active, containerRef, data }: Props) {
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (active) {
      // show items after the panel opens
      timeout = setTimeout(() => setShowItems(true), 200);
    } else {
      // hide items immediately on close
      setShowItems(false);
    }
    return () => clearTimeout(timeout);
  }, [active]);

  const renderSubItems = () => {
    switch (active) {
      case "vehicles":
        return <OurCars vehicles={data.vehicles} />;
      case "roadtrips":
        return <Roadtrips data={data.trip} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        "absolute top-[80px] left-0 w-full flex-col border-t backdrop-blur lg:flex",
        active
          ? "visible z-40 h-[calc(100vh-80px)] opacity-100"
          : "pointer-events-none invisible z-0 h-0 opacity-0",
      )}
    >
      <div ref={containerRef} className={cn("flex bg-white p-4")}>
        <div
          className={cn(
            "w-full transition-opacity duration-300 ease-in-out",
            showItems ? "opacity-100" : "opacity-0",
          )}
        >
          {renderSubItems()}
        </div>
      </div>
    </div>
  );
}
