import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Rocket,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Timeline - Nader Alnajjar",
  description:
    "The key milestones from aerospace engineering to founding LeverBrands.",
};

const timeline = [
  {
    year: "2014",
    title: "University of Bath",
    subtitle: "Master of Engineering, Aerospace Engineering",
    description:
      "Started a 5-year MEng degree at one of the UK's top engineering schools. Learned to think in systems, solve complex problems, and build things under pressure.",
    icon: GraduationCap,
    color: "bg-blue-50 text-blue-600",
    tag: "Education",
  },
  {
    year: "2019",
    title: "First Class Honours",
    subtitle: "MEng Aerospace Engineering",
    description:
      "Graduated with First Class I Honours. The engineering mindset - breaking problems into components, automating the boring stuff, building systems that scale - never left.",
    icon: GraduationCap,
    color: "bg-blue-50 text-blue-600",
    tag: "Education",
  },
  {
    year: "2019",
    title: "Quantitative Analyst at M&G plc",
    subtitle: "Full-time, London",
    description:
      "Joined M&G to build tools and automations for equity and fixed income analysts. Spent 5 years turning messy data into clear decisions and saving teams hours of manual work.",
    icon: Briefcase,
    color: "bg-slate-50 text-slate-600",
    tag: "Career",
  },
  {
    year: "2020",
    title: "The COVID Pivot",
    subtitle: "Brand Manager at CD Ltd (Part-time)",
    description:
      "Locked down in East London with flatmate Chris Donnelly. VERB Brands lost 50% revenue overnight. Instead of retreating, we started building Chris's LinkedIn from scratch. Managed his account, created content, grew his network. The strategies we developed became the foundation for everything that followed.",
    icon: Rocket,
    color: "bg-accent-light text-accent",
    tag: "Turning Point",
  },
  {
    year: "2023",
    title: "The Results Compound",
    subtitle: "380M+ impressions milestone",
    description:
      "Chris's brand hit 3M+ followers. A business generating $10M/year. Other founders started asking how we did it. The demand for our approach was undeniable.",
    icon: TrendingUp,
    color: "bg-emerald-50 text-emerald-600",
    tag: "Growth",
  },
  {
    year: "2024",
    title: "LeverBrands Founded",
    subtitle: "Founder, London",
    description:
      "Left M&G after 5 years to go all-in on the mission: making invisible founders visible. Built a full-service personal branding agency with the 3-layer system: Attention, Nurture, Monetisation.",
    icon: Rocket,
    color: "bg-accent-light text-accent",
    tag: "Founder",
  },
  {
    year: "2025",
    title: "30+ Team Members",
    subtitle: "500M+ impressions, $10M+ client revenue",
    description:
      "LeverBrands scaled from 1 to 30+ employees in under two years. Built a team, a system, and a track record. Rohan Sheth: 2K to 100K followers in 10 months. B2B SaaS: 6 inbound leads/week with no ads.",
    icon: Users,
    color: "bg-purple-50 text-purple-600",
    tag: "Scale",
  },
  {
    year: "2026",
    title: "AI Visibility & AEO",
    subtitle: "The next frontier",
    description:
      "Building at the intersection of personal branding and AI search. Answer Engine Optimisation. Making sure founders show up in ChatGPT, Perplexity, Claude, and Gemini. The window is wide open.",
    icon: TrendingUp,
    color: "bg-amber-50 text-amber-600",
    tag: "Now",
  },
];

export default function TimelinePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light via-background to-background" />
        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Timeline
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            The <span className="highlight-underline">milestones</span>.
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl">
            From lecture halls to boardrooms. Every chapter built on the last.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative flex gap-6 md:gap-12 md:even:flex-row-reverse"
              >
                {/* Icon node */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shadow-sm`}
                  >
                    <item.icon size={20} />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-surface rounded-2xl border border-border p-6 hover:border-accent/30 hover:shadow-sm transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-accent font-semibold">
                      {item.year}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-surface-alt text-muted">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted mb-3">{item.subtitle}</p>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-border text-center">
          <h3 className="text-2xl font-bold mb-4">The next chapter?</h3>
          <p className="text-muted mb-8">
            It might involve working together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-foreground text-white rounded-xl font-medium text-sm hover:bg-foreground/90 transition-colors cursor-pointer"
          >
            Let's Talk
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
