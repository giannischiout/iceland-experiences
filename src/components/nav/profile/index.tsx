import { User } from "lucide-react";

export function Profile() {
  return (
    <div className="z-20 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-100 px-2 py-1 text-xs">
      <User width={20} className="text-accent" />
    </div>
  );
}
