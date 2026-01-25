import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroBoard from "./components/HeroBoard";
import SectionHeader from "./components/SectionHeader";
import DataCard from "./components/DataCard";
import FeatureCard from "./components/FeatureCard";
import ComparisonCard from "./components/ComparisonCard";
import GlassCard from "./components/GlassCard";
import MeterBar from "./components/MeterBar";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import GalleryProvider, { type GalleryImage } from "./components/GalleryProvider";
import GalleryTrigger from "./components/GalleryTrigger";

const galleryImages: GalleryImage[] = [
  {
    src: "/media/rboard-mark-monolith.jpg",
    alt: "R-Board brand monolith",
  },
  {
    src: "/media/installing-rboard-wall.jpg",
    alt: "Engineers installing R-Board on a wall",
  },
  {
    src: "/media/factory-rboard-stack.jpg",
    alt: "Factory with R-Board panels stacked",
  },
  {
    src: "/media/sound-reduction-comparison.jpg",
    alt: "Sound reduction comparison",
  },
  {
    src: "/media/insulation-comparison.jpg",
    alt: "Insulating factor comparison",
  },
  {
    src: "/media/energy-savings-30y.jpg",
    alt: "Cumulative energy savings over 30 years",
  },
  {
    src: "/media/rboard-fastening-drill.jpg",
    alt: "Engineer drilling fasteners into R-Board",
  },
];

