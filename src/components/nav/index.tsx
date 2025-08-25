"use client";
import { Languages } from "@/components/languages";
import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/use-click-outside";
import { NavMenu } from "@/components/nav/menu";
import type { ActiveState } from "@/components/nav/types";
import { navData } from "@/routes";
import { Logo } from "@/components/logo";
import type { MainMenu } from "@/payload-types";
import { Profile } from "@/components/nav/profile";

type Props = {
  data: MainMenu;
};
export function Navbar({ data }: Props) {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<ActiveState>(null);

  const handleOnClose = () => {
    setActive(null);
  };

  const handleOpen = (id: string) => {
    setActive((prev) => (prev === id ? null : id));
  };
  const ref = useClickOutside<HTMLDivElement>(
    handleOnClose,
    anchorRef,
    !!active,
  ); // handler, ref, isOpen

  return (
    <div className="m-auto flex w-[98%] flex-col items-center bg-white">
      <nav
        style={{ zIndex: 9999 }}
        className="relative grid w-full grid-cols-[200px_1fr_200px] justify-center p-4 text-lg font-medium"
      >
        <Logo />
        <NavMenu
          navData={navData}
          setActive={setActive}
          anchorRef={anchorRef}
          onOpen={handleOpen}
        />
        <div className="flex-end flex items-center justify-end gap-2">
          <Languages />
          <Profile />
        </div>
      </nav>
      {/*<MegaMenu data={data} open={!!active} ref={ref} active={active} />*/}
    </div>
  );
}
