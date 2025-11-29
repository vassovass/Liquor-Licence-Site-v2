import { cn } from "@/lib/utils";
import { CTAButton } from "./cta-button";
import Image from "next/image";
import { assetPath } from "@/lib/asset-path";

interface FeatureHighlightProps {
  title: string;
  description: string;
  imageSrc?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
  align?: "left" | "right";
}

export function FeatureHighlight({ 
  title, 
  description, 
  imageSrc, 
  ctaText, 
  ctaHref, 
  className,
  align = "left"
}: FeatureHighlightProps) {
  return (
    <div className={cn(
      "overflow-hidden rounded-[40px] bg-brand-success text-brand-charcoal flex flex-col md:flex-row items-center", 
      align === "right" && "md:flex-row-reverse",
      className
    )}>
      <div className="flex-1 p-12 md:p-16 space-y-6">
        <h3 className="font-serif text-3xl md:text-4xl leading-tight">{title}</h3>
        <p className="text-brand-charcoal/80 text-lg leading-relaxed max-w-md">{description}</p>
        {ctaText && ctaHref && (
          <CTAButton href={ctaHref} variant="primary" className="bg-brand-charcoal text-brand-success border-transparent hover:bg-black/90 focus-visible:outline-black">
            {ctaText}
          </CTAButton>
        )}
      </div>
      {imageSrc && (
        <div className="flex-1 w-full h-64 md:h-auto relative min-h-[300px] bg-black/10">
           {/* In a real app, use Next/Image with fill. For now, placeholder or img tag */}
           <div className="absolute inset-0 flex items-center justify-center text-brand-charcoal/20">
             {/* Placeholder if image fails */}
             <span className="font-serif text-6xl opacity-20">Feature</span>
           </div>
           {/* If you have actual images, uncomment below */}
           {/* <Image src={assetPath(imageSrc)} alt="" fill className="object-cover" /> */}
        </div>
      )}
    </div>
  );
}

