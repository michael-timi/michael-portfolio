"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";

type LayoutShellProps = {
  children: ReactNode;
};

export function LayoutShell({ children }: LayoutShellProps) {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setBooting(false), 700);
    return () => clearTimeout(timeout);
  }, []);

  if (booting) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-zinc-50">
        <div className="relative flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-emerald-400/70 border-t-transparent" />
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
            Loading portfolio
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(120,255,214,0.08),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(148,163,184,0.14),_transparent_56%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-4 pb-16 pt-6 sm:px-6 sm:pt-10 md:gap-12 md:pt-12 lg:px-8">
        <Header />

        <motion.main
          className="flex flex-1 flex-col gap-8 md:gap-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.main>

        <footer className="mt-4 border-t border-zinc-900 pt-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Michael B. Oluwatimileyin.</p>
        </footer>
      </div>
    </div>
  );
}

