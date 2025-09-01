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
  top?: string;
};

export function Popover({
  children,
  onClose,
  open,
  anchorRef,
  maxMenuHeight = 300,
  alignRight = false,
  top = "120%", // 👈 default
  className,
}: Props) {
  const ref = useClickOutside<HTMLDivElement>(onClose, anchorRef, open);

  // note that width and left should be the same value.
  return (
    <div
      onDragStart={(e) => e.preventDefault()}
      aria-hidden={!open}
      ref={ref}
      style={{
        left: alignRight ? "400px" : 0,
        top,
      }}
      className={cn(
        "absolute left-0 z-40 min-w-[400px] overflow-hidden rounded-md bg-white p-2 shadow-lg select-none",
        "transition-all duration-300 ease-in-out",
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
        className,
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
