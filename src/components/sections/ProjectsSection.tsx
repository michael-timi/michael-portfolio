"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import {
  projectFilters,
  projects,
  type ProjectFilter,
  type ProjectItem,
  type ProjectKind,
} from "@/data/profile";

const kindRank: Record<ProjectKind, number> = { web: 0, ai: 1, mobile: 2 };

function orderedProjects(list: ProjectItem[]) {
  return [...list].sort((a, b) => {
    const byKind = kindRank[a.kind] - kindRank[b.kind];
    if (byKind !== 0) return byKind;
    return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
  });
}

function matches(project: ProjectItem, filter: ProjectFilter) {
  if (filter === "all") return true;
  return project.kind === filter || project.also?.includes(filter);
}

const kindLabel: Record<ProjectKind, string> = {
  web: "Web",
  ai: "AI",
  mobile: "Mobile",
};

function ProjectLinks({ links }: { links: ProjectItem["links"] }) {
  if (!links.length) return null;
  return (
    <div className="flex flex-wrap gap-2 md:justify-end">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 border border-current px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] transition hover:bg-paper hover:text-ink"
        >
          {link.platform}
          <ArrowUpRight className="work-arrow h-3 w-3" />
        </a>
      ))}
    </div>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const visible = useMemo(
    () => orderedProjects(projects).filter((project) => matches(project, filter)),
    [filter],
  );

  return (
    <section id="projects" className="mt-24 scroll-mt-28 md:mt-32">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          index="01 — Work"
          title="Selected work."
          description="Web products first, then the mobile apps shipped to the stores. Same standard either way: something a person can open."
        />
        <div className="flex flex-wrap gap-x-5 gap-y-2" role="group" aria-label="Filter projects">
          {projectFilters.map((item) => {
            const selected = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(item.id)}
                className={`font-mono text-[11px] uppercase tracking-[0.18em] ${
                  selected ? "text-ink" : "text-ink/40 hover:text-ink"
                }`}
              >
                <span className={selected ? "border-b border-signal pb-0.5" : ""}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted" aria-live="polite">
        {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>

      <div className="mt-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <motion.article
              layout
              key={project.name}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.55, delay: Math.min(index, 8) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="work-row group -mx-5 border-t border-ink/15 px-5 py-8 transition-colors duration-500 last:border-b hover:bg-ink hover:text-paper sm:-mx-8 sm:px-8"
            >
              {project.caseStudy ? (
                <div className="grid gap-6 md:grid-cols-12">
                  <p className="font-mono text-[11px] tracking-[0.16em] text-signal md:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="md:col-span-11">
                    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                      <h3 className="work-title font-display text-4xl tracking-[-0.04em] sm:text-6xl">
                        {project.name}
                      </h3>
                      <div className="flex flex-col gap-3 md:items-end md:text-right">
                        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">
                          {kindLabel[project.kind]}
                          {project.also?.includes("ai") ? " · AI" : ""}
                        </p>
                        <p className="text-sm text-muted group-hover:text-paper/70">{project.status}</p>
                        <ProjectLinks links={project.links} />
                      </div>
                    </div>
                    <dl className="mt-8 grid gap-6 border-t border-ink/15 pt-6 group-hover:border-paper/20 md:grid-cols-3">
                      {(
                        [
                          ["Problem", project.caseStudy.problem],
                          ["Shipped", project.caseStudy.shipped],
                          ["Result", project.caseStudy.result],
                        ] as const
                      ).map(([label, copy]) => (
                        <div key={label}>
                          <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">
                            {label}
                          </dt>
                          <dd className="mt-2 text-sm leading-relaxed text-muted group-hover:text-paper/75">
                            {copy}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    {project.stack?.length ? (
                      <p className="mt-6 text-xs text-muted group-hover:text-paper/60">
                        {project.stack.join(" · ")}
                      </p>
                    ) : null}
                  </div>
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-12 md:gap-6">
                  <p className="font-mono text-[11px] tracking-[0.16em] text-signal md:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="md:col-span-7">
                    <h3
                      className={`work-title font-display tracking-[-0.04em] ${
                        project.featured ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
                      }`}
                    >
                      {project.name}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted transition-colors group-hover:text-paper/70">
                      {project.summary}
                    </p>
                    {project.metrics?.length ? (
                      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink/70 group-hover:text-paper/80">
                        {project.metrics.join("  ·  ")}
                      </p>
                    ) : null}
                    {project.stack?.length ? (
                      <p className="mt-2 text-xs text-muted group-hover:text-paper/60">
                        {project.stack.join(" · ")}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex flex-col gap-3 md:col-span-4 md:items-end md:text-right">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">
                      {kindLabel[project.kind]}
                      {project.also?.includes("ai") ? " · AI" : ""}
                    </p>
                    <p className="text-sm text-muted group-hover:text-paper/70">{project.status}</p>
                    <ProjectLinks links={project.links} />
                  </div>
                </div>
              )}
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
