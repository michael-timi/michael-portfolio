import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-ink/15 py-8">
      <a
        href={`mailto:${profile.email}`}
        className="font-display text-3xl tracking-[-0.03em] transition hover:text-signal sm:text-5xl"
      >
        {profile.email}
      </a>
      <div className="mt-8 flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a className="transition hover:text-ink" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="transition hover:text-ink" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="transition hover:text-ink" href={profile.cv} download>
            CV
          </a>
          <a className="transition hover:text-ink" href="#top">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
