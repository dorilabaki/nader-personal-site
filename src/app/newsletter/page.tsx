import { Mail, CheckCircle, ArrowRight, Users, Zap, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Building Leverage Newsletter - Nader Alnajjar",
  description:
    "The weekly newsletter for founders who want systems, not fluff. Tools, processes, and breakdowns from LeverBrands. Every Sunday.",
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
    title: "2,000+ Founders Read It",
    description:
      "Join a community of ambitious founders who are building leverage through content and personal brand.",
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
  "AEO and AI visibility",
  "Scaling an agency",
];

export default function NewsletterPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light via-background to-background" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-border text-sm text-muted mb-8">
            <Mail size={14} className="text-accent" />
            Every Sunday
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="highlight-underline">Building Leverage</span>.
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-10">
            The weekly newsletter for founders who want systems, not fluff. The
            exact tools, processes, and breakdowns we use at LeverBrands to turn
            invisible founders into known authorities.
          </p>

          {/* GoHighLevel Newsletter Embed */}
          <div className="max-w-lg">
            <div className="bg-surface rounded-2xl border border-border p-8 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Subscribe for free</h3>
              <p className="text-sm text-muted mb-6">
                Join 2,000+ founders. No spam. Unsubscribe anytime.
              </p>

              {/*
                GoHighLevel Integration:
                Replace this form with your GHL form embed.
                Option 1: iframe embed from GHL
                Option 2: POST to your GHL webhook endpoint
                Option 3: Use GHL's JS snippet
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
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-3 bg-accent text-white rounded-xl font-medium text-sm hover:bg-accent-dark transition-colors cursor-pointer"
                >
                  <Mail size={16} />
                  Subscribe to Building Leverage
                </button>
              </form>
              <p className="text-xs text-muted mt-4">
                By subscribing you agree to receive emails from Nader Alnajjar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-surface rounded-2xl border border-border p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center mb-6">
                <benefit.icon size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                What's Inside
              </p>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Every issue gives you something you can use immediately.
              </h2>
              <p className="text-muted leading-relaxed">
                No filler. No "5 tips for success." Real breakdowns of what
                actually works for personal branding, LinkedIn growth, AI tools,
                and turning attention into revenue.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {topics.map((topic) => (
                <div
                  key={topic}
                  className="flex items-start gap-2.5 text-sm"
                >
                  <CheckCircle
                    size={16}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          The tools and playbooks that built $10M+ in client revenue.
        </h2>
        <p className="text-muted mb-8 max-w-md mx-auto">
          Delivered to your inbox every Sunday. Free.
        </p>
        <a
          href="https://resources.leverbrands.com/newsletter"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-foreground text-white rounded-xl font-medium text-sm hover:bg-foreground/90 transition-colors cursor-pointer"
        >
          Subscribe Now
          <ArrowRight size={16} />
        </a>
      </section>
    </div>
  );
}
