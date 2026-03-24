import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

export const metadata = {
  title: "My Story - Nader Alnajjar",
  description:
    "From aerospace engineering to building LeverBrands. The full story of how a COVID lockdown side project became a 30-person agency.",
};

export default function StoryPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light via-background to-background" />
        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            The Story
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            From rocket science to{" "}
            <span className="highlight-underline">building leverage</span>.
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl">
            How an aerospace engineer and a flatmate with a LinkedIn account
            accidentally built one of the fastest-growing personal branding
            agencies in the UK.
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="prose-custom space-y-12">
          {/* Chapter 1 */}
          <div>
            <span className="text-xs font-mono text-accent uppercase tracking-wider">
              Chapter 01
            </span>
            <h2 className="text-2xl font-bold mt-2 mb-4">The Engineer</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I'm Nader. Pronounced like Ladder, but with an N.
              </p>
              <p>
                I studied Aerospace Engineering at the University of Bath. Five
                years. First Class Honours. I learned how to think in systems,
                break complex problems into components, and build things that
                work under pressure.
              </p>
              <p>
                After graduating in 2019, I joined M&G plc as a Quantitative
                Analyst. For five years I built tools and automations for equity
                and fixed income analysts. I learned to take messy data and turn
                it into clear decisions. To automate the boring stuff so smart
                people could focus on what mattered.
              </p>
              <p>
                That engineering brain never left. It just found a different
                application.
              </p>
            </div>
          </div>

          {/* Chapter 2 */}
          <div>
            <span className="text-xs font-mono text-accent uppercase tracking-wider">
              Chapter 02
            </span>
            <h2 className="text-2xl font-bold mt-2 mb-4">The Lockdown</h2>
            <div className="space-y-4 text-muted leading-relaxed">
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

          {/* Quote */}
          <div className="bg-surface border border-border rounded-2xl p-8 my-12">
            <Quote size={24} className="text-accent mb-4" />
            <blockquote className="text-xl font-semibold leading-relaxed">
              Your personal brand isn't vanity. It's your voice. When brilliant
              people gain visibility and tell their story effectively, doors
              open. Opportunities find you. The right people want to work with
              you.
            </blockquote>
          </div>

          {/* Chapter 3 */}
          <div>
            <span className="text-xs font-mono text-accent uppercase tracking-wider">
              Chapter 03
            </span>
            <h2 className="text-2xl font-bold mt-2 mb-4">
              The Birth of LeverBrands
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
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
                In August 2024, I founded LeverBrands. The idea was simple.
                Most founders are REALLY good at what they do. But the people
                who should be buying from them have no idea they exist. They're
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
            <span className="text-xs font-mono text-accent uppercase tracking-wider">
              Chapter 04
            </span>
            <h2 className="text-2xl font-bold mt-2 mb-4">
              The System That Scales
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                We think in three layers:
              </p>
              <div className="bg-surface-alt rounded-xl p-6 space-y-4 text-foreground">
                <div>
                  <span className="font-bold text-accent">
                    Layer 1: Attention.
                  </span>{" "}
                  Get in front of the right people through LinkedIn content,
                  distribution, short-form video, and targeted outreach.
                </div>
                <div>
                  <span className="font-bold text-amber-600">
                    Layer 2: Nurture.
                  </span>{" "}
                  Without a system, you're entertaining strangers. We build
                  newsletters, funnels, and email sequences that de-platform
                  your audience and nurture them until they're ready to buy.
                </div>
                <div>
                  <span className="font-bold text-emerald-600">
                    Layer 3: Monetisation.
                  </span>{" "}
                  We help you turn that audience into actual revenue. Inbound
                  leads, digital product sales, consulting, speaking gigs, or
                  partnerships.
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
            <span className="text-xs font-mono text-accent uppercase tracking-wider">
              Chapter 05
            </span>
            <h2 className="text-2xl font-bold mt-2 mb-4">What's Next</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                The game is shifting. AI search engines like ChatGPT,
                Perplexity, and Claude are changing how people find information.
                The founders and brands that show up in those answers will win.
                The ones that don't will be invisible to an entirely new
                generation of buyers.
              </p>
              <p>
                I'm building at the intersection of personal branding and AI
                visibility. Answer Engine Optimisation. Making sure the right
                people don't just see you - they hear about you from the AI
                their customers trust.
              </p>
              <p>
                This is 2003 SEO all over again. And the window won't stay open
                forever.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-border text-center">
          <h3 className="text-2xl font-bold mb-4">
            Want to build some leverage?
          </h3>
          <p className="text-muted mb-8 max-w-md mx-auto">
            Whether you want to work together or just stay in the loop, there's
            a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-foreground text-white rounded-xl font-medium text-sm hover:bg-foreground/90 transition-colors cursor-pointer"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/newsletter"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-surface border border-border rounded-xl font-medium text-sm hover:border-foreground/20 transition-colors cursor-pointer"
            >
              Read Building Leverage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
