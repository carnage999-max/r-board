import Image from "next/image";
import StatChip from "./StatChip";
import Reveal from "./Reveal";
import GalleryTrigger from "./GalleryTrigger";

type HeroBoardProps = {
  galleryIndex: number;
};

export default function HeroBoard({ galleryIndex }: HeroBoardProps) {
  return (
    <section id="hero" className="section pt-28 md:pt-36">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#141a21]/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),0_40px_80px_rgba(0,0,0,0.45)]">
            <Image
              src="/textures/wood.png"
              alt="Walnut wood texture"
              fill
              className="object-cover wood-grain"
              sizes="100vw"
              priority
            />
            <div className="wood-overlay" aria-hidden="true" />
            <div className="wood-sweep" aria-hidden="true" />
            <div className="relative z-10 grid gap-12 px-6 py-12 md:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(255,255,255,0.65)]">
                    R-Board®
                  </p>
                  <h1 className="text-4xl font-semibold tracking-tight text-[#f4f6f8] sm:text-5xl lg:text-6xl">
                    R-Board®
                  </h1>
                  <p className="max-w-[40ch] text-lg text-[rgba(244,246,248,0.9)]">
                    Structural. Quiet. Insulating.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="#cta" className="btn-primary">
                    Request Partnership Deck
                  </a>
                  <a href="#sound" className="btn-secondary">
                    See Performance Data
                  </a>
                </div>
                <div className="flex flex-wrap gap-3">
                  <StatChip value="290M+" label="tires/yr (US)" />
                  <StatChip value="STC 48–52" label="standard assembly" />
                  <StatChip value="~R-3.0" label="per inch" />
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="glass-card card-hover h-full p-4">
                  <GalleryTrigger
                    index={galleryIndex}
                    alt="R-Board brand monolith"
                    className="relative aspect-[4/5] overflow-hidden rounded-2xl"
                  >
                    <Image
                      src="/media/rboard-mark-monolith.jpg"
                      alt="R-Board brand monolith"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                    />
                  </GalleryTrigger>
                  <p className="mt-4 text-sm text-[var(--text-muted)]">
                    Engineered recycled rubber composite panel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
