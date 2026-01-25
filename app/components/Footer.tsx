import Image from "next/image";

export default function Footer() {
  return (
    <footer className="section-tight border-t border-white/5">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/brand/r-board.png"
            alt="R-Board logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full border border-white/10"
          />
          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)]">
              R-Board®
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              R-Board® converts end-of-life tires into high-performance structural panels.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-xs text-[var(--text-muted)]">
          <p>Email: partners@r-board.com</p>
          <p>© 2024 R-Board®. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
