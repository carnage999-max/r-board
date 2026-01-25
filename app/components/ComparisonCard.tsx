import GlassCard from "./GlassCard";

type ComparisonRow = {
  label: string;
  value: string;
  highlight?: boolean;
};

type ComparisonCardProps = {
  title: string;
  rows: ComparisonRow[];
  footnote?: string;
};

export default function ComparisonCard({
  title,
  rows,
  footnote,
}: ComparisonCardProps) {
  return (
    <GlassCard className="px-6 py-6" accent="top">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-[var(--text-primary)]">
            {title}
          </h3>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(255,255,255,0.4)]">
            STC
          </span>
        </div>
        <div className="space-y-3">
          {rows.map((row) => (
            <div
              key={row.label}
              className={`flex items-center justify-between gap-4 rounded-xl px-4 py-3 ${
                row.highlight
                  ? "bg-white/10 text-[var(--text-primary)]"
                  : "bg-white/5 text-[var(--text-muted)]"
              }`}
            >
              <span className="text-sm font-medium">{row.label}</span>
              <span className="text-sm font-semibold tracking-tight">
                {row.value}
              </span>
            </div>
          ))}
        </div>
        {footnote ? (
          <p className="text-xs text-[var(--text-muted)]">{footnote}</p>
        ) : null}
      </div>
    </GlassCard>
  );
}
