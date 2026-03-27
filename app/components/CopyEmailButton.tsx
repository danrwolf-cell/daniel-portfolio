"use client";

import { useCallback, useState } from "react";

type CopyEmailButtonProps = {
  email: string;
  className?: string;
};

export function CopyEmailButton({ email, className = "" }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [email]);

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground ${className}`}
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
