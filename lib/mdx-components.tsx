import Image from "next/image";
import type { MDXComponents } from "mdx/types";

export function MdxImage({
  src,
  alt,
  width = 1200,
  height = 675,
}: {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}) {
  return (
    <span className="my-10 block overflow-hidden rounded-lg border border-border">
      <Image
        src={src}
        alt={alt ?? ""}
        width={width}
        height={height}
        className="h-auto w-full object-cover"
      />
    </span>
  );
}

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="font-display mt-12 text-3xl font-semibold tracking-tight first:mt-0 md:text-4xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="font-display mt-12 text-2xl font-semibold tracking-tight md:text-3xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="font-display mt-8 text-xl font-semibold" {...props} />
  ),
  p: (props) => (
    <p className="mt-5 text-base leading-relaxed text-muted" {...props} />
  ),
  ul: (props) => (
    <ul
      className="mt-5 list-disc space-y-2 pl-6 text-muted marker:text-accent"
      {...props}
    />
  ),
  ol: (props) => (
    <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  a: (props) => (
    <a
      className="font-medium text-foreground underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-8 border-l-2 border-accent pl-6 text-lg italic text-muted"
      {...props}
    />
  ),
  hr: () => <hr className="my-12 border-border" />,
  img: (props) => {
    const { src, alt, width, height } = props as {
      src?: string;
      alt?: string;
      width?: number;
      height?: number;
    };
    if (!src) return null;
    return (
      <MdxImage
        src={src}
        alt={alt}
        width={width ?? 1200}
        height={height ?? 675}
      />
    );
  },
};
