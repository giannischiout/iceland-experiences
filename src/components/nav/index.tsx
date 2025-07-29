"use client";
import { Languages } from "@/components/languages";
import { useState } from "react";
import { usePopover } from "@/hooks/use-popover";
import { useClickOutside } from "@/hooks/use-click-outside";
import { NavMenu } from "@/components/nav/menu";
import type { ActiveState } from "@/components/nav/types";
import { navData } from "@/routes";
import { Logo } from "@/components/logo";
import { MegaMenu } from "@/components/nav/mega-menu";
import type { MainMenu } from "@/payload-types";

type Props = {
  data: MainMenu;
};
export function Navbar({ data }: Props) {
  console.log({ data });
  const { onClose, open, onToggle, anchorRef } = usePopover();
  const [active, setActive] = useState<ActiveState>(null);

  const handleOnClose = () => {
    onClose();
    setActive(null);
  };
  const ref = useClickOutside<HTMLDivElement>(handleOnClose, anchorRef);

  return (
    <>
      <nav
        style={{ zIndex: 9999 }}
        className="relative m-auto grid h-[12vh] w-[90%] grid-cols-[200px_1fr_200px] items-center gap-6 text-lg font-medium"
      >
        <Logo />
        <NavMenu
          navData={navData}
          setActive={setActive}
          anchorRef={anchorRef}
          onToggle={onToggle}
        />
        <Languages />
      </nav>
      <MegaMenu data={data} open={open} ref={ref} active={active} />
    </>
  );
}
