import Image from "next/image";
import Link from "next/link";

import { assetPath } from "@/lib/asset-path";

type BrandMarkProps = {
  /** sm ~60px height, md ~100px height, lg ~150px height */
  size?: "sm" | "md" | "lg";
};

// Adjusted sizes to keep header compact (max 70px height requirement)
// New BAJ lockup is square, so widths match heights
const sizeMap: Record<NonNullable<BrandMarkProps["size"]>, { w: number; h: number }> = {
  sm: { w: 64, h: 64 },
  md: { w: 110, h: 110 },
  lg: { w: 160, h: 160 },
};

export function BrandMark({ size = "sm" }: BrandMarkProps) {
  const { w, h } = sizeMap[size];
  return (
    <Link href="/" className="group inline-block shrink-0">
      <Image
        src={assetPath("/images/BAJ Logo.png")}
        alt="BAJ Liquor Licence Consultants – Beverly Anne Jeursen"
        width={w}
        height={h}
        priority={size !== "sm"}
        className="h-auto w-auto object-contain"
        style={{ maxHeight: h }}
      />
    </Link>
  );
}
