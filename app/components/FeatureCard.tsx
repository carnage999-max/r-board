import type { ReactNode } from "react";
import GlassCard from "./GlassCard";

type FeatureCardProps = {
  title: string;
  body: string;
  icon: ReactNode;
};

export default function FeatureCard({ title, body, icon }: FeatureCardProps) {
  return (
    <GlassCard className="card-hover px-5 py-6" accent="top">
      <div className="space-y-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[var(--text-primary)]">
          {icon}
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-[var(--text-primary)]">
            {title}
          </h3>
          <p className="text-sm text-[var(--text-muted)]">{body}</p>
        </div>
      </div>
    </GlassCard>
  );
}
