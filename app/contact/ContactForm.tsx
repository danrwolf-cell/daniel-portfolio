"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "./actions";

const initial: ContactState = {};

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, initial);

  if (state?.ok) {
    return (
      <p className="border border-border bg-surface px-5 py-4 text-[15px] text-muted">
        Thanks — your message is on its way. I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden
      />
      <div>
        <label
          htmlFor="name"
          className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full border border-border bg-surface-elevated px-4 py-3 text-[15px] text-foreground outline-none transition-shadow focus:ring-2 focus:ring-accent/25"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full border border-border bg-surface-elevated px-4 py-3 text-[15px] text-foreground outline-none transition-shadow focus:ring-2 focus:ring-accent/25"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-2 w-full resize-y border border-border bg-surface-elevated px-4 py-3 text-[15px] text-foreground outline-none transition-shadow focus:ring-2 focus:ring-accent/25"
        />
      </div>
      {state?.error ? (
        <p className="text-sm text-red-400" role="alert">
          {state.error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center border border-transparent bg-foreground py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
