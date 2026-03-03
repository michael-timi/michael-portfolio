"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type SectionHeaderProps = {
  icon: LucideIcon;
  title: string;
  description?: string;
  variants?: { hidden: object; visible: object };
};

export function SectionHeader({
  icon: Icon,
  title,
  description,
  variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
}: SectionHeaderProps) {
  return (
    <motion.div className="flex items-start gap-4" variants={variants}>
      <motion.span
        className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-800/50 text-emerald-400"
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Icon className="h-5 w-5" />
      </motion.span>
      <div>
        <h2 className="text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">
          {title}
        </h2>
        {description && (
          <p className="mt-1 max-w-2xl text-sm text-zinc-400">{description}</p>
        )}
      </div>
    </motion.div>
  );
}
