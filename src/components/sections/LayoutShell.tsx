"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { MotionConfig, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

type LayoutShellProps = {
  children: ReactNode;
};

function PointerGlow() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const springX = useSpring(x, { stiffness: 70, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 70, damping: 18, mass: 0.4 });
  const [ready, setReady] = useState(false);
  const seen = useRef(false);

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      if (!seen.current) {
        seen.current = true;
        setReady(true);
      }
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [reduce, x, y]);

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-30 hidden h-72 w-72 rounded-full bg-signal/25 blur-3xl md:block"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%", opacity: ready ? 1 : 0 }}
    />
  );
}

export function LayoutShell({ children }: LayoutShellProps) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-paper text-ink">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(52,211,153,0.09),transparent_46%),radial-gradient(ellipse_at_bottom,rgba(120,80,40,0.08),transparent_42%)]"
        />
        <PointerGlow />
        <ScrollProgress />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-5 sm:px-8">
          <Header />
          <motion.main
            id="main"
            className="flex-1 pb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.main>
          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
}
