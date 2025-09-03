import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export function LayoutWithBar({ children }: Props) {
  return (
    <>
      {/*<BookingFilters />*/}
      {children}
    </>
  );
}
