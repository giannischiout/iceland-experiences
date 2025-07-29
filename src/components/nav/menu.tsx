import type { Dispatch, RefObject, SetStateAction } from "react";
import type { ActiveState } from "@/components/nav/types";
import type { navData } from "@/routes";

type Props = {
  setActive: Dispatch<SetStateAction<ActiveState>>;
  onToggle: () => void;
  anchorRef: RefObject<any>;
  navData: typeof navData;
};

export const NavMenu = ({ setActive, onToggle, anchorRef, navData }: Props) => {
  const onChange = (id: string) => {
    setActive((prev) => (prev === id ? null : id));
    onToggle();
  };

  return (
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
  );
};
