import { cn } from "@/lib/utils";
import type { ActiveState } from "@/components/nav/types";
import type { RefObject } from "react";
import { OurCars } from "@/components/nav/mega-menu/our-cars";
import type { MainMenu } from "@/payload-types";

type Props = {
  open: boolean;
  active: ActiveState;
  ref: RefObject<HTMLDivElement | null>;
  data: MainMenu;
};

export function MegaMenu({ open, active, ref, data }: Props) {
  const renderSubItems = () => {
    switch (active) {
      case "rv-models":
        return <OurCars data={data.ourCars} />;
      default:
        return null;
    }
  };
  return (
    <div
      className={cn(
        "absolute top-[12vh] left-0 z-0 h-0 w-full flex-col border-t bg-white/50 opacity-0 backdrop-blur",
        active && "z-40 flex h-[88vh] opacity-100",
      )}
    >
      <div
        ref={ref}
        className={cn(
          "flex bg-white p-4 px-[5%] transition-all duration-400 ease-in-out",
          active ? "translate-y-0" : "pointer-events-none -translate-y-[50%]",
        )}
      >
        {renderSubItems()}
      </div>
    </div>
  );
}
