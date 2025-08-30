import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ViewAll({ isMobile = false }: { isMobile: boolean }) {
  return (
    <div className="flex flex-col">
      <span className={cn("text-3xl font-medium")}>Our</span>
      <span className={cn("text-4xl font-bold")}>Special Offers</span>
      <div className="mt-4">
        <Button className="w-full bg-black">View all</Button>
      </div>
    </div>
  );
}
