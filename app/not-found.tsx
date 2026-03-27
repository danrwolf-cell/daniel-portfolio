import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-1 flex-col justify-center px-5 py-32 text-center md:px-10">
      <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted">
        404
      </p>
      <h1 className="font-display mt-4 text-3xl font-medium tracking-[-0.03em] text-foreground">
        Page not found
      </h1>
      <p className="mt-4 text-muted">
        That URL doesn&apos;t exist or was moved.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex justify-center border border-border bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        Back home
      </Link>
    </div>
  );
}
