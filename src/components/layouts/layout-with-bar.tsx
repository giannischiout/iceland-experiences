import type { ReactNode } from "react";
import { BookingFilters } from "@/components/booking-filters";

type Props = {
  children: ReactNode;
};
export function LayoutWithBar({ children }: Props) {
  return (
    <>
      <BookingFilters />
      {children}
    </>
  );
}
