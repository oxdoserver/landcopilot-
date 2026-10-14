"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { btn } from "@/components/styles";
import { company, projects } from "@/lib/site";

const interests = [
  { value: "general", label: "General enquiry" },
  ...projects.map((project) => ({ value: project.slug, label: project.title })),
];

function interestFromQuery(value: string | null) {
  if (value && interests.some((item) => item.value === value)) return value;
  return "general";
}

export function ContactForm() {
  const params = useSearchParams();
  const [interest, setInterest] = useState(() => interestFromQuery(params.get("interest")));
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const email = String(data.get("email") ?? "");
    const topic = interests.find((item) => item.value === interest)?.label ?? "General enquiry";
    const message = String(data.get("message") ?? "");
    const body = [`Name: ${name}`, `Phone: ${phone}`, `Email: ${email}`, `Interest: ${topic}`, "", message].join(
      "\n",
    );
    const href = `mailto:${company.email}?subject=${encodeURIComponent(`Enquiry: ${topic}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    window.location.href = href;
  }

  return (
    <form onSubmit={onSubmit} className="border border-line bg-surface p-6 sm:p-8">
      <h2 className="font-serif text-3xl text-deep">Send an enquiry</h2>
      <p className="mt-2 text-sm leading-6 text-muted">
        This opens your email app with the message ready to send to {company.email}. You can also call{" "}
        {company.phone}.
      </p>
      <div className="mt-6 grid gap-4">
        <label className="grid gap-1.5 text-sm font-medium text-deep">
          Name
          <input name="name" required autoComplete="name" className="field" />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-deep">
          Phone
          <input name="phone" required type="tel" autoComplete="tel" className="field" />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-deep">
          Email
          <input name="email" required type="email" autoComplete="email" className="field" />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-deep">
          Interest
          <select
            name="interest"
            value={interest}
            onChange={(event) => setInterest(event.target.value)}
            className="field"
          >
            {interests.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-deep">
          Message
          <textarea name="message" required rows={5} className="field resize-y" />
        </label>
      </div>
      <button
        type="submit"
        className={`${btn.deep} mt-6`}
      >
        Send enquiry
      </button>
      {sent ? (
        <p className="mt-4 text-sm text-deep" role="status">
          Your email app should open with this enquiry. If it does not, write to {company.email} or call{" "}
          {company.phone}.
        </p>
      ) : null}
    </form>
  );
}
