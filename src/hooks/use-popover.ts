import { useCallback, useRef, useState } from 'react'

export function usePopover<T extends HTMLElement>(initialOpen = false) {
  const anchorRef = useRef<T | null>(null)

  const [open, setOpen] = useState(initialOpen)

  const onOpen = useCallback(() => setOpen(true), [])
  const onClose = useCallback(() => setOpen(false), [])
  const onToggle = useCallback(() => setOpen(o => !o), [])

  return {
    anchorRef,
    open,
    onOpen,
    onClose,
    onToggle,
  }
}