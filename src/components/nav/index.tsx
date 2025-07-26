import { Languages } from "@/components/languages";
import { navData } from "@/routes";
import { Logo } from "@/sections/home";

export function Navbar() {
  return (
    <nav className="blur-10 sticky top-0 left-0 z-10 grid h-[80px] grid-cols-[auto_1fr_auto] items-center gap-6 p-2 px-4 text-lg font-medium">
      <Logo />
      <ul className="flex flex-1 justify-end gap-6">
        {navData.map((item) => (
          <li key={item.id} className="nav_item">
            {item.label}
          </li>
        ))}
      </ul>
      <Languages />
    </nav>
  );
}
