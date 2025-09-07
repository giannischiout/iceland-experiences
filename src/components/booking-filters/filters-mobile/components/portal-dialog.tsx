"use client";
import { createPortal } from "react-dom";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

export function PortalDialog({ isOpen, children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent SSR mismatch

  return createPortal(
    <div
      style={{ zIndex: 99999 }}
      className={cn(
        "fixed top-0 left-0 h-[100vh] w-full items-center justify-center bg-white/60 backdrop-blur-md transition-all",
        isOpen ? "flex opacity-100" : "hidden opacity-0",
      )}
    >
      <div className="flex h-[100vh] w-full flex-col overflow-hidden bg-white shadow-lg md:h-[70vh] md:w-[70vw] md:rounded-md lg:w-[80vw]">
        {children}
      </div>
    </div>,
    document.body,
  );
}
