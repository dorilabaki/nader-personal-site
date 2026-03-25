import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Rocket,
  Users,
  Eye,
  TrendingUp,
  Mail,
  Target,
  DollarSign,
  ArrowUpRight,
} from "lucide-react";
import { ScrollAnimations } from "@/components/scroll-animations";

const stats = [
  { value: "40K+", label: "Followers", icon: Users },
  { value: "$10M+", label: "Client Revenue", icon: DollarSign },
  { value: "30+", label: "Team Members", icon: Rocket },
];

const results = [
  {
    name: "Chris Donnelly",
    metric: "3M+ followers",
    detail: "$10M/year business. AI SaaS at $60K MRR in 14 days.",
  },
  {
    name: "Rohan Sheth",
    metric: "2K to 100K followers",
    detail: "10 months. $300K ARR. Zero cold outreach.",
  },
  {
    name: "B2B SaaS Founder",
    metric: "6 leads/week",
    detail: "Qualified inbound from a lead magnet funnel. No ads.",
  },
  {
    name: "Platform Founder",
    metric: "1.3M impressions",
    detail: "First 30 days posting. From zero to visible.",
  },
];

const layers = [
  {
    number: "01",
    title: "Attention",
    description:
      "Get in front of the right people through LinkedIn content, distribution, short-form video, and targeted outreach.",
    icon: Eye,
  },
  {
    number: "02",
    title: "Nurture",
    description:
      "Build newsletters, funnels, and email sequences that de-platform your audience and nurture them until they're ready to buy.",
    icon: Target,
  },
  {
    number: "03",
    title: "Monetisation",
    description:
      "Turn attention into revenue. Inbound leads, digital products, consulting, speaking gigs, or partnerships.",
    icon: TrendingUp,
  },
];

