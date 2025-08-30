import { useRef, useEffect, useState } from "react";
import { useClickOutside } from "@/hooks/use-click-outside";
import { cn } from "@/lib/utils";
import SimpleBar from "simplebar-react";
import { ChevronDown } from "lucide-react";
import { Hamburger } from "@/components/nav/components/burger";
import { useBoolean } from "@/hooks/use-boolean";
import { OurCars } from "@/components/nav/desktop-menu/mega-menu/our-cars";

type MobileMenu = {
  data: any;
};

export function MobileMenu({ data }: MobileMenu) {
  const { value: open, onToggle, onFalse: onClose } = useBoolean();
  const [active, setActive] = useState<string | null>(null);
  const anchorRef = useRef<HTMLDivElement>(null);
  const ref = useClickOutside<HTMLDivElement>(onClose, anchorRef, open);

  // lock body scroll on open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 4000);
      return;
    }
  }, [open]);

  const handleActive = (id: string) =>
    setActive((prev) => (prev === id ? null : id));
  return (
    <>
      <Hamburger onToggle={onToggle} open={open} />
      <div
        onDragStart={(e) => e.preventDefault()}
        aria-hidden={!open}
        ref={ref}
        style={{ zIndex: 9999 }}
        className={cn(
          "absolute top-[80px] z-40 h-[calc(100vh-80px)] w-full border-t border-gray-100 bg-white px-4 select-none lg:hidden",
          "transition-all duration-500 ease-in-out",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none h-0 opacity-0",
        )}
      >
        <SimpleBar autoHide>
          <ul
            className={cn(
              "text-md flex w-full flex-col py-2 transition-opacity delay-400 duration-300 ease-in-out",
              open
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0",
            )}
          >
            <MobileNavItem
              label="Book Now"
              onClick={() => console.log("click")}
            />

            <MobileNavItem
              hasChildren
              onClick={() => handleActive("vehicles")}
              label="Our Vehicles"
            />
            {active === "vehicles" && <OurCars vehicles={data.vehicles} />}
            <MobileNavItem
              onClick={() => handleActive("roadtrips")}
              label=" Best Roadtrips"
              hasChildren
            />
            {active === "roadtrips" && <div>vehicles</div>}
          </ul>
        </SimpleBar>
      </div>
    </>
  );
}

const MobileNavItem = ({
  label,
  onClick,
  hasChildren,
  className,
}: {
  label: string;
  onClick: () => void;
  hasChildren?: boolean;
  className?: string;
}) => {
  return (
    <li
      className={cn(
        "flex items-center gap-2 border-b border-gray-100 px-4 py-4",
        className,
      )}
      onClick={onClick}
    >
      {label}
      {hasChildren && <ChevronDown size={18} />}
    </li>
  );
};
