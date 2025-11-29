import Image from "next/image";
import Link from "next/link";

import { assetPath } from "@/lib/asset-path";

type BrandMarkProps = {
  /** sm ~60px height, md ~100px height, lg ~150px height */
  size?: "sm" | "md" | "lg";
};

// Adjusted sizes to keep header compact (max 70px height requirement)
// Aspect ratio of original image (660x564) is roughly 1.17:1
const sizeMap: Record<NonNullable<BrandMarkProps["size"]>, { w: number; h: number }> = {
  sm: { w: 70, h: 60 },   // Reduced from 80/68 to fit 70px constraint
  md: { w: 120, h: 103 }, 
  lg: { w: 180, h: 154 }, 
};

export function BrandMark({ size = "sm" }: BrandMarkProps) {
  const { w, h } = sizeMap[size];
  return (
    <Link href="/" className="group inline-block shrink-0">
      <Image
        src={assetPath("/images/logo-full.png")}
        alt="BJ Liquor Licence Consultant – Beverly Jeursen"
        width={w}
        height={h}
        priority={size !== "sm"}
        className="h-auto w-auto object-contain"
        style={{ maxHeight: h }}
      />
    </Link>
  );
}
