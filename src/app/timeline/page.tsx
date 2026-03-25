import Link from "next/link";
import {
  Briefcase,
  Rocket,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { PageAnimations } from "@/components/page-animations";

export const metadata = {
  title: "Timeline - Nader Alnajjar",
  description:
    "The key milestones in building LeverBrands and the Building Leverage brand.",
};

const timeline = [
  {
    year: "2019",
    title: "Quantitative Analyst at M&G plc",
    subtitle: "Full-time, London",
    description:
      "Spent 5 years building tools and automations for analysts. Learned to think in systems, turn messy data into clear decisions, and automate the boring stuff.",
    icon: Briefcase,
    tag: "Career",
  },
  {
    year: "2020",
    title: "The COVID Pivot",
    subtitle: "Brand Manager at CD Ltd (Part-time)",
    description:
      "Locked down in East London with flatmate Chris Donnelly. VERB Brands lost 50% revenue overnight. Instead of retreating, we started building Chris's LinkedIn from scratch.",
    icon: Rocket,
    tag: "Turning Point",
    accent: true,
  },
  {
    year: "2023",
    title: "The Results Compound",
    subtitle: "380M+ impressions milestone",
    description:
      "Chris's brand hit 3M+ followers. A business generating $10M/year. Other founders started asking how we did it.",
    icon: TrendingUp,
    tag: "Growth",
  },
  {
    year: "2024",
    title: "LeverBrands Founded",
    subtitle: "Founder, London",
    description:
      "Left M&G after 5 years to go all-in on the mission: making invisible founders visible. Built a full-service personal branding agency with the 3-layer system.",
    icon: Rocket,
    tag: "Founder",
    accent: true,
  },
  {
    year: "2025",
    title: "30+ Team Members",
    subtitle: "$10M+ client revenue driven",
    description:
      "LeverBrands scaled from 1 to 30+ employees in under two years. Rohan Sheth: 2K to 100K followers in 10 months. B2B SaaS: 6 inbound leads/week with no ads.",
    icon: Users,
    tag: "Scale",
  },
  {
    year: "2026",
    title: "Building Leverage at Scale",
    subtitle: "Newsletter, community, and the next chapter",
    description:
      "Launching the Building Leverage newsletter, expanding the team, and doubling down on helping founders turn personal brand into their most valuable business asset.",
    icon: TrendingUp,
    tag: "Now",
    accent: true,
  },
];

export default function TimelinePage() {
  return (
    <div>
      <PageAnimations />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/[0.04] rounded-full blur-[120px]" />
        <div data-page-hero className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-24">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
            Timeline
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mt-4 mb-6">
            The <span className="italic text-accent">Milestones</span>.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            From lecture halls to boardrooms. Every chapter built on the last.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div data-stagger-list className="space-y-0">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex gap-8 group">
                {/* Node */}
                <div className="relative z-10 flex-shrink-0 mt-1">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-colors ${
                      item.accent
                        ? "bg-accent/10 border-accent/30 text-accent"
                        : "bg-bg-card border-border text-text-muted group-hover:border-border-hover"
                    }`}
                  >
                    <item.icon size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-14">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-accent">
                      {item.year}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full border border-border text-text-muted">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-xl mb-1 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-muted mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div data-reveal className="mt-16 pt-12 border-t border-border text-center">
          <h3 className="font-display text-3xl mb-4">The Next Chapter?</h3>
          <p className="text-text-secondary mb-8 text-sm">
            It might involve working together.
          </p>
          <Link
            href="https://resources.leverbrands.com/work-with-us" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white rounded-xl font-medium text-sm hover:bg-accent-hover transition-colors cursor-pointer"
          >
            Let&apos;s Talk
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
