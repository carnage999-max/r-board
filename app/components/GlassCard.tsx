import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  accent?: "top" | "bottom" | "none";
};

export default function GlassCard({
  children,
  className = "",
  accent = "top",
}: GlassCardProps) {
  return (
    <div className={`glass-card ${className}`}>
      {accent !== "none" ? (
        <span
          className={`wood-strip absolute inset-x-0 h-[3px] ${
            accent === "bottom" ? "bottom-0" : "top-0"
          }`}
          aria-hidden="true"
        />
      ) : null}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
