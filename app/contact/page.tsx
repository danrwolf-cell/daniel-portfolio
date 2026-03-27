import type { Metadata } from "next";
import { CopyEmailButton } from "@/app/components/CopyEmailButton";
import { ContactForm } from "@/app/contact/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — project inquiries and collaborations.`,
  openGraph: {
    title: `Contact · ${site.name}`,
    description: `Get in touch with ${site.name}.`,
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted">
            Contact
          </p>
          <h1 className="font-display mt-6 text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.03em] text-foreground">
            Get in touch
          </h1>
          <p className="mt-8 max-w-md text-[17px] leading-relaxed text-muted">
            For new projects, speaking, or collaborations — send a note or
            email directly.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <a
              href={`mailto:${site.email}`}
              className="font-display text-xl font-medium tracking-tight text-foreground underline decoration-border underline-offset-[6px] transition-colors hover:decoration-foreground"
            >
              {site.email}
            </a>
            <CopyEmailButton email={site.email} />
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
