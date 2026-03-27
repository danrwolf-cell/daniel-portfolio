import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { site } from "@/lib/site";

const ppNeueMontrealBook = localFont({
  src: "./fonts/PPNeueMontreal-Book.otf",
  variable: "--font-sans-body",
  display: "swap",
});

const ppNeueMontrealMedium = localFont({
  src: "./fonts/PPNeueMontreal-Medium.otf",
  variable: "--font-display",
  display: "swap",
});

const siteUrl = site.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    url: siteUrl,
    siteName: site.name,
    locale: site.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: siteUrl,
    email: site.email,
    jobTitle: "Designer",
  };

  return (
    <html
      lang="en"
      className={`${ppNeueMontrealBook.variable} ${ppNeueMontrealMedium.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main className="flex flex-1 flex-col">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