export default function Home() {
  return (
    <GalleryProvider images={galleryImages}>
      <div className="relative">
        <Navbar />
        <main className="relative">
          <HeroBoard galleryIndex={0} />

        <section id="problem" className="section">
          <div className="container">
            <Reveal>
              <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6">
                  <SectionHeader title="The Problem" />
                  <p className="max-w-[68ch] text-base text-[var(--text-muted)]">
                    Over 290 million tires are discarded annually in the United States alone, with more than 1 billion discarded globally each year. Tires do not biodegrade. They accumulate in landfills and illegal stockpiles, creating fire hazards, toxic runoff, and permanent environmental damage.
                  </p>
                  <p className="max-w-[68ch] text-base text-[var(--text-muted)]">
                    At the same time, modern buildings rely on materials that provide limited sound insulation, poor moisture resilience, and require multiple layers to achieve comfort and safety.
                  </p>
                </div>
                <div className="grid gap-6">
                  <DataCard
                    value="290M+"
                    label="tires discarded annually in the United States alone"
                  />
                  <DataCard
                    value="1B+"
                    label="tires discarded globally each year"
                  />
                  <GlassCard className="px-6 py-6" accent="top">
                    <p className="text-sm text-[var(--text-muted)]">
                      Tires do not biodegrade. They accumulate in landfills and illegal stockpiles, creating fire hazards, toxic runoff, and permanent environmental damage.
                    </p>
                  </GlassCard>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="solution" className="section">
          <div className="container">
            <Reveal>
              <div className="space-y-10">
                <SectionHeader
                  title="The Solution: R-Board®"
                  lead="R-Board® converts end-of-life tires into high-performance structural panels for walls, floors, and roofs."
                />
                <p className="max-w-[70ch] text-base text-[var(--text-muted)]">
                  By engineering recycled rubber into a dense composite, R-Board® replaces traditional sheathing while delivering superior acoustic, thermal, moisture, and impact performance.
                </p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <FeatureCard
                    title="Acoustic"
                    body="Superior acoustic performance."
                    icon={
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                      >
                        <path
                          d="M4 12c0-3.3 2.7-6 6-6"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M4 12c0 3.3 2.7 6 6 6"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M12 5c3.9 0 7 3.1 7 7s-3.1 7-7 7"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    }
                  />
                  <FeatureCard
                    title="Thermal"
                    body="Superior thermal performance."
                    icon={
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                      >
                        <path
                          d="M12 3v10"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M7 14a5 5 0 0 0 10 0"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M9 6h6"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    }
                  />
                  <FeatureCard
                    title="Moisture"
                    body="Superior moisture performance."
                    icon={
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                      >
                        <path
                          d="M12 4s5 5.3 5 9a5 5 0 1 1-10 0c0-3.7 5-9 5-9Z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    }
                  />
                  <FeatureCard
                    title="Impact"
                    body="Superior impact performance."
                    icon={
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                      >
                        <path
                          d="M7 7l10 10"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M9 4h3"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M4 9v3"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M14 20h3"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    }
                  />
                </div>
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                  <GlassCard className="card-hover p-4" accent="bottom">
                    <GalleryTrigger
                      index={1}
                      alt="Engineers installing R-Board on a wall"
                      className="relative aspect-[16/10] overflow-hidden rounded-2xl"
                    >
                      <Image
                        src="/media/installing-rboard-wall.jpg"
                        alt="Engineers installing R-Board on a wall"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                    </GalleryTrigger>
                    <p className="mt-4 text-sm text-[var(--text-muted)]">
                      By engineering recycled rubber into a dense composite, R-Board® replaces traditional sheathing while delivering superior acoustic, thermal, moisture, and impact performance.
                    </p>
                  </GlassCard>
                  <GlassCard className="px-6 py-6" accent="top">
                    <p className="text-base text-[var(--text-muted)]">
                      R-Board® converts end-of-life tires into high-performance structural panels for walls, floors, and roofs.
                    </p>
                  </GlassCard>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="impact" className="section">
          <div className="container">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6">
                  <SectionHeader title="Environmental Impact at Scale" />
                  <div className="grid gap-6">
                    <GlassCard className="card-hover px-6 py-6" accent="top">
                      <p className="text-sm text-[var(--text-muted)]">
                        Each average home diverts approximately 1,000–1,500 pounds of waste tires
                      </p>
                    </GlassCard>
                    <GlassCard className="card-hover px-6 py-6" accent="top">
                      <p className="text-sm text-[var(--text-muted)]">
                        Large-scale adoption could eliminate millions of tires from landfills annually
                      </p>
                    </GlassCard>
                    <GlassCard className="card-hover px-6 py-6" accent="top">
                      <p className="text-sm text-[var(--text-muted)]">
                        Reduced material layers lowers embodied carbon and construction waste
                      </p>
                    </GlassCard>
                  </div>
                </div>
                <div className="space-y-6">
                  <GlassCard className="space-y-6 px-6 py-6" accent="bottom">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(255,255,255,0.5)]">
                      Impact indicators
                    </p>
                    <MeterBar
                      label="Average home diversion"
                      value="1,000–1,500 lbs"
                      percent={72}
                    />
                    <MeterBar
                      label="Landfill reduction"
                      value="Millions of tires"
                      percent={64}
                    />
                    <MeterBar
                      label="Embodied carbon"
                      value="Reduced layers"
                      percent={58}
                    />
                  </GlassCard>
                  <GlassCard className="card-hover p-4" accent="top">
                    <GalleryTrigger
                      index={2}
                      alt="Factory with R-Board panels stacked"
                      className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                    >
                      <Image
                        src="/media/factory-rboard-stack.jpg"
                        alt="Factory with R-Board panels stacked"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 35vw, 100vw"
                      />
                    </GalleryTrigger>
                    <p className="mt-4 text-sm text-[var(--text-muted)]">
                      Large-scale adoption could eliminate millions of tires from landfills annually.
                    </p>
                  </GlassCard>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="sound" className="section">
          <div className="container">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6">
                  <SectionHeader title="Sound Deadening Performance" />
                  <ComparisonCard
                    title="Assembly comparison"
                    rows={[
                      {
                        label: "Standard OSB wall assembly",
                        value: "STC 33–35",
                      },
                      {
                        label: "R-Board® Standard assembly",
                        value: "STC 48–52",
                        highlight: true,
                      },
                      {
                        label: "Enhanced R-Board® assemblies",
                        value: "STC 55+",
                      },
                    ]}
                  />
                </div>
                <div className="space-y-6">
                  <GlassCard className="card-hover p-4" accent="top">
                    <GalleryTrigger
                      index={3}
                      alt="Sound reduction comparison"
                      className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                    >
                      <Image
                        src="/media/sound-reduction-comparison.jpg"
                        alt="Sound reduction comparison"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 35vw, 100vw"
                      />
                    </GalleryTrigger>
                  </GlassCard>
                  <GlassCard className="px-6 py-6" accent="bottom">
                    <p className="text-sm text-[var(--text-primary)]">
                      Real-world indoor noise reduction near highways is estimated at 20–30 dB, representing a 70–85% reduction in perceived noise.
                    </p>
                  </GlassCard>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="insulation" className="section">
          <div className="container">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6">
                  <SectionHeader
                    title="Insulation & Energy Performance"
                    lead="R-Board® contributes meaningful thermal resistance:"
                  />
                  <div className="grid gap-6 sm:grid-cols-2">
                    <DataCard
                      value="~R-1.5"
                      label="Rubber composite per inch"
                    />
                    <DataCard
                      value="~R-3.0"
                      label="Rubber + textile fiber per inch"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <GlassCard className="px-6 py-6" accent="top">
                    <p className="text-base text-[var(--text-muted)]">
                      Integrated panels reduce thermal bridging and improve building envelope efficiency.
                    </p>
                  </GlassCard>
                  <GlassCard className="card-hover p-4" accent="bottom">
                    <GalleryTrigger
                      index={4}
                      alt="Insulating factor comparison"
                      className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                    >
                      <Image
                        src="/media/insulation-comparison.jpg"
                        alt="Insulating factor comparison"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 35vw, 100vw"
                      />
                    </GalleryTrigger>
                  </GlassCard>
                  <GlassCard className="card-hover p-4" accent="bottom">
                    <GalleryTrigger
                      index={5}
                      alt="Cumulative energy savings over 30 years"
                      className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                    >
                      <Image
                        src="/media/energy-savings-30y.jpg"
                        alt="Cumulative energy savings over 30 years"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 35vw, 100vw"
                      />
                    </GalleryTrigger>
                  </GlassCard>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="shield" className="section">
          <div className="container">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6">
                  <SectionHeader title="Ballistic-Resistant Option (R-Board® Shield)" />
                  <p className="max-w-[70ch] text-base text-[var(--text-muted)]">
                    R-Board® Shield integrates a ballistic-resistant fabric layer to mitigate small-arms projectile threats. Rubber layers dissipate energy while the fabric captures and spreads impact forces.
                  </p>
                  <GlassCard
                    className="border border-[rgba(255,255,255,0.18)] bg-[rgba(12,16,22,0.7)] px-6 py-6"
                    accent="bottom"
                  >
                    <p className="text-sm text-[var(--text-muted)]">
                      R-Board® Shield integrates a ballistic-resistant fabric layer to mitigate small-arms projectile threats.
                    </p>
                  </GlassCard>
                </div>
                <GlassCard className="card-hover p-4" accent="top">
                  <GalleryTrigger
                    index={6}
                    alt="Engineer drilling fasteners into R-Board"
                    className="relative aspect-[4/5] overflow-hidden rounded-2xl"
                  >
                    <Image
                      src="/media/rboard-fastening-drill.jpg"
                      alt="Engineer drilling fasteners into R-Board"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 35vw, 100vw"
                    />
                  </GalleryTrigger>
                  <p className="mt-4 text-sm text-[var(--text-muted)]">
                    Rubber layers dissipate energy while the fabric captures and spreads impact forces.
                  </p>
                </GlassCard>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="durability" className="section">
          <div className="container">
            <Reveal>
              <div className="space-y-8">
                <SectionHeader title="Durability & Moisture Resistance" />
                <p className="max-w-[70ch] text-base text-[var(--text-muted)]">
                  R-Board® does not swell, rot, or delaminate when exposed to moisture. The hydrophobic rubber core resists mold growth and maintains long-term structural stability.
                </p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Does not swell",
                    "Does not rot",
                    "Does not delaminate",
                    "Hydrophobic rubber core resists mold growth",
                    "Maintains long-term structural stability",
                  ].map((item) => (
                    <GlassCard key={item} className="card-hover px-5 py-6" accent="top">
                      <p className="text-sm text-[var(--text-primary)]">{item}</p>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="disruption" className="section">
          <div className="container">
            <Reveal>
              <div className="space-y-8">
                <SectionHeader title="Why This Disrupts Construction" />
                <p className="max-w-[70ch] text-base text-[var(--text-muted)]">
                  R-Board® replaces multiple conventional materials with a single high-performance panel, reducing build time, complexity, and lifecycle cost while improving occupant comfort and safety.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Replaces multiple conventional materials",
                    "Reduces build time",
                    "Reduces complexity",
                    "Lowers lifecycle cost",
                    "Improves occupant comfort and safety",
                  ].map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <CTASection />
        </main>
        <Footer />
      </div>
    </GalleryProvider>
  );
}
