import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  kicker?: string;
  alignment?: "left" | "center";
  children?: ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  kicker,
  alignment = "left",
  children,
  className,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("section", className)}>
      <div className="container space-y-6">
        <div className={cn("section-content", alignment === "center" && "text-center")}>
          {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
          <h2 className="section-title">{title}</h2>
          {description ? <p className="section-description">{description}</p> : null}
          {kicker ? <p className="section-kicker">{kicker}</p> : null}
        </div>
        {children ? <div className="section-body">{children}</div> : null}
      </div>
    </section>
  );
}

