import Link from "next/link";
import { CopyEmailButton } from "@/app/components/CopyEmailButton";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-foreground md:text-4xl lg:text-[2.75rem]">
              Get in touch
            </h2>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <a
                href={`mailto:${site.email}`}
                className="font-display text-lg font-medium tracking-tight text-foreground underline decoration-border underline-offset-[6px] transition-colors hover:decoration-foreground"
              >
                {site.email}
              </a>
              <CopyEmailButton email={site.email} />
            </div>
          </div>
          <div className="flex flex-col gap-6 text-sm text-muted lg:items-end lg:text-right">
            <div className="flex flex-wrap gap-x-6 gap-y-2 uppercase tracking-[0.2em]">
              <Link href="/work" className="hover:text-foreground">
                Work
              </Link>
              <Link href="/experiments" className="hover:text-foreground">
                Experiments
              </Link>
              <Link href="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-6 text-xs uppercase tracking-[0.18em] text-muted md:flex-row md:items-center md:justify-between md:px-10">
          <span>© {new Date().getFullYear()} {site.name}</span>
        </div>
      </div>
    </footer>
  );
}
