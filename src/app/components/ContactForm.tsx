"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const inputClasses =
  "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/30";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="liquid-glass rounded-3xl p-10 text-center">
        <h3 className="text-lg font-semibold text-white">Message sent.</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/60">
          Thanks for reaching out — we read every message and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="liquid-glass space-y-5 rounded-3xl p-8 sm:p-10 text-left">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wide text-white/40">
            Name
          </label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wide text-white/40">
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="you@studio.com" className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-xs font-medium uppercase tracking-wide text-white/40">
          Subject
        </label>
        <input id="subject" name="subject" type="text" placeholder="What's this about?" className={inputClasses} />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wide text-white/40">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a bit more..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90 sm:w-auto"
      >
        Send message
      </button>
    </form>
  );
}
