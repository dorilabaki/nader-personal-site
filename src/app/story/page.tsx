import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";

export const metadata = {
  title: "My Story - Nader Alnajjar",
  description:
    "How a COVID lockdown side project became a 30-person personal branding agency. The full story of LeverBrands.",
};

export default function StoryPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/[0.04] rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-24">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
            The Story
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mt-4 mb-6">
            How a side project became
            <br />
            a <span className="italic text-accent">30-person agency</span>.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            How two flatmates in East London accidentally built one of the
            fastest-growing personal branding agencies in the UK.
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <div className="space-y-16">
          {/* Chapter 1 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono text-accent">01</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <h2 className="font-display text-3xl mb-6">Before LeverBrands</h2>
            <div className="space-y-5 text-text-secondary leading-[1.8]">
              <p>I'm Nader. Pronounced like Ladder, but with an N.</p>
              <p>
                I spent 5 years working in finance at M&G plc, building tools
                and automations for analysts. I learned how to think in systems,
                take messy data and turn it into clear decisions. To automate the
                boring stuff so smart people could focus on what mattered.
              </p>
              <p>
                That systems thinking never left. It just found a different
                application.
              </p>
            </div>
          </div>

          {/* Chapter 2 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono text-accent">02</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <h2 className="font-display text-3xl mb-6">The Lockdown</h2>
            <div className="space-y-5 text-text-secondary leading-[1.8]">
              <p>
                In 2020, COVID hit. I was locked down in East London with my
                flatmate, Chris Donnelly. Chris was running VERB Brands, a
                luxury digital marketing agency. When the pandemic started,
                clients cut budgets. Revenue dropped 50% overnight.
              </p>
              <p>
                Instead of panicking, we got obsessed. We spent every day
                studying personal branding, social media algorithms, AI tools,
                and sales psychology. We started building Chris's LinkedIn
                presence from zero.
              </p>
              <p>
                I managed his account, created content, grew his network. We
                tested everything. What hooks worked. What formats drove
                engagement. What turned followers into actual opportunities.
              </p>
              <p>
                We didn't know it at the time, but those late nights in a flat
                in East London were building the playbook for something much
                bigger.
              </p>
            </div>
          </div>

          {/* Behind the scenes - team collaboration */}
          <div className="rounded-2xl overflow-hidden border border-border">
            <Image
              src="/nader-office-bottom.jpg"
              alt="Nader Alnajjar and team collaborating at LeverBrands"
              width={1200}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Quote */}
          <div className="bg-bg-card rounded-2xl border border-border p-10 my-4">
            <Quote size={20} className="text-accent mb-6" />
            <blockquote className="font-display text-2xl md:text-3xl leading-[1.3] text-text-primary">
              Your personal brand isn't vanity. It's your voice.
            </blockquote>
            <p className="text-text-muted text-sm mt-4">
              When brilliant people gain visibility, doors open.
            </p>
          </div>

          {/* Chapter 3 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono text-accent">03</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <h2 className="font-display text-3xl mb-6">
              The Birth of LeverBrands
            </h2>
            <div className="space-y-5 text-text-secondary leading-[1.8]">
              <p>
                The strategies we developed for Chris worked. Really well. His
                brand grew to 3M+ followers. He built a business generating
                $10M/year. An AI SaaS product that hit $60K MRR in 14 days.
              </p>
              <p>
                Other founders started asking: "How did you do that? Can you
                help me?"
              </p>
              <p>
                In August 2024, I founded LeverBrands. The idea was simple. Most
                founders are REALLY good at what they do. But the people who
                should be buying from them have no idea they exist. They're
                invisible.
              </p>
              <p>
                We don't just post content and call it a day. We build the full
                infrastructure underneath. A system that turns attention into
                money in your pocket.
              </p>
            </div>
          </div>

          {/* Chapter 4 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono text-accent">04</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <h2 className="font-display text-3xl mb-6">
              The System That Scales
            </h2>
            <div className="space-y-5 text-text-secondary leading-[1.8]">
              <p>We think in three layers:</p>
              <div className="bg-bg-elevated rounded-xl border border-border p-6 space-y-5">
                <div>
                  <span className="font-semibold text-accent">
                    Layer 1: Attention.
                  </span>{" "}
                  <span className="text-text-secondary">
                    Get in front of the right people through LinkedIn content,
                    distribution, short-form video, and targeted outreach.
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-gold">
                    Layer 2: Nurture.
                  </span>{" "}
                  <span className="text-text-secondary">
                    Without a system, you're entertaining strangers. We build
                    newsletters, funnels, and email sequences that de-platform
                    your audience.
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-emerald-400">
                    Layer 3: Monetisation.
                  </span>{" "}
                  <span className="text-text-secondary">
                    We help you turn that audience into actual revenue. Inbound
                    leads, digital products, consulting, speaking gigs, or
                    partnerships.
                  </span>
                </div>
              </div>
              <p>
                In less than two years, LeverBrands went from just me to 30+
                employees. We've generated 500M+ impressions and driven $10M+ in
                client revenue. And we're just getting started.
              </p>
            </div>
          </div>

          {/* Chapter 5 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono text-accent">05</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <h2 className="font-display text-3xl mb-6">What's Next</h2>
            <div className="space-y-5 text-text-secondary leading-[1.8]">
              <p>
                The playbook works. But we're not done. The founders who invest
                in personal brand now are building leverage that compounds for
                years. The ones who wait will spend 10x more trying to catch up.
              </p>
              <p>
                I'm focused on scaling LeverBrands, building the Building
                Leverage newsletter into the go-to resource for founder-led
                growth, and helping more ambitious people turn their expertise
                into authority.
              </p>
              <p>The window is wide open. And I'm just getting started.</p>
            </div>
          </div>

          {/* Rory Sutherland */}
          <div className="relative rounded-2xl overflow-hidden border border-border">
            <Image
              src="/nader-and-rory.png"
              alt="Nader Alnajjar with Rory Sutherland, Vice Chairman of Ogilvy"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white text-sm font-medium">With Rory Sutherland</p>
              <p className="text-white/60 text-xs">Vice Chairman of Ogilvy</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 pt-12 border-t border-border text-center">
          <h3 className="font-display text-3xl mb-4">
            Want to build some leverage?
          </h3>
          <p className="text-text-secondary mb-8 max-w-md mx-auto text-sm">
            Whether you want to work together or just stay in the loop, there's
            a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white rounded-xl font-medium text-sm hover:bg-accent-hover transition-colors cursor-pointer"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/newsletter"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border rounded-xl font-medium text-sm text-text-primary hover:border-border-hover hover:bg-bg-elevated transition-all cursor-pointer"
            >
              Read Building Leverage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
