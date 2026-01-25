"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import GlassCard from "./GlassCard";

export default function CTASection() {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const isSending = status === "sending";

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSending) return;

    if (!form.name || !form.email || !form.message) {
      setErrorMessage("Please provide your name, email, and a message.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        setErrorMessage(payload?.error || "Unable to send your request right now.");
        setStatus("error");
        return;
      }

      setForm({ name: "", organization: "", email: "", message: "" });
      setStatus("success");
    } catch (error) {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="cta" className="section">
      <div className="container">
        <GlassCard className="px-6 py-10 md:px-10" accent="bottom">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(255,255,255,0.5)]">
                Call to Action
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
                R-Board® represents a new category of building material addressing environmental waste, housing comfort, and resilience.
              </h2>
              <p className="text-base text-[var(--text-muted)]">
                We are actively seeking manufacturing, municipal, and grant partners.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  type="submit"
                  form="cta-form"
                  className="btn-primary"
                  disabled={isSending}
                >
                  Request Partnership Deck
                </button>
                <button
                  type="submit"
                  form="cta-form"
                  className="btn-secondary text-sm"
                  disabled={isSending}
                >
                  Contact for Manufacturing / Municipal / Grant Partnerships
                </button>
              </div>
            </div>
            <form
              id="cta-form"
              onSubmit={onSubmit}
              className="space-y-4"
              aria-busy={isSending}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs text-[var(--text-muted)]">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={onChange}
                    disabled={isSending}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[rgba(255,255,255,0.3)] focus:border-white/30"
                    placeholder="Full name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="organization"
                    className="text-xs text-[var(--text-muted)]"
                  >
                    Organization
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    value={form.organization}
                    onChange={onChange}
                    disabled={isSending}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[rgba(255,255,255,0.3)] focus:border-white/30"
                    placeholder="Organization"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs text-[var(--text-muted)]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  disabled={isSending}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[rgba(255,255,255,0.3)] focus:border-white/30"
                  placeholder="name@org.com"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs text-[var(--text-muted)]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={onChange}
                  disabled={isSending}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[rgba(255,255,255,0.3)] focus:border-white/30"
                  placeholder="Tell us about your partnership goals."
                />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button type="submit" className="btn-primary" disabled={isSending}>
                  {isSending ? "Sending..." : "Submit inquiry"}
                </button>
                {status === "success" ? (
                  <p className="text-xs text-[var(--text-muted)]" role="status">
                    Thanks — your message is on its way.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="text-xs text-red-200" role="alert">
                    {errorMessage}
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
