import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

export const MobileFieldWrapper = ({
  label = "Label",
  isPrimary = false,
  onClick,
  value = "placeholder value",
  className,
}: {
  label: string;
  isPrimary?: boolean;
  onClick: () => void;
  value: string;
  className?: string;
}) => {
  const labelStyle = isPrimary ? "text-primary font-medium" : "text-gray-500";
  return (
    <div
      className={cn("flex flex-1 cursor-pointer flex-col gap-0.5 opacity-100")}
    >
      <span className={cn("text-sm", labelStyle)}>{label}</span>
      <div
        onClick={onClick}
        className={cn(
          "bg-primary/5 flex h-[50px] items-center gap-2 rounded-md px-2 whitespace-nowrap",
          className,
        )}
      >
        <MapPin size={20} className="text-primary" />
        <span className="max-w-[150px] truncate overflow-hidden">{value}</span>
      </div>
    </div>
  );
};
