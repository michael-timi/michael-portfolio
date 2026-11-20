type SectionHeaderProps = {
  index: string;
  title: string;
  description?: string;
};

export function SectionHeader({ index, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-signal">{index}</p>
      <h2 className="mt-3 font-display text-4xl leading-[1.02] tracking-[-0.03em] text-ink sm:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
