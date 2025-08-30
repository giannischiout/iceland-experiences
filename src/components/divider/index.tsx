import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};
export const Divider = ({ className }: Props) => {
  return <div className={cn("h-[85%] w-px bg-gray-200", className)} />;
};
