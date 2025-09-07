import { useEffect, useState } from "react";

export const useResponsive = (breakpoint: number) => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width,
    isUp: width >= breakpoint,
    isSmaller: width <= breakpoint,
  };
};
