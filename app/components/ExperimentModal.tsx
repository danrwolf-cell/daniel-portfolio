"use client";

import { useEffect, useRef } from "react";

type ExperimentModalProps = {
  src: string;
  title: string;
  onClose: () => void;
};

export function ExperimentModal({ src, title, onClose }: ExperimentModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();

    const handleCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };
    dialog.addEventListener("cancel", handleCancel);
    return () => dialog.removeEventListener("cancel", handleCancel);
  }, [onClose]);

  function handleBackdropClick(e: React.MouseEvent<HTMLDialogElement>) {
    const rect = dialogRef.current?.getBoundingClientRect();
    if (!rect) return;
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      onClose();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      className="m-auto w-[min(92vw,1100px)] max-h-[90dvh] overflow-hidden rounded-none border border-border bg-surface p-0 shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-muted">
          {title}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="flex h-7 w-7 items-center justify-center text-muted transition-colors hover:text-foreground"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* iframe */}
      <iframe
        src={src}
        title={title}
        className="block h-[calc(90dvh-45px)] w-full border-0"
        sandbox="allow-scripts allow-same-origin"
      />
    </dialog>
  );
}
