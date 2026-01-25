type MeterBarProps = {
  label: string;
  value: string;
  percent: number;
};

export default function MeterBar({ label, value, percent }: MeterBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(255,255,255,0.5)]">
        <span>{label}</span>
        <span className="text-[var(--text-primary)]">{value}</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/10">
        <span
          className="block h-full rounded-full bg-[var(--brand-green)]"
          style={{ width: `${percent}%` }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
