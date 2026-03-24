import Link from "next/link";
import {
  ArrowRight,
  Rocket,
  Users,
  Eye,
  TrendingUp,
  Mail,
  Zap,
  Target,
  DollarSign,
} from "lucide-react";
import { LinkedinIcon } from "@/components/icons";

const stats = [
  { value: "500M+", label: "LinkedIn Impressions", icon: Eye },
  { value: "40K+", label: "Followers", icon: Users },
  { value: "$10M+", label: "Client Revenue Driven", icon: DollarSign },
  { value: "30+", label: "Team Members", icon: Rocket },
];

const results = [
  {
    name: "Chris Donnelly",
    result: "3M+ followers, $10M/year business, AI SaaS at $60K MRR in 14 days",
  },
  {
    name: "Rohan Sheth",
    result: "2K to 100K followers in 10 months, $300K ARR - zero cold outreach",
  },
  {
    name: "B2B SaaS Founder",
    result: "6 qualified inbound leads/week from a lead magnet funnel - no ads",
  },
  {
    name: "Platform Founder",
    result: "1.3M impressions in first 30 days posting",
  },
];

const layers = [
  {
    number: "01",
    title: "Attention",
    description:
      "Get in front of the right people through LinkedIn content, distribution, short-form video, and targeted outreach.",
    icon: Eye,
    color: "bg-orange-50 text-accent",
  },
  {
    number: "02",
    title: "Nurture",
    description:
      "Build newsletters, funnels, and email sequences that de-platform your audience and nurture them until they're ready to buy.",
    icon: Target,
    color: "bg-amber-50 text-amber-600",
  },
  {
    number: "03",
    title: "Monetisation",
    description:
      "Turn attention into revenue. Inbound leads, digital products, consulting, speaking gigs, or partnerships.",
    icon: TrendingUp,
    color: "bg-emerald-50 text-emerald-600",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light via-background to-background" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-border text-sm text-muted mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Founder of LeverBrands
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Most founders are{" "}
              <span className="highlight-underline">invisible</span>.
              <br />
              <span className="text-gradient">I fix that.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl mb-10">
              I help ambitious founders build leverage through personal brand and
              personal brand. Turning expertise into authority, and attention into
              revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-foreground text-white rounded-xl font-medium text-sm hover:bg-foreground/90 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Work With Me
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/newsletter"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-surface border border-border text-foreground rounded-xl font-medium text-sm hover:border-foreground/20 transition-all cursor-pointer"
              >
                <Mail size={16} />
                Subscribe to Building Leverage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center">
                    <stat.icon size={18} className="text-accent" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Quick */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              The Story
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              From aerospace engineer to building brands that print revenue.
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I graduated with a First Class MEng in Aerospace Engineering
                from the University of Bath. Then spent 5 years as a
                Quantitative Analyst at M&G, building tools and automations for
                equity and fixed income teams.
              </p>
              <p>
                But during COVID lockdown, my flatmate Chris Donnelly and I
                started building his LinkedIn from scratch. The strategies we
                developed grew into something much bigger.
              </p>
              <p>
                That side project became LeverBrands. We went from 1 person to
                30+ employees in under two years. Now we help founders turn
                their expertise into authority and their attention into real
                money.
              </p>
            </div>
            <Link
              href="/story"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-accent hover:text-accent-dark transition-colors cursor-pointer"
            >
              Read the full story
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="bg-surface rounded-2xl border border-border p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center text-white text-xl font-bold">
                  N
                </div>
                <div>
                  <div className="font-bold text-lg">Nader Alnajjar</div>
                  <div className="text-sm text-muted">
                    Pronounced like Ladder, but with an N
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Rocket size={16} className="text-accent" />
                  <span>Founder of LeverBrands</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <LinkedinIcon size={16} className="text-accent" />
                  <span>40,653 followers</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Zap size={16} className="text-accent" />
                  <span>500M+ impressions generated</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <TrendingUp size={16} className="text-accent" />
                  <span>$10M+ client revenue driven</span>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-accent/10" />
          </div>
        </div>
      </section>

      {/* The 3 Layers */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              The System
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Three layers that turn attention into money in your pocket.
            </h2>
            <p className="text-muted">
              Most agencies post for you and call it a day. We build the
              infrastructure underneath.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {layers.map((layer) => (
              <div
                key={layer.number}
                className="group bg-background rounded-2xl border border-border p-8 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${layer.color} flex items-center justify-center mb-6`}
                >
                  <layer.icon size={20} />
                </div>
                <div className="text-xs font-mono text-muted mb-2">
                  LAYER {layer.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{layer.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {layer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Results
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            I'll let the results speak for themselves.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {results.map((item) => (
            <div
              key={item.name}
              className="bg-surface rounded-2xl border border-border p-8 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-light flex items-center justify-center">
                  <DollarSign size={16} className="text-accent" />
                </div>
                <span className="font-bold">{item.name}</span>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                {item.result}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-foreground text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Building Leverage
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              The newsletter for founders who want systems, not fluff.
            </h2>
            <p className="text-white/60 mb-8">
              Every Sunday. The exact tools, processes, and breakdowns we use at
              LeverBrands. 2,000+ founders read it weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <Link
                href="/newsletter"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white rounded-xl font-medium text-sm hover:bg-accent-dark transition-colors cursor-pointer"
              >
                <Mail size={16} />
                Subscribe Free
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 text-white rounded-xl font-medium text-sm hover:bg-white/15 transition-colors cursor-pointer"
              >
                Free Resources
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
