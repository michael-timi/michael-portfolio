"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { profile } from "@/data/profile";
import { isFirebaseConfigured, submitContactMessage } from "@/lib/firebase";
import { fadeUp } from "@/lib/motion";

const fieldClass =
  "mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-base text-ink outline-none transition placeholder:text-ink/30 focus:border-signal";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const firebaseReady = isFirebaseConfigured();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setError(null);

    try {
      await submitContactMessage({ name, email, message });
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setError("Something went wrong while sending your message. Please try again, or email me directly.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mt-24 scroll-mt-28 border-t border-ink/15 pt-16 md:mt-32 md:pt-20">
      <motion.div
        className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.div variants={fadeUp}>
          <SectionHeader
            index="05 — Contact"
            title="Tell me what you’re building."
            description="Senior web roles, fullstack contracts, and products that need both a site and a mobile app."
          />
          <ul className="mt-8 space-y-3 text-sm">
            <li>
              <a className="text-ink underline decoration-signal decoration-2 underline-offset-4" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </li>
            <li>
              <a className="text-muted transition hover:text-ink" href={profile.github} target="_blank" rel="noreferrer">
                github.com/michael-timi
              </a>
            </li>
            <li>
              <a className="text-muted transition hover:text-ink" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="text-muted transition hover:text-ink" href={profile.cv} download>
                Download CV
              </a>
            </li>
            <li className="text-muted">{profile.location}</li>
          </ul>
        </motion.div>

        <motion.form variants={fadeUp} onSubmit={handleSubmit}>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                Name
              </label>
              <input id="name" name="name" required autoComplete="name" placeholder="Your name" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className={fieldClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="The product, the role, or the problem."
                className={fieldClass}
              />
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center rounded-full border border-ink/25 px-6 py-3 text-sm text-ink transition hover:border-ink disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Sending" : "Send message"}
            </button>
            <div className="min-h-5 text-xs text-muted">
              {status === "idle" ? (
                <p>
                  {firebaseReady
                    ? "Messages are stored in Firebase and come straight to me."
                    : "If the form cannot send, use the email and I will reply there."}
                </p>
              ) : null}
              {status === "success" ? <p className="text-ink">Message sent. I will get back to you soon.</p> : null}
              {status === "error" && error ? <p className="text-signal">{error}</p> : null}
            </div>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}
