"use client";

import { FormEvent, useState } from "react";
import { cta } from "@/lib/content";

export default function ContactForm() {
  const [name, setName] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // TODO: connect to a real backend (Formspree, Resend, an API route, etc.)
    setName(String(data.get("name") ?? "").trim());
  }

  if (name !== null) {
    return (
      <div role="status" className="rounded-2xl bg-white p-8 text-ink">
        <h3 className="text-2xl">Thank you{name ? `, ${name}` : ""}.</h3>
        <p className="mt-3 text-muted">{cta.thanks}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl bg-white p-6 text-ink md:p-8">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">
          Your name
        </label>
        <input id="name" name="name" required autoComplete="name" className="field" />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className="field" />
      </div>
      <fieldset>
        <legend className="mb-2 text-sm font-semibold">How would you like to meet?</legend>
        <div className="space-y-2">
          {[
            ["in-person", "In person, Santa Monica office"],
            ["telehealth", "Telehealth (clients located in California)"],
            ["unsure", "I'm not sure yet"],
          ].map(([value, label], i) => (
            <label key={value} className="flex items-center gap-3 text-ink">
              <input
                type="radio"
                name="format"
                value={value}
                defaultChecked={i === 0}
                className="h-4 w-4 accent-[rgb(var(--color-primary))]"
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
          What's been weighing on you? <span className="font-normal text-muted">(optional)</span>
        </label>
        <textarea id="message" name="message" rows={4} className="field" />
      </div>
      <button type="submit" className="btn btn-primary w-full">
        {cta.submit}
      </button>
    </form>
  );
}
