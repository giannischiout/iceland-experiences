import type { RefObject } from 'react'
import { useEffect, useRef } from 'react'


type HandlerType = () => void


export function useClickOutside<T extends HTMLElement>(
  handler: HandlerType,
  anchorRef: RefObject<HTMLElement | null>

): RefObject<T | null> {
  const ref = useRef<T>(null)
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const dropdownEl = ref.current
      const anchorEl = anchorRef?.current
      const target = event.target as Node

      if (
        (dropdownEl && dropdownEl.contains(target)) ||
        (anchorEl && anchorEl.contains(target))
      ) {
        return
      }
      handler()
    }
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener); // For mobile support
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler])
  return ref
}