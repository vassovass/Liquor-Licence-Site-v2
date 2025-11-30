'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

import { primaryNav } from "@/lib/routes";
import { cn } from "@/lib/utils";

import { BrandMark } from "./brand-mark";
import { CTAButton } from "./cta-button";

// Desktop Dropdown Component
function DesktopDropdown({
  item,
  isActive,
  pathname,
}: {
  item: (typeof primaryNav)[0];
  isActive: boolean;
  pathname: string | null;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        className={cn(
          "transition-colors hover:text-brand-sand",
          isActive ? "text-brand-sand" : "text-brand-cream/70"
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative z-[100]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-1 transition-colors hover:text-brand-sand",
          isActive ? "text-brand-sand" : "text-brand-cream/70"
        )}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-3 w-3 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </Link>

      {isOpen && (
        <div
          className="absolute left-0 top-full z-[9999] mt-2 w-56 rounded-xl border border-white/10 bg-[#050505] p-2 shadow-2xl isolate"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="space-y-0.5">
            {item.children?.map((child) => {
              const isChildActive = pathname === child.href;
              return (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className={cn(
                      "block rounded-lg px-3 py-2 text-sm normal-case tracking-normal transition-colors hover:bg-white/10 hover:text-brand-sand",
                      isChildActive
                        ? "text-brand-sand bg-white/5"
                        : "text-brand-cream/70"
                    )}
                  >
                    {child.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

// Mobile Menu Accordion Item
function MobileAccordion({
  item,
  pathname,
  onClose,
}: {
  item: (typeof primaryNav)[0];
  pathname: string | null;
  onClose: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className={cn(
          "block py-3 text-lg font-medium transition-colors",
          isActive ? "text-brand-sand" : "text-brand-cream"
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "flex w-full items-center justify-between py-3 text-lg font-medium transition-colors",
          isActive ? "text-brand-sand" : "text-brand-cream"
        )}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-5 w-5 transition-transform duration-200",
            isExpanded && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isExpanded ? "max-h-96 pb-3" : "max-h-0"
        )}
      >
        <ul className="space-y-1 pl-4">
          <li>
            <Link
              href={item.href}
              onClick={onClose}
              className={cn(
                "block py-2 text-base transition-colors hover:text-brand-sand",
                pathname === item.href ? "text-brand-sand" : "text-brand-cream/70"
              )}
            >
              View All {item.label}
            </Link>
          </li>
          {item.children?.map((child) => {
            const isChildActive = pathname === child.href;
            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={onClose}
                  className={cn(
                    "block py-2 text-base transition-colors hover:text-brand-sand",
                    isChildActive ? "text-brand-sand" : "text-brand-cream/70"
                  )}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

// Main Header Component
export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prevPathname = useRef(pathname);

  // Close mobile menu on route change
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      setMobileMenuOpen(false);
      prevPathname.current = pathname;
    }
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-[1000] border-b border-white/10 bg-brand-charcoal backdrop-blur-sm">
        <div className="container flex h-[70px] items-center justify-between gap-6">
          {/* Logo */}
          <BrandMark size="sm" />

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary"
            className="hidden gap-6 text-xs uppercase tracking-[0.2em] text-brand-cream lg:flex"
          >
            {primaryNav.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
              return (
                <DesktopDropdown
                  key={item.href}
                  item={item}
                  isActive={!!isActive}
                  pathname={pathname}
                />
              );
            })}
          </nav>

          {/* Desktop CTA & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <CTAButton
              href="/contact"
              variant="secondary"
              className="hidden lg:inline-flex"
            >
              Book Consultation
            </CTAButton>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-cream transition-colors hover:bg-white/10 lg:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 lg:hidden",
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-brand-charcoal shadow-2xl transition-transform duration-300 ease-out lg:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Mobile Menu Header */}
        <div className="flex h-[70px] items-center justify-between border-b border-white/10 px-6">
          <span className="text-sm uppercase tracking-[0.2em] text-brand-cream/70">
            Menu
          </span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-cream transition-colors hover:bg-white/10"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu Navigation */}
        <nav className="h-[calc(100%-70px)] overflow-y-auto px-6 py-4">
          <div className="space-y-0">
            {primaryNav.map((item) => (
              <MobileAccordion
                key={item.href}
                item={item}
                pathname={pathname}
                onClose={() => setMobileMenuOpen(false)}
              />
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 border-t border-white/10 pt-8">
            <CTAButton href="/contact" className="w-full justify-center">
              Book Consultation
            </CTAButton>
          </div>
        </nav>
      </div>
    </>
  );
}
