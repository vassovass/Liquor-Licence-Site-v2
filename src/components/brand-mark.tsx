import Image from "next/image";
import Link from "next/link";

type BrandMarkProps = {
  compact?: boolean;
  size?: "md" | "lg";
};

export function BrandMark({ compact = false, size = "md" }: BrandMarkProps) {
  const dimensions = size === "lg" ? 96 : 64;
  return (
    <Link href="/" className="group inline-flex items-center gap-4 text-brand-cream no-underline">
      <Image
        src="/images/logo-jb.png"
        alt="JB Liquor Licence Consultants monogram"
        width={dimensions}
        height={dimensions}
        priority={size === "lg"}
        className="h-auto w-auto"
      />
      {!compact ? (
        <div className="text-[11px] uppercase tracking-[0.4em] text-brand-sand">
          <div>Liquor Licence</div>
          <div>Consultant</div>
        </div>
      ) : null}
    </Link>
  );
}

