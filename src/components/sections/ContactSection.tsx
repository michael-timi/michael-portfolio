"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, MessageCircle, Mail, User, MessageSquare, CheckCircle2 } from "lucide-react";
import { submitContactMessage, isFirebaseConfigured } from "@/lib/firebase";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/SectionHeader";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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
      setError(
        "Something went wrong while sending your message. Please try again later.",
      );
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-950/80 via-zinc-950 to-black px-6 py-10 shadow-[0_0_40px_rgba(0,0,0,0.6)] sm:px-10 sm:py-12"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <motion.div variants={variants}>
          <SectionHeader
            icon={MessageCircle}
            title="Contact"
            description="Have an opportunity or want to collaborate? Reach out below or email directly."
          />
        </motion.div>
        <motion.p
          className="mt-4 max-w-2xl text-sm text-zinc-400 sm:text-base"
          variants={variants}
        >
          Email me at{" "}
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 text-zinc-200 underline underline-offset-4 transition hover:text-emerald-400"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
        </motion.p>

        {!firebaseReady && (
          <motion.div
            className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200"
            variants={variants}
          >
            <p className="font-medium">Form backend not configured yet.</p>
            <p className="mt-1 text-amber-200/90">
              Add Firebase env vars to enable the form. Until then, please email
              me directly:
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-2 text-sm font-medium text-amber-100 transition hover:bg-amber-500/30"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
          </motion.div>
        )}

        <motion.form
          onSubmit={handleSubmit}
          className="mt-8 grid gap-4 sm:grid-cols-2"
          variants={variants}
        >
          <div className="sm:col-span-1">
            <label
              htmlFor="name"
              className="flex items-center gap-2 text-xs font-medium text-zinc-300"
            >
              <User className="h-3.5 w-3.5 text-zinc-500" />
              Name
            </label>
            <input
              id="name"
              name="name"
              className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-2.5 text-sm text-zinc-50 outline-none transition focus:border-emerald-500 focus:bg-zinc-900 focus:ring-2 focus:ring-emerald-500/20"
              placeholder="Your name"
              autoComplete="name"
            />
          </div>
          <div className="sm:col-span-1">
            <label
              htmlFor="email"
              className="flex items-center gap-2 text-xs font-medium text-zinc-300"
            >
              <Mail className="h-3.5 w-3.5 text-zinc-500" />
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-2.5 text-sm text-zinc-50 outline-none transition focus:border-emerald-500 focus:bg-zinc-900 focus:ring-2 focus:ring-emerald-500/20"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="flex items-center gap-2 text-xs font-medium text-zinc-300"
            >
              <MessageSquare className="h-3.5 w-3.5 text-zinc-500" />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-2.5 text-sm text-zinc-50 outline-none transition focus:border-emerald-500 focus:bg-zinc-900 focus:ring-2 focus:ring-emerald-500/20"
              placeholder="Tell me a bit about what you have in mind…"
            />
          </div>
          <div className="flex flex-col gap-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <motion.button
              type="submit"
              disabled={status === "submitting" || !firebaseReady}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-medium text-emerald-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-80"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send message
                </>
              )}
            </motion.button>
            <div className="min-h-[1.5rem] flex items-center gap-2 text-xs text-zinc-400">
              {status === "success" && (
                <motion.p
                  className="flex items-center gap-2 text-emerald-400"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  Message sent. I&apos;ll get back to you soon.
                </motion.p>
              )}
              {status === "error" && error && (
                <motion.p
                  className="text-red-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {error}
                </motion.p>
              )}
            </div>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}

