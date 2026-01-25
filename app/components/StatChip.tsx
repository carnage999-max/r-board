type StatChipProps = {
  value: string;
  label: string;
};

export default function StatChip({ value, label }: StatChipProps) {
  return (
    <div className="chip gap-2">
      <span className="text-[var(--text-primary)]">{value}</span>
      <span className="text-[0.7rem] text-[var(--text-muted)]">{label}</span>
    </div>
  );
}
