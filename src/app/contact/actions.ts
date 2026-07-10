"use server";

import { Resend } from "resend";
import { getTranslations } from "next-intl/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const t = await getTranslations("ContactActions");

  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const subject = formData.get("subject")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email || !message) {
    return {
      status: "error",
      message: t("errorRequired"),
    };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: t("errorInvalidEmail") };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Sewrio Contact Form <contact@sewrio.com>",
      to: process.env.CONTACT_EMAIL_TO ?? "ceo@sewrio.com",
      replyTo: email,
      subject: subject ? `[Sewrio Contact] ${subject}` : `[Sewrio Contact] New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend failed to send contact email", error);
      return {
        status: "error",
        message: t("errorGeneric"),
      };
    }
  } catch (error) {
    console.error("Failed to send contact email", error);
    return {
      status: "error",
      message: t("errorGeneric"),
    };
  }

  return { status: "success" };
}
