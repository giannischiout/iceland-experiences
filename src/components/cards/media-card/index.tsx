import Image from "next/image";
import clsx from "clsx";
import type { Media } from "@/payload-types";

interface MediaCardProps {
  image: Media;
  title: string;
  subtitle?: string;
  className?: string;
  onClick?: () => void;
}

export function MediaCard({
  image,
  title,
  subtitle,
  className,
  onClick,
}: MediaCardProps) {
  return (
    <div
      className={clsx(
        "flex cursor-pointer items-center gap-3 text-gray-500",
        className,
      )}
      onClick={onClick}
    >
      <div className="relative h-[70px] w-[90px] overflow-hidden rounded-md">
        <Image
          src={image.url as string}
          alt={image.alt || title}
          fill
          sizes="100px"
          className="rounded-md object-cover"
        />
      </div>

      <div className="flex flex-col">
        <span className="text-[16px] font-bold">{title}</span>
        {subtitle && (
          <span
            className={clsx(
              "text-muted-foreground max-w-[200px] overflow-hidden text-[14px]",
              `line-clamp-2`,
            )}
          >
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}
