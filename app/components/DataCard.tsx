import GlassCard from "./GlassCard";

type DataCardProps = {
  value: string;
  label: string;
  note?: string;
};

export default function DataCard({ value, label, note }: DataCardProps) {
  return (
    <GlassCard className="card-hover px-6 py-6" accent="bottom">
      <div className="space-y-2">
        <p className="text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
          {value}
        </p>
        <p className="text-sm text-[var(--text-muted)]">{label}</p>
        {note ? (
          <p className="text-xs uppercase tracking-[0.2em] text-[rgba(255,255,255,0.4)]">
            {note}
          </p>
        ) : null}
      </div>
    </GlassCard>
  );
}