export default function Home() {
  return (
    <div>
      <ScrollAnimations />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section data-hero className="relative overflow-hidden border-b border-border min-h-[100svh] md:min-h-0 flex flex-col justify-center">
        {/* Mobile background headshot */}
        <div className="absolute inset-0 md:hidden pointer-events-none">
          <Image
            src="/nader-headshot.png"
            alt=""
            fill
            className="object-cover object-[center_15%] opacity-30"
            aria-hidden="true"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-bg to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-16 md:pt-20 md:pb-28">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left - content */}
            <div data-hero-content>
              {/* Headline */}
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
                Most Founders
                <br />
                Are <span className="italic text-accent">Invisible</span>.
                <br />
                <span className="text-text-secondary">I Fix That.</span>
              </h1>

              {/* Subhead */}
              <p className="text-text-secondary text-lg leading-relaxed max-w-md mb-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
                I help ambitious founders build leverage through personal brand and AI.
                Turning expertise into authority, and attention into revenue.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
                <a
                  href="https://resources.leverbrands.com/work-with-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white rounded-xl font-medium text-sm hover:bg-accent-hover transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  Work With Me
                  <ArrowRight size={16} />
                </a>
                <Link
                  href="/newsletter"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border text-text-primary rounded-xl font-medium text-sm hover:border-border-hover hover:bg-bg-elevated transition-all cursor-pointer"
                >
                  <Mail size={16} className="text-text-muted" />
                  Subscribe to Building Leverage
                </Link>
              </div>
            </div>

            {/* Desktop */}
            <div data-hero-image className="relative hidden md:block">
              <div className="relative min-h-[600px] -my-8">
                <div className="absolute inset-0 rounded-full bg-accent/[0.06] blur-[100px] scale-75 translate-y-12" />
                <Image
                  src="/nader-headshot.png"
                  alt="Nader Alnajjar - Founder of LeverBrands"
                  fill
                  className="object-contain object-center drop-shadow-2xl"
                  sizes="50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div data-line-grow className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-accent/40 via-accent/10 to-transparent" />
      </section>

      {/* ═══════════════════ STATS ═══════════════════ */}
      <section className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} data-stat-value className="group text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <stat.icon
                    size={16}
                    className="text-accent opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="text-xs uppercase tracking-widest text-text-muted font-medium">
                    {stat.label}
                  </span>
                </div>
                <div className="font-display text-4xl md:text-5xl text-text-primary">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ ABOUT ═══════════════════ */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          {/* Left label */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28" data-reveal-left>
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
                The Story
              </span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 leading-[1.1]">
                Turning Invisible
                <br />
                Founders Into
                <br />
                <span className="italic text-accent">Known Authorities</span>.
              </h2>
              <Link
                href="/story"
                className="inline-flex items-center gap-2 mt-8 text-sm text-text-secondary hover:text-accent transition-colors cursor-pointer group"
              >
                Read the full story
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </div>
          </div>

          {/* Right content */}
          <div className="md:col-span-8 space-y-6 text-text-secondary leading-[1.8] text-[15px]">
            <p data-reveal>
              Over the last 6 years, I noticed a big problem with how founders
              build their businesses: most of them are completely invisible.
              They're good at what they do. REALLY good. But the people who
              should be buying from them have no idea they exist.
            </p>
            <p data-reveal>
              During COVID lockdown, my flatmate Chris Donnelly and I started
              building his LinkedIn from scratch. The strategies we developed
              grew into something much bigger.
            </p>
            <p data-reveal>
              That side project became LeverBrands. We went from 1 person to 30+
              employees in under two years. $10M+ in client
              revenue. And we're just getting started.
            </p>
          </div>
        </div>

        {/* Nader & Chris - full width below grid */}
        <div data-image-reveal className="mt-12 relative rounded-2xl overflow-hidden border border-border max-w-3xl mx-auto aspect-[3/2]">
          <Image
            src="/nader-and-chris.jpg"
            alt="Nader Alnajjar and Chris Donnelly - Co-founders of LeverBrands"
            fill
            className="object-cover object-center"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-12 pb-5 px-6">
            <p className="text-white text-sm font-medium">Nader Alnajjar & Chris Donnelly</p>
            <p className="text-white/60 text-xs mt-0.5">Co-founders, LeverBrands</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════ 3 LAYERS ═══════════════════ */}
      <section className="relative border-y border-border overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-xl mb-20" data-reveal-left>
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
              The System
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-[1.1]">
              Three Layers That Turn{" "}
              <span className="italic text-accent">Attention</span>
              <br />
              Into Money in Your Pocket.
            </h2>
            <p className="text-text-secondary mt-6 leading-relaxed">
              Most agencies post for you and call it a day. We build the
              infrastructure underneath.
            </p>
          </div>

          <div data-stagger-cards className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {layers.map((layer) => (
              <div
                key={layer.number}
                className="bg-bg-card p-10 hover:bg-bg-card-hover transition-colors duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono text-accent/60">
                    {layer.number}
                  </span>
                  <div className="flex-1 h-px bg-border" />
                  <layer.icon
                    size={18}
                    className="text-text-muted group-hover:text-accent transition-colors"
                  />
                </div>
                <h3 className="font-display text-2xl mb-3 group-hover:text-accent transition-colors">
                  {layer.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {layer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ RESULTS ═══════════════════ */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-16">
          {/* Left */}
          <div className="md:col-span-4" data-reveal-left>
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
              Results
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-[1.1]">
              I'll Let the
              <br />
              Numbers <span className="italic text-accent">Speak</span>.
            </h2>
          </div>

          {/* Right - results grid */}
          <div className="md:col-span-8">
            <div data-stagger-cards className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
              {results.map((item) => (
                <div
                  key={item.name}
                  className="bg-bg-card p-8 hover:bg-bg-card-hover transition-colors"
                >
                  <span className="text-xs text-text-muted uppercase tracking-wider">
                    {item.name}
                  </span>
                  <div className="font-display text-3xl text-accent mt-2 mb-2">
                    {item.metric}
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ NEWSLETTER CTA ═══════════════════ */}
      <section className="relative border-t border-border overflow-hidden">
        {/* Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-accent/[0.04] blur-[100px]" />

        <div data-newsletter className="relative max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
            Building Leverage
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-[1.1] mb-6">
            The Newsletter for Founders
            <br />
            Who Want <span className="italic text-accent">Systems</span>.
          </h2>
          <p className="text-text-secondary mb-10 max-w-md mx-auto">
            Every Sunday. The exact tools, processes, and breakdowns we use at
            LeverBrands. 2,000+ founders read it weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/newsletter"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white rounded-xl font-medium text-sm hover:bg-accent-hover transition-colors cursor-pointer"
            >
              <Mail size={16} />
              Subscribe Free
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border text-text-primary rounded-xl font-medium text-sm hover:border-border-hover hover:bg-bg-elevated transition-all cursor-pointer"
            >
              Free Resources
              <ArrowRight size={16} className="text-text-muted" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
