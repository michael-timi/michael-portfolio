"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const navLinks = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#background", label: "Background" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 -mx-5 mb-2 px-5 transition sm:-mx-8 sm:px-8 ${
          open
            ? "bg-transparent text-ink"
            : scrolled
              ? "border-b border-ink/10 bg-paper/85 text-ink backdrop-blur-xl"
              : "border-b border-transparent bg-transparent text-ink"
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3">
            <span
              className="flex h-9 w-9 items-center justify-center bg-ink font-display text-sm italic text-paper"
            >
              Mo
            </span>
            <span className="hidden text-sm sm:block">
              <span className="block font-medium leading-none">{profile.name}</span>
              <span className={`mt-1 block text-[11px] ${open ? "text-ink/70" : "text-muted"}`}>
                {profile.role}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`group relative text-[13px] transition ${
                    isActive ? "text-ink" : "text-ink/55 hover:text-ink"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-signal transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full border border-ink/25 px-4 py-2 text-xs font-medium text-ink transition hover:border-ink lg:inline-flex"
            >
              Let’s talk
            </a>
            <button
              type="button"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden ${
                open ? "border-ink/30 text-ink" : "border-ink/15 text-ink"
              }`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-end bg-paper px-6 pb-16 text-ink lg:hidden"
          >
            <div className="flex flex-col border-b border-ink/15">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="grid grid-cols-[2.75rem_1fr] items-center border-t border-ink/15 py-4"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-mono text-[11px] text-signal">0{index + 1}</span>
                  <span className="font-display text-[2.6rem] leading-none tracking-[-0.04em]">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </>
  );
}
