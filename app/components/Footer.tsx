import Image from "next/image";

export default function Footer() {
  return (
    <footer className="section-tight relative overflow-hidden border-t border-white/5">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/textures/wood.png)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[rgba(9,16,22,0.78)]"
        aria-hidden="true"
      />
      <div className="container relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/brand/rboard-new-logo.png"
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
          <p>
            Mailing Address:

            PO Box 52,
            Detroit, ME 04929
          </p>
          <p>
            Phone:207-947-1999
          </p>
          <p>Email: info@r-boards.com</p>
          <p>© 2024 R-Board®. All rights reserved.</p>
          <p>
            Part of the{" "}
            <a
              href="https://se7eninc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[var(--text-primary)] transition-colors"
            >
              Se7en
            </a>{" "}
            family of companies.
          </p>
        </div>
      </div>
    </footer>
  );
}
