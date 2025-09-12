import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav-data";
import { useClickOutside } from "@/hooks/use-click-outside";
import type { Navigation } from "@/payload-types";
import { MegaMenu } from "@/components/nav/desktop-menu/mega-menu";
import { ChevronDown } from "lucide-react";
import { POPOVERS, useFilterStore } from "@/store/use-filters-store";

type Props = {
  data: Navigation;
};
export function DesktopMenu({ data }: Props) {
  //
  const { onToggle } = useFilterStore();
  //
  const [active, setActive] = useState<string | null>(null);
  const anchorRef = useRef<HTMLUListElement>(null);

  const onClose = () => setActive(null);
  const popupRef = useClickOutside<HTMLDivElement>(
    onClose,
    anchorRef,
    !!active,
  );

  const handleActive = (id: string) => setActive((prev) => (prev ? null : id));
  const clearActive = () => {
    setTimeout(() => {
      setActive(null);
    }, 25);
  };

  const onBookNow = () => {
    onToggle(POPOVERS.dateRange);
  };
  return (
    <div>
      <ul
        style={{ zIndex: 200 }}
        ref={anchorRef}
        className="flex flex-1 items-center justify-center gap-2"
      >
        <NavItem label="Book Now" onClick={onBookNow} />
        <NavItem
          label="Our Vehicles"
          onMouseOver={() => handleActive("vehicles")}
          onMouseLeave={clearActive}
          hasChildren
        />
        <NavItem
          label=" Best Roadtrips"
          hasChildren
          onMouseOver={() => handleActive("roadtrips")}
          onMouseLeave={clearActive}
        />
      </ul>
      <MegaMenu active={active} containerRef={popupRef} data={data} />
    </div>
  );
}

const NavItem = ({
  label,
  onClick = () => {},
  hasChildren = false,
  onMouseOver,
  onMouseLeave,
}: {
  label: string;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
  hasChildren?: boolean;
  onClick?: () => void;
}) => {
  return (
    <li
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={cn(
        "transition-color hover:bg-primary/10 hidden cursor-pointer items-center gap-1 rounded-full px-4 py-1 text-[1rem] text-nowrap text-gray-500 duration-500 ease-in-out lg:flex",
      )}
    >
      {label}
      {hasChildren && <ChevronDown size={18} />}
    </li>
  );
};
