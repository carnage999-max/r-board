type SectionHeaderProps = {
  title: string;
  lead?: string;
};

export default function SectionHeader({ title, lead }: SectionHeaderProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] md:text-3xl">
        {title}
      </h2>
      {lead ? (
        <p className="max-w-[65ch] text-base text-[var(--text-muted)]">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
