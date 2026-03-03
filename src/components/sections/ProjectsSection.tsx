"use client";

import { motion } from "framer-motion";
import { featuredProjects } from "@/data/profile";
import { ExternalLink, FolderGit2, Smartphone, Plus } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const list = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 rounded-3xl border border-zinc-800 bg-zinc-950/60 px-6 py-10 shadow-[0_0_40px_rgba(0,0,0,0.6)] sm:px-10 sm:py-12"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={list}
      >
        <motion.div variants={card}>
          <SectionHeader
            icon={FolderGit2}
            title="Projects"
            description="Live products I've contributed to. Tap through to stores."
          />
        </motion.div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <motion.article
              key={project.name}
              className="group flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5"
              variants={card}
              whileHover={{
                y: -4,
                borderColor: "rgba(113,113,122,0.9)",
                boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(52,211,153,0.1)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-zinc-800/80 text-emerald-400 transition group-hover:bg-emerald-500/20">
                  <Smartphone className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-50 sm:text-base">
                    {project.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-zinc-500">{project.role}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <motion.a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 px-3 py-1.5 text-xs text-zinc-200 transition hover:border-emerald-500/50 hover:bg-emerald-500/10"
                    whileHover={{ x: 2 }}
                  >
                    <span>{link.platform}</span>
                    <ExternalLink className="h-3 w-3 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>
                ))}
              </div>
            </motion.article>
          ))}

          <motion.article
            className="flex flex-col justify-between rounded-2xl border border-dashed border-zinc-700/80 bg-zinc-900/20 p-5"
            variants={card}
            whileHover={{ borderColor: "rgba(113,113,122,0.6)", backgroundColor: "rgba(39,39,42,0.4)" }}
          >
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-dashed border-zinc-600 text-zinc-500">
                <Plus className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-zinc-200 sm:text-base">
                  Next Case Study
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Deep-dive case study for a flagship app — process, architecture, metrics.
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs text-zinc-500">
              Placeholder – ready to be replaced.
            </p>
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
}

