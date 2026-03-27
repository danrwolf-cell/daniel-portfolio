"use server";

import { Resend } from "resend";
import { site } from "@/lib/site";

export type ContactState = {
  ok?: boolean;
  error?: string;
};

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function sendContact(
  _prev: ContactState | null,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = formData.get("company");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { ok: true };
  }

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (typeof name !== "string" || name.trim().length < 2) {
    return { error: "Please enter your name." };
  }
  if (typeof email !== "string" || !validateEmail(email.trim())) {
    return { error: "Please enter a valid email." };
  }
  if (typeof message !== "string" || message.trim().length < 10) {
    return { error: "Please write at least a short message (10+ characters)." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from =
    process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    return {
      error:
        "Email sending is not configured. Set RESEND_API_KEY (see .env.example).",
    };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email.trim(),
    subject: `Portfolio contact from ${name.trim()}`,
    text: `From: ${name.trim()} <${email.trim()}>\n\n${message.trim()}`,
  });

  if (error) {
    return { error: error.message ?? "Could not send message. Try again." };
  }

  return { ok: true };
}
