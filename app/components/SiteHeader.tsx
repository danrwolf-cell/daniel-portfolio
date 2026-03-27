import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/experiments", label: "Experiments" },
  { href: "/contact", label: "Get in touch" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-8 px-5 py-5 md:px-10">
        <Link
          href="/"
          className="font-display text-[15px] font-medium tracking-[0.02em] text-foreground transition-opacity hover:opacity-70"
          aria-label={`${site.name} home`}
        >
          {site.mark}
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-8 gap-y-2 text-[11px] font-medium uppercase tracking-[0.28em] text-muted">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
