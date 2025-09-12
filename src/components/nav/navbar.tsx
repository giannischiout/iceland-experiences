"use client";

import { Logo } from "@/components/logo";
import { DesktopMenu } from "@/components/nav/desktop-menu";
import type { Navigation } from "@/payload-types";
import { MobileMenu } from "@/components/nav/mobile-menu";

type Props = {
  data: Navigation;
};

// ===================================================
// padding is 2% : main website container has 96% width
// ===================================================

// export function Navbar({ data }: Props) {
//   return (
//     <div
//       className="bg-background relative grid h-[100px] w-full grid-cols-[auto_1fr_auto] items-center justify-center text-lg font-medium lg:grid-cols-[200px_1fr_200px]"
//       style={{ zIndex: 200 }}
//     >
//       <Logo />
//       <DesktopMenu data={data} />
//       <MobileMenu data={data} />
//     </div>
//   );
// }

export function Navbar({ data }: Props) {
  return (
    <div
      className="bg-background relative grid h-[100px] w-full grid-cols-[auto_1fr_auto] items-center justify-center text-lg font-medium lg:grid-cols-[200px_1fr_200px]"
      style={{ zIndex: 200 }}
    >
      <Logo />
      <DesktopMenu data={data} />
      <MobileMenu data={data} />
    </div>
  );
}
