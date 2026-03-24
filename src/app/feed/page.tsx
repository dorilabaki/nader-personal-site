import { ExternalLink, ArrowRight } from "lucide-react";
import { LinkedinIcon, YoutubeIcon } from "@/components/icons";
import Link from "next/link";

export const metadata = {
  title: "Feed - Nader Alnajjar",
  description:
    "Latest content from Nader Alnajjar across LinkedIn and YouTube.",
};

const linkedinPosts = [
  {
    hook: "Every founder feels too busy for content... Until they see what it makes possible.",
    preview:
      "Most founders don't have a content problem. They have a systems problem. Here's the fix.",
    engagement: "High",
    pillar: "Content Strategy",
  },
  {
    hook: "Followers don't pay bills. Email subscribers do.",
    preview:
      "You're building an audience on rented land. Here's how to de-platform them into a revenue engine.",
    engagement: "High",
    pillar: "Brand Infrastructure",
  },
  {
    hook: "The secret behind 380M+ impressions on LinkedIn.",
    preview:
      "It wasn't luck. It wasn't hacks. It was a system built on three layers of leverage.",
    engagement: "High",
    pillar: "Case Study",
  },
  {
    hook: "Thousands of people are cancelling their ChatGPT subscriptions right now.",
    preview:
      "Claude is the reason why. Here's what's actually happening in the AI tool space.",
    engagement: "High",
    pillar: "AI & Tools",
  },
  {
    hook: "We went from 1 person to 30+ employees in less than two years.",
    preview:
      "Here are 6 lessons I wish someone had told me before scaling an agency.",
    engagement: "High",
    pillar: "Agency Journey",
  },
  {
    hook: "You'll never feel ready. But you'll always wish you'd started sooner.",
    preview:
      "Stop waiting for the perfect moment. The cold water doesn't get warmer if you jump late.",
    engagement: "High",
    pillar: "Mindset",
  },
  {
    hook: "Dr. Julie went from 0 to 10 million followers.",
    preview:
      "She did it by doing 1 thing extremely well. Here's the breakdown.",
    engagement: "High",
    pillar: "Case Study",
  },
  {
    hook: "We built a prompt that removes AI slop.",
    preview:
      "This is 10x better than anything else I've seen. Your content will actually sound like you.",
    engagement: "High",
    pillar: "AI & Tools",
  },
];

const pillarColors: Record<string, string> = {
  "Content Strategy": "bg-blue-50 text-blue-600",
  "Brand Infrastructure": "bg-accent-light text-accent",
  "Case Study": "bg-emerald-50 text-emerald-600",
  "AI & Tools": "bg-purple-50 text-purple-600",
  "Agency Journey": "bg-amber-50 text-amber-600",
  Mindset: "bg-rose-50 text-rose-600",
};

export default function FeedPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light via-background to-background" />
        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Feed
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Latest <span className="highlight-underline">content</span>.
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl">
            What I'm posting, sharing, and building in public. Straight from
            LinkedIn and YouTube.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/nader-alnajjar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#0A66C2] text-white rounded-xl font-medium text-sm hover:bg-[#004182] transition-colors cursor-pointer"
          >
            <LinkedinIcon size={16} />
            Follow on LinkedIn
            <ExternalLink size={14} />
          </a>
          <a
            href="https://www.youtube.com/@naderalnajjar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#FF0000] text-white rounded-xl font-medium text-sm hover:bg-[#CC0000] transition-colors cursor-pointer"
          >
            <YoutubeIcon size={16} />
            Subscribe on YouTube
            <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* LinkedIn Posts */}
      <section className="max-w-6xl mx-auto px-6 py-8 pb-20">
        <div className="flex items-center gap-3 mb-8">
          <LinkedinIcon size={20} className="text-[#0A66C2]" />
          <h2 className="text-2xl font-bold">Recent LinkedIn Posts</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {linkedinPosts.map((post, index) => (
            <a
              key={index}
              href="https://www.linkedin.com/in/nader-alnajjar/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-surface rounded-2xl border border-border p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    pillarColors[post.pillar] || "bg-surface-alt text-muted"
                  }`}
                >
                  {post.pillar}
                </span>
                <ExternalLink
                  size={14}
                  className="text-muted group-hover:text-accent transition-colors"
                />
              </div>
              <h3 className="font-bold text-base leading-snug mb-2 group-hover:text-accent transition-colors">
                {post.hook}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {post.preview}
              </p>
            </a>
          ))}
        </div>

        {/* YouTube Section */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <YoutubeIcon size={20} className="text-[#FF0000]" />
            <h2 className="text-2xl font-bold">YouTube</h2>
          </div>

          <div className="bg-surface rounded-2xl border border-border p-12 text-center">
            <YoutubeIcon size={48} className="text-muted/30 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
            <p className="text-muted text-sm max-w-md mx-auto mb-6">
              Video content is on the way. Subscribe to be the first to know
              when new episodes drop.
            </p>
            <a
              href="https://www.youtube.com/@naderalnajjar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#FF0000] text-white rounded-xl font-medium text-sm hover:bg-[#CC0000] transition-colors cursor-pointer"
            >
              <YoutubeIcon size={16} />
              Subscribe
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-border text-center">
          <h3 className="text-2xl font-bold mb-4">
            Want the full playbook, not just the posts?
          </h3>
          <p className="text-muted mb-8 max-w-md mx-auto">
            Building Leverage goes deeper. Every Sunday. The exact tools and
            systems we use at LeverBrands.
          </p>
          <Link
            href="/newsletter"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-foreground text-white rounded-xl font-medium text-sm hover:bg-foreground/90 transition-colors cursor-pointer"
          >
            Subscribe to Building Leverage
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
