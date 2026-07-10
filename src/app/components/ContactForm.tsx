"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { sendContactMessage, type ContactFormState } from "../contact/actions";

const inputClasses =
  "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/30";

const initialState: ContactFormState = { status: "idle" };

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);

  if (state.status === "success") {
    return (
      <div className="liquid-glass rounded-3xl p-10 text-center">
        <h3 className="text-lg font-semibold text-white">{t("successTitle")}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/60">{t("successBody")}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="liquid-glass space-y-5 rounded-3xl p-8 sm:p-10 text-left">
      {state.status === "error" && (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {state.message}
        </p>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wide text-white/40">
            {t("nameLabel")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={t("namePlaceholder")}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wide text-white/40">
            {t("emailLabel")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={t("emailPlaceholder")}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-xs font-medium uppercase tracking-wide text-white/40">
          {t("subjectLabel")}
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder={t("subjectPlaceholder")}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wide text-white/40">
          {t("messageLabel")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={t("messagePlaceholder")}
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90 disabled:opacity-50 sm:w-auto"
      >
        {pending ? t("sending") : t("send")}
      </button>
    </form>
  );
}
