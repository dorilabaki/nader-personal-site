import { Mail, CheckCircle, ArrowRight, Users, Zap, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Building Leverage Newsletter - Nader Alnajjar",
  description:
    "The weekly newsletter for founders who want systems, not fluff. Every Sunday.",
};

const benefits = [
  {
    icon: Zap,
    title: "Actionable Systems",
    description:
      "Not theory. The exact tools, prompts, and processes we use at LeverBrands to build founder brands.",
  },
  {
    icon: Users,
    title: "2,000+ Founders",
    description:
      "Join a community of ambitious founders building leverage through content and personal brand.",
  },
  {
    icon: Clock,
    title: "Every Sunday",
    description:
      "One email a week. Consistently delivered. No spam. No fluff. Just signal.",
  },
];

const topics = [
  "LinkedIn content strategy",
  "Hook writing frameworks",
  "AI tools for content creation",
  "Building a 3-layer ecosystem",
  "Turning followers into revenue",
  "Newsletter and funnel design",
  "Personal brand positioning",
  "Case studies and breakdowns",
  "Scaling a personal brand agency",
  "Founder mindset and productivity",
];

export default function NewsletterPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-24">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-bg-elevated/60 text-[13px] text-text-secondary mb-8">
                <Mail size={14} className="text-accent" />
                Every Sunday
              </div>

              <h1 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight mb-6">
                <span className="italic text-accent">Building Leverage</span>.
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
                The weekly newsletter for founders who want systems, not fluff.
                The exact tools, processes, and breakdowns we use at LeverBrands.
              </p>
            </div>

            {/* Subscribe form */}
            <div className="bg-bg-card rounded-2xl border border-border p-8">
              <h3 className="font-semibold text-lg text-text-primary mb-2">
                Subscribe for free
              </h3>
              <p className="text-sm text-text-secondary mb-6">
                Join 2,000+ founders. No spam. Unsubscribe anytime.
              </p>

              {/*
                GoHighLevel Integration:
                Replace this form with your GHL form embed or webhook POST.
              */}
              <form
                action="https://resources.leverbrands.com/newsletter"
                method="GET"
                className="space-y-3"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-bg-elevated text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-3 bg-accent text-white rounded-xl font-medium text-sm hover:bg-accent-hover transition-colors cursor-pointer"
                >
                  <Mail size={16} />
                  Subscribe to Building Leverage
                </button>
              </form>
              <p className="text-xs text-text-muted mt-4">
                By subscribing you agree to receive emails from Nader Alnajjar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-bg-card p-10">
              <benefit.icon
                size={20}
                className="text-accent mb-6"
              />
              <h3 className="font-semibold text-text-primary mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Topics */}
      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
                What's Inside
              </span>
              <h2 className="font-display text-3xl md:text-4xl mt-4 leading-[1.1] mb-4">
                Every issue gives you something
                <br />
                you can <span className="italic text-accent">use immediately</span>.
              </h2>
              <p className="text-text-secondary leading-relaxed text-sm">
                No filler. Real breakdowns of what actually works for personal
                branding, LinkedIn growth, and turning attention into revenue.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {topics.map((topic) => (
                <div key={topic} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle
                    size={14}
                    className="text-accent flex-shrink-0 mt-1"
                  />
                  <span className="text-text-secondary">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-accent/[0.04] blur-[80px]" />
        <div className="relative max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="font-display text-3xl md:text-4xl leading-[1.1] mb-4">
            The tools and playbooks that built
            <br />
            $10M+ in client revenue.
          </h2>
          <p className="text-text-secondary mb-8 text-sm">
            Delivered to your inbox every Sunday. Free.
          </p>
          <a
            href="https://resources.leverbrands.com/newsletter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white rounded-xl font-medium text-sm hover:bg-accent-hover transition-colors cursor-pointer"
          >
            Subscribe Now
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
