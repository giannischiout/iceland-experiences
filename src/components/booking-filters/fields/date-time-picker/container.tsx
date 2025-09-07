import type { ReactNode } from "react";

type Props = {
  label: string;
  children: ReactNode;
};

export function DateTimeTriggerWrapper({ label, children }: Props) {
  return (
    <div className="flex flex-col gap-0.5 opacity-100">
      <span className="text-sm">{label}</span>
      <div className="bg-primary/5 flex h-[40px] items-center gap-4 rounded-md px-4">
        {children}
      </div>
    </div>
  );
}
