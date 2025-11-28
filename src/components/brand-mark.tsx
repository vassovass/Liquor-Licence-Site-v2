import Image from "next/image";
import Link from "next/link";

import { assetPath } from "@/lib/asset-path";

type BrandMarkProps = {
  /** sm ~80px, md ~120px, lg ~180px (max crisp at 660px source) */
  size?: "sm" | "md" | "lg";
};

const sizeMap: Record<NonNullable<BrandMarkProps["size"]>, { w: number; h: number }> = {
  sm: { w: 80, h: 68 },   // Smaller for header
  md: { w: 120, h: 103 }, // Medium for general use
  lg: { w: 180, h: 154 }, // Large for footer/hero
};

export function BrandMark({ size = "sm" }: BrandMarkProps) {
  const { w, h } = sizeMap[size];
  return (
    <Link href="/" className="group inline-block">
      <Image
        src={assetPath("/images/logo-full.png")}
        alt="BJ Liquor Licence Consultant – Beverly Jeursen"
        width={w}
        height={h}
        priority={size !== "sm"}
        className="h-auto w-auto"
      />
    </Link>
  );
}

