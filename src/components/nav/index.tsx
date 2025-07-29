"use client";
import { Languages } from "@/components/languages";
import Image from "next/image";
import { navData } from "@/routes";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePopover } from "@/hooks/use-popover";
import { useClickOutside } from "@/hooks/use-click-outside";

export function Navbar() {
  return (
    <nav className="z-200 m-auto grid h-[12vh] w-[90%] grid-cols-[200px_1fr_200px] items-center gap-6 text-lg font-medium">
      <Logo />
      <NavMenu />
      <Languages />
    </nav>
  );
}

export const Logo = () => {
  return (
    <Image src="/assets/rosklogo.png" width={100} height={70} alt="logo" />
  );
};

export const NavMenu = () => {
  const { onClose, open, onToggle, anchorRef } = usePopover();
  const [active, setActive] = useState<(typeof navData)[number]["id"] | null>(
    null,
  );
  const onChange = (id: string) => {
    setActive((prev) => (prev === id ? null : id));
    onToggle();
  };
  const handleOnClose = () => {
    onClose();
    setActive(null);
  };
  const ref = useClickOutside<HTMLDivElement>(handleOnClose, anchorRef);

  const renderSubItems = () => {
    switch (active) {
      case "rv-models":
        return <OurCars />;
      default:
        return null;
    }
  };
  return (
    <div className="">
      <ul ref={anchorRef} className="flex flex-1 justify-center gap-6">
        {navData.map((item) => (
          <li
            onClick={() => onChange(item.id)}
            key={item.id}
            className="nav_item text-[1rem] text-gray-500"
          >
            {item.label}
          </li>
        ))}
      </ul>
      <div
        className={cn(
          "absolute top-[12vh] left-0 z-40 flex h-[88vh] w-full flex-col border-t bg-white/50 opacity-0 backdrop-blur",
          open && "opacity-100",
        )}
      >
        <div
          ref={ref}
          className={cn(
            "flex h-[40%] bg-white p-4 px-[5%] transition-all duration-1000 ease-in-out",
            open ? "translate-y-0" : "pointer-events-none -translate-y-[50%]",
          )}
        >
          a{/*{renderSubItems()}*/}
        </div>
      </div>
    </div>
  );
};

function OurCars() {
  return (
    <div className="grid w-full grid-cols-4 gap-1">
      <div className="flex flex-col justify-center gap-8 border-r p-2">
        <div className="flex flex-col">
          <span className="text-3xl font-medium">Our</span>
          <span className="text-4xl font-bold">Rental Cars</span>
        </div>
        <div className="flex gap-3">
          <Button>View all</Button>
          <Button variant="outline">Rent a camper</Button>
        </div>
      </div>
      <div className="-center flex flex-col border-r p-2">a</div>
      <div className="flex flex-col items-center border-r p-2">b</div>
    </div>
  );
}
