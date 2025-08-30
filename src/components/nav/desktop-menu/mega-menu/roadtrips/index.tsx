import type { Navigation } from "@/payload-types";

type Props = {
  data: Navigation["trip"];
};

export function Roadtrips({ data }: Props) {
  return (
    <div className="grid w-full grid-cols-[1fr_1px_1fr_1px_1fr] gap-1 p-2">
      roadtrips
    </div>
  );
}
