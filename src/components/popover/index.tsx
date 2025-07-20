import type { ReactNode, RefObject } from 'react'
import { useClickOutside } from '@/hooks/use-click-outside'
import { cn } from '@/lib/utils'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

type Props = {
  children: ReactNode;
  onClose: () => void;
  open: boolean;
  anchorRef: RefObject<any>;
  maxMenuHeight?: number;
};

export function Popover(
  {
    children,
    onClose,
    open,
    anchorRef,
    maxMenuHeight = 300,
  }: Props) {
  const ref = useClickOutside<HTMLDivElement>(onClose, anchorRef)

  return (
    <div
      onDragStart={(e) => e.preventDefault()}
      aria-hidden={!open}
      ref={ref}
      className={cn(
        'fade_scroll select-none shadow-3 absolute left-0 top-[110%] bg-white p-2 rounded-md overflow-hidden ' +
        'transition-opacity duration-200 ease-in-out z-50',
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
      )}
    >
      <SimpleBar
        style={{
          width: '100%',
          maxHeight: maxMenuHeight,
          minWidth: 290,
        }}
        autoHide
      >
        <div className="flex flex-col gap-1 pb-2 ">
          {children}
        </div>
      </SimpleBar>
    </div>
  )
}
