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
    preview: "Most founders don't have a content problem. They have a systems problem.",
    pillar: "Content Strategy",
  },
  {
    hook: "Followers don't pay bills. Email subscribers do.",
    preview: "You're building an audience on rented land. Here's how to de-platform them.",
    pillar: "Brand Infrastructure",
  },
  {
    hook: "The secret behind 380M+ impressions on LinkedIn.",
    preview: "It wasn't luck. It wasn't hacks. It was a system built on three layers.",
    pillar: "Case Study",
  },
  {
    hook: "Thousands of people are cancelling their ChatGPT subscriptions right now.",
    preview: "Claude is the reason why. Here's what's actually happening.",
    pillar: "AI & Tools",
  },
  {
    hook: "We went from 1 person to 30+ employees in less than two years.",
    preview: "Here are 6 lessons I wish someone had told me before scaling.",
    pillar: "Agency Journey",
  },
  {
    hook: "You'll never feel ready. But you'll always wish you'd started sooner.",
    preview: "The cold water doesn't get warmer if you jump late.",
    pillar: "Mindset",
  },
  {
    hook: "Dr. Julie went from 0 to 10 million followers.",
    preview: "She did it by doing 1 thing extremely well.",
    pillar: "Case Study",
  },
  {
    hook: "We built a prompt that removes AI slop.",
    preview: "This is 10x better than anything else I've seen.",
    pillar: "AI & Tools",
  },
];

export default function FeedPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/[0.04] rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-24">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
            Feed
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mt-4 mb-6">
            Latest <span className="italic text-accent">content</span>.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mb-8">
            What I'm posting, sharing, and building in public.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/nader-alnajjar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A66C2] text-white rounded-xl text-sm font-medium hover:bg-[#004182] transition-colors cursor-pointer"
            >
              <LinkedinIcon size={14} />
              Follow on LinkedIn
              <ExternalLink size={12} />
            </a>
            <a
              href="https://www.youtube.com/@naderalnajjar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF0000] text-white rounded-xl text-sm font-medium hover:bg-[#CC0000] transition-colors cursor-pointer"
            >
              <YoutubeIcon size={14} />
              Subscribe on YouTube
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* LinkedIn Posts */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-10">
          <LinkedinIcon size={18} className="text-[#0A66C2]" />
          <h2 className="font-display text-2xl">Recent LinkedIn Posts</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
          {linkedinPosts.map((post, index) => (
            <a
              key={index}
              href="https://www.linkedin.com/in/nader-alnajjar/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bg-card p-8 hover:bg-bg-card-hover transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] px-2.5 py-1 rounded-full border border-border text-text-muted">
                  {post.pillar}
                </span>
                <ExternalLink
                  size={12}
                  className="text-text-muted group-hover:text-accent transition-colors"
                />
              </div>
              <h3 className="font-semibold text-[15px] text-text-primary leading-snug mb-2 group-hover:text-accent transition-colors">
                {post.hook}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {post.preview}
              </p>
            </a>
          ))}
        </div>

        {/* YouTube */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-10">
            <YoutubeIcon size={18} className="text-[#FF0000]" />
            <h2 className="font-display text-2xl">YouTube</h2>
          </div>

          <div className="bg-bg-card rounded-2xl border border-border p-16 text-center">
            <YoutubeIcon size={40} className="text-text-muted/20 mx-auto mb-4" />
            <h3 className="font-display text-2xl mb-2">Coming Soon</h3>
            <p className="text-text-secondary text-sm max-w-md mx-auto mb-6">
              Video content is on the way. Subscribe to be the first to know.
            </p>
            <a
              href="https://www.youtube.com/@naderalnajjar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF0000] text-white rounded-xl text-sm font-medium hover:bg-[#CC0000] transition-colors cursor-pointer"
            >
              <YoutubeIcon size={14} />
              Subscribe
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 pt-12 border-t border-border text-center">
          <h3 className="font-display text-3xl mb-4">
            Want the full playbook?
          </h3>
          <p className="text-text-secondary mb-8 text-sm max-w-md mx-auto">
            Building Leverage goes deeper. Every Sunday.
          </p>
          <Link
            href="/newsletter"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white rounded-xl font-medium text-sm hover:bg-accent-hover transition-colors cursor-pointer"
          >
            Subscribe to Building Leverage
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
