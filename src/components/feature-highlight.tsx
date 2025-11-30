import { cn } from "@/lib/utils";
import { CTAButton } from "./cta-button";
import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import { ImageIcon } from "lucide-react";

export interface FeatureHighlightProps {
  title: string;
  description: string;
  imageSrc?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
  align?: "left" | "right";
  ctaTrackingAction?: string;
  ctaTrackingCategory?: string;
  ctaTrackingLabel?: string;
}

export function FeatureHighlight({
  title,
  description,
  imageSrc,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  className,
  align = "left",
  ctaTrackingAction,
  ctaTrackingCategory = "feature_highlight",
  ctaTrackingLabel,
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
        {(ctaText && ctaHref) || (secondaryCtaText && secondaryCtaHref) ? (
          <div className="flex flex-col gap-3 sm:flex-row">
            {ctaText && ctaHref ? (
              <CTAButton
                href={ctaHref}
                variant="primary"
                className="bg-brand-charcoal text-brand-success border-transparent hover:bg-black/90 focus-visible:outline-black"
                trackingAction={ctaTrackingAction || "click_cta"}
                trackingCategory={ctaTrackingCategory}
                trackingLabel={ctaTrackingLabel || ctaText}
              >
                {ctaText}
              </CTAButton>
            ) : null}
            {secondaryCtaText && secondaryCtaHref ? (
              <CTAButton href={secondaryCtaHref} variant="ghost" className="text-brand-charcoal">
                {secondaryCtaText}
              </CTAButton>
            ) : null}
          </div>
        ) : null}
      </div>
      <div className="flex-1 w-full h-64 md:h-auto relative min-h-[300px] md:min-h-[400px] bg-brand-charcoal/5 flex items-center justify-center">
         {imageSrc ? (
           <Image 
             src={assetPath(imageSrc)} 
             alt="" 
             fill 
             className="object-cover" 
             sizes="(max-width: 768px) 100vw, 50vw"
           />
         ) : (
           <div className="flex flex-col items-center text-brand-charcoal/20">
             <ImageIcon className="h-16 w-16 mb-2 opacity-20" />
             <span className="font-serif text-xl font-medium opacity-40 uppercase tracking-widest">Image Placeholder</span>
           </div>
         )}
      </div>
    </div>
  );
}
