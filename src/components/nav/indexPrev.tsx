"use client";
import { Languages } from "@/components/languages";
import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/use-click-outside";
import type { ActiveState } from "@/components/nav/types";
import { Logo } from "@/components/logo";
import type { Navigation } from "@/payload-types";
import { useBoolean } from "@/hooks/use-boolean";
import { NavMenu } from "@/components/nav/menu";
import { navData } from "@/routes";
import { MegaMenu } from "@/components/nav/mega-menu";
import { MobileMenu } from "@/components/nav/mobile-menu";
import { Profile } from "@/components/nav/components/profle";
import { Hamburger } from "@/components/nav/components/burger";

type Props = {
  data: Navigation;
};
export function Navbar({ data }: Props) {
  const anchorRef = useRef<HTMLDivElement>(null);
  const mobileNavAnchorRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<ActiveState>(null);
  const {
    value: openMobile,
    onTrue: onMobileOpen,
    onToggle,
    onFalse: onMobileClose,
  } = useBoolean();

  const handleOnClose = () => {
    setActive(null);
  };

  const handleOpen = (id: string) => {
    setActive((prev) => (prev === id ? null : id));
  };
  //
  const ref = useClickOutside<HTMLDivElement>(
    handleOnClose,
    anchorRef,
    !!active,
  ); // handler, ref, isOpen

  return (
    <div className="m-auto flex w-[96%] flex-col items-center">
      <nav
        style={{ zIndex: 200 }}
        className="relative grid h-[80px] w-full grid-cols-[auto_1fr_auto] items-center justify-center text-lg font-medium lg:grid-cols-[200px_1fr_200px]"
      >
        <Logo />
        <NavMenu
          className="hidden lg:flex"
          navData={navData}
          active={active}
          setActive={setActive}
          anchorRef={anchorRef}
          onOpen={handleOpen}
        />
        <div className="flex-end flex items-center justify-end gap-2">
          <Languages />
          <Profile />
          <Hamburger
            onToggle={onToggle}
            open={openMobile}
            className="block h-[40px] w-[60px] lg:hidden"
          />
        </div>
      </nav>
      {/* Mega menu and mobile menu */}
      <MegaMenu data={data} ref={ref} active={active} />
      <MobileMenu
        navData={navData}
        data={data}
        onClose={onMobileClose}
        anchorRef={mobileNavAnchorRef}
        open={openMobile}
      />
    </div>
  );
}
