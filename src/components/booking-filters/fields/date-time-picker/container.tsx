import type { ReactNode } from "react";

type Props = {
  label: string;
  children: ReactNode;
};

export function DateTimeTriggerWrapper({ label, children }: Props) {
  return (
    <div className="flex flex-col gap-0.5 opacity-100">
      <span className="text-sm">{label}</span>
      <div className="border-primary/20 flex h-[40px] items-center gap-4 rounded-md border px-4">
        {children}
      </div>
    </div>
  );
}
