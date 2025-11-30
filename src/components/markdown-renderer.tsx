import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { assetPath } from "@/lib/asset-path";
import { cn } from "@/lib/utils";
import { Callout } from "@/components/callout";
import { Checklist } from "@/components/checklist";
import { Timeline } from "@/components/timeline";
import { Accordion, AccordionItem } from "@/components/accordion";
import { ContentBox } from "@/components/content-box";
import { Grid } from "@/components/grid";
import { Layers, Check, AlertOctagon } from "lucide-react";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  
  return (
    <article className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:text-brand-cream prose-a:text-brand-sand prose-strong:text-brand-cream prose-li:marker:text-brand-sand
    grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6 items-start 
    [&>p]:col-span-full md:[&>p]:col-span-8 
    [&>p:first-of-type]:col-span-full [&>p:first-of-type]:text-xl [&>p:first-of-type]:text-brand-cream/90 
    [&>h2]:col-span-full 
    [&>h3]:col-span-full 
    [&>ul]:col-span-full md:[&>ul]:col-span-8
    [&>div]:col-span-full
    [&>blockquote]:col-span-full">
      <ReactMarkdown
        components={{
          h1: () => null,
          h2: ({ node, children, ...props }) => {
            if (typeof children === 'string' && children.match(/Heading\s*\(?H[1-6]\)?/i)) return null;
            return (
              <h2 className="text-3xl mt-16 mb-8 border-b border-white/10 pb-6 font-light" {...props}>
                {children}
              </h2>
            );
          },
          h3: ({ node, children, ...props }) => {
             if (typeof children === 'string' && children.match(/Heading\s*\(?H[1-6]\)?/i)) return null;
             
             // Auto-detect "Step X:" pattern for Timeline-like styling
             if (typeof children === 'string' && children.match(/^Step\s+\d+:/i)) {
                 const [stepPart, ...rest] = children.split(':');
                 const title = rest.join(':').trim();
                 return (
                     <div className="col-span-full flex gap-6 mt-12 mb-4 group">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-brand-charcoal text-brand-sand font-serif text-lg shadow-[0_0_0_4px_rgba(5,5,5,1)] group-hover:border-brand-sand transition-colors">
                            {stepPart.replace('Step', '').trim()}
                        </div>
                        <div className="pt-2">
                            <h3 className="text-xl font-serif text-brand-cream mb-2 group-hover:text-brand-sand transition-colors" {...props}>
                                {title}
                            </h3>
                        </div>
                     </div>
                 )
             }

             return <h3 className="text-xl font-medium mt-8 mb-4 text-brand-sand uppercase tracking-widest text-sm" {...props}>{children}</h3>
          },
          h4: ({ node, children, ...props }) => {
             if (typeof children === 'string' && children.trim().endsWith('?')) {
                 return (
                     <h4 className="col-span-full md:col-span-8 text-lg font-semibold text-brand-sand mt-8 mb-2 flex items-center gap-3" {...props}>
                        <span className="text-brand-cream/40">Q:</span> {children}
                     </h4>
                 )
             }
             return <h4 className="text-lg font-bold text-brand-cream mt-6 mb-3" {...props}>{children}</h4>
          },
          p: ({ node, children, ...props }) => {
             if (typeof children === 'string' && children.startsWith('[Link:')) {
                 return null;
             }
             
             if (typeof children === 'string' && children.startsWith('Important:')) {
                 return (
                     <div className="col-span-full md:col-span-8 my-6">
                        <Callout variant="info" title="Important">
                            {children.replace('Important:', '').trim()}
                        </Callout>
                     </div>
                 );
             }
             if (typeof children === 'string' && children.startsWith('Note:')) {
                 return (
                     <div className="col-span-full md:col-span-8 my-6">
                        <Callout variant="warning" title="Note">
                            {children.replace('Note:', '').trim()}
                        </Callout>
                     </div>
                 );
             }

             return <p className="leading-relaxed text-brand-cream/80 mb-6" {...props}>{children}</p>
          },
          ul: ({ node, children, ...props }) => {
             // Card-style list for unordered lists
             return (
                <div className="bg-brand-graphite/30 rounded-2xl p-6 border border-white/5 my-4 hover:border-brand-sand/30 transition-colors">
                    <ul className="space-y-3 list-none pl-0 m-0" {...props}>
                        {children}
                    </ul>
                </div>
             )
          },
          ol: ({ node, children, ...props }) => {
             // Ordered Lists -> 4 Column Grid Cards
             return (
                 <ol className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8 list-none p-0
                 [&>li]:bg-brand-graphite/20 [&>li]:border [&>li]:border-white/5 [&>li]:rounded-3xl [&>li]:p-6 [&>li]:h-full [&>li]:transition-all [&>li]:hover:border-brand-sand/30
                 [&>li_span.bullet-dot]:hidden
                 [&>li_strong]:block [&>li_strong]:text-xl [&>li_strong]:font-serif [&>li_strong]:text-brand-cream [&>li_strong]:mb-3
                 [&>li]:text-sm [&>li]:text-brand-cream/70" {...props}>
                    {children}
                 </ol>
             )
          },
          li: ({ node, children, ...props }) => {
              return (
                <li className="flex flex-col h-full" {...props}>
                    <div className="flex items-start gap-3 text-brand-cream/80 text-base h-full group">
                        {/* Bullet Dot - Visible in ULs, Hidden in Grid OLs via CSS */}
                        <span className="shrink-0 mt-2 h-1.5 w-1.5 rounded-full bg-brand-sand bullet-dot group-hover:bg-brand-cream transition-colors" />
                        <span className="leading-relaxed w-full">{children}</span>
                    </div>
                </li>
              )
          },
          img: ({ node, src, alt, ...props }) => {
             if (!src) return null;
             // Ensure src is a string before calling assetPath
             const srcString = typeof src === 'string' ? src : '';
             if (!srcString) return null;
             return (
                 <div className="col-span-full my-12 overflow-hidden rounded-3xl border border-white/10 bg-brand-charcoal relative aspect-video md:aspect-[21/9]">
                    <img 
                        src={assetPath(srcString)} 
                        alt={alt || ""} 
                        className="w-full h-full object-cover"
                        {...props} 
                    />
                 </div>
             )
          },
          blockquote: ({ node, children, ...props }) => {
              return (
                  <blockquote className="col-span-full border-l-4 border-brand-sand pl-6 py-2 my-8 italic text-xl text-brand-cream/90" {...props}>
                      {children}
                  </blockquote>
              )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
