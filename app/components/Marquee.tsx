"use client";

type MarqueeProps = {
  items: string[];
  className?: string;
};

export function Marquee({ items, className = "" }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div
      className={`relative overflow-hidden border-y border-border bg-surface py-4 ${className}`}
      aria-hidden
    >
      <div className="flex w-max animate-marquee gap-12 pr-12 md:gap-16 md:pr-16">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 font-display text-[13px] font-medium uppercase tracking-[0.32em] text-muted md:text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
