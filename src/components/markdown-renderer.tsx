import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { assetPath } from "@/lib/asset-path";
import { cn } from "@/lib/utils";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Pre-process content to handle the specific [Link: url] syntax
  // We replace it with a standard markdown link syntax if it follows a heading, or generic link if standalone.
  // However, since we want to link the *heading*, we need to parse this carefully or use a custom renderer approach.
  // A simpler approach for "Link syntax" like [Link: /url] is to make it invisible but pass the URL to the previous heading?
  // That's hard in streaming markdown. 
  // Instead, let's handle the specific "Event vs Temporary vs Permanent" section by styling 
  // the H3s followed by lists into a grid card layout.

  return (
    <article className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:text-brand-cream prose-a:text-brand-sand prose-strong:text-brand-cream prose-li:marker:text-brand-sand
    grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6 items-start 
    [&>p]:col-span-full md:[&>p]:col-span-8 
    [&>p:first-of-type]:col-span-full [&>p:first-of-type]:text-xl [&>p:first-of-type]:text-brand-cream/90 
    [&>h2]:col-span-full 
    [&>h3]:col-span-full 
    [&>ul]:col-span-full md:[&>ul]:col-span-8
    [&>div]:col-span-full">
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
             return <h3 className="text-xl font-medium mt-8 mb-4 text-brand-sand uppercase tracking-widest text-sm" {...props}>{children}</h3>
          },
          p: ({ node, children, ...props }) => {
             // Check if this paragraph is just a link annotation like [Link: /url]
             if (typeof children === 'string' && children.startsWith('[Link:')) {
                 return null; // Hide these raw annotations
             }
             return <p className="leading-relaxed text-brand-cream/80 mb-6" {...props}>{children}</p>
          },
          ul: ({ node, children, ...props }) => {
             return (
                <div className="bg-brand-graphite/30 rounded-2xl p-6 border border-white/5 my-4 hover:border-brand-sand/30 transition-colors">
                    <ul className="space-y-3 list-none pl-0 m-0" {...props}>
                        {children}
                    </ul>
                </div>
             )
          },
          li: ({ node, ...props }) => <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-brand-sand text-base" {...props} />,
          img: ({ node, src, alt, ...props }) => {
             if (!src) return null;
             return (
                 <div className="col-span-full my-12 overflow-hidden rounded-3xl border border-white/10 bg-brand-charcoal relative aspect-video md:aspect-[21/9]">
                    <img 
                        src={assetPath(src)} 
                        alt={alt || ""} 
                        className="w-full h-full object-cover"
                        {...props} 
                    />
                 </div>
             )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
