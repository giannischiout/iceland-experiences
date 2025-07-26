import type { ReactNode, RefObject } from "react";
import { cn } from "@/lib/utils";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { useClickOutside } from "@/hooks/use-click-outside";

type Props = {
  children: ReactNode;
  onClose: () => void;
  open: boolean;
  anchorRef: RefObject<HTMLDivElement | null>;
  maxMenuHeight?: number;
  className?: string;
  alignRight?: boolean;
};

export function Popover({
  children,
  onClose,
  open,
  anchorRef,
  maxMenuHeight = 300,
  alignRight = false,
  className,
}: Props) {
  const ref = useClickOutside<HTMLDivElement>(onClose, anchorRef);
  console.log({ open });
  return (
    <div
      onDragStart={(e) => e.preventDefault()}
      aria-hidden={!open}
      ref={ref}
      className={cn(
        "absolute top-[108%] left-[400px] z-50 w-[400px] overflow-hidden rounded-md bg-white p-2 select-none",
        "transition-all duration-600 ease-in-out",
        className,

        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <SimpleBar
        style={{
          maxHeight: maxMenuHeight,
        }}
        autoHide
      >
        <div className="flex flex-col gap-1 pb-2">{children}</div>
      </SimpleBar>
    </div>
  );
}
