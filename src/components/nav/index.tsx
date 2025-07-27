import { Languages } from "@/components/languages";
import { navData } from "@/routes";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="sticky top-0 left-0 z-10 grid h-[80px] grid-cols-[auto_1fr_auto] items-center gap-6 bg-white p-2 px-6 text-lg font-medium">
      <Logo />
      <ul className="flex flex-1 justify-end gap-6">
        {navData.map((item) => (
          <li key={item.id} className="nav_item text-gray-500">
            {item.label}
          </li>
        ))}
      </ul>
      <Languages />
    </nav>
  );
}

export const Logo = () => {
  return <Image src="/assets/logo.png" width={200} height={70} alt="logo" />;
};
