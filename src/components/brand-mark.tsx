import Image from "next/image";
import Link from "next/link";

type BrandMarkProps = {
  /** Render smaller version without stacked text (already in logo) */
  compact?: boolean;
  /** sm ~100px, md ~180px, lg ~220px (max crisp at 660px source) */
  size?: "sm" | "md" | "lg";
};

const sizeMap: Record<NonNullable<BrandMarkProps["size"]>, { w: number; h: number }> = {
  sm: { w: 100, h: 86 },
  md: { w: 180, h: 154 },
  lg: { w: 220, h: 188 },
};

export function BrandMark({ compact = false, size = "md" }: BrandMarkProps) {
  const { w, h } = sizeMap[size];
  return (
    <Link href="/" className="group inline-block">
      <Image
        src="/images/logo-full.png"
        alt="BJ Liquor Licence Consultant – Beverly Jeursen"
        width={w}
        height={h}
        priority={size !== "sm"}
        className="h-auto w-auto"
      />
    </Link>
  );
}

