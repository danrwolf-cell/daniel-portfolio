import { sizzleReel } from "@/lib/site";

export function SizzleReel() {
  return (
    <section
      aria-label="Showreel"
      className="w-full px-7 pt-8 sm:px-12 md:px-16 md:pt-10 lg:px-20"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border/60 bg-border/15 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={sizzleReel.src}
            poster={sizzleReel.poster}
            muted
            playsInline
            autoPlay
            loop
            preload="metadata"
            aria-label="Sizzle reel of selected design work"
          />
        </div>
      </div>
    </section>
  );
}
