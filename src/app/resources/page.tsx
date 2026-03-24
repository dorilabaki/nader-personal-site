import {
  Download,
  FileText,
  ArrowRight,
  Sparkles,
  BookOpen,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Free Resources - Nader Alnajjar",
  description:
    "Free guides, templates, and lead magnets to help you build your personal brand and grow on LinkedIn.",
};

const resources = [
  {
    title: "LinkedIn Starter Pack",
    description:
      "The exact framework to set up your LinkedIn profile, write your first posts, and start building an audience from scratch.",
    type: "Free Guide",
    icon: Sparkles,
    url: "https://resources.leverbrands.com/linkedin-starter-pack",
    featured: true,
  },
  {
    title: "Hook Writing Cheat Sheet",
    description:
      "80% of your post's success depends on the first line. 20+ proven hook templates that earn that click.",
    type: "Cheat Sheet",
    icon: FileText,
    url: "#",
    featured: false,
  },
  {
    title: "Personal Brand Playbook",
    description:
      "The step-by-step guide to building a personal brand that generates inbound leads, speaking opportunities, and partnerships.",
    type: "Guide",
    icon: Lightbulb,
    url: "#",
    featured: false,
  },
  {
    title: "Content Calendar Template",
    description:
      "The exact content planning system we use at LeverBrands. Map out 30 days of LinkedIn content.",
    type: "Template",
    icon: BookOpen,
    url: "#",
    featured: false,
  },
];

export default function ResourcesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/[0.04] rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-24">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
            Resources
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mt-4 mb-6">
            Free <span className="italic text-accent">tools</span> to start
            building.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            Guides, templates, and cheat sheets. Designed to give you a head
            start.
          </p>
        </div>
      </section>

      {/* Resources */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Featured */}
        {resources
          .filter((r) => r.featured)
          .map((resource) => (
            <a
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-bg-card rounded-2xl border border-accent/20 p-10 md:p-14 hover:border-accent/40 transition-all duration-300 cursor-pointer overflow-hidden mb-8"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/[0.04] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent text-white">
                    Most Popular
                  </span>
                  <span className="text-xs text-text-muted">
                    {resource.type}
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl mb-3 group-hover:text-accent transition-colors">
                  {resource.title}
                </h2>
                <p className="text-text-secondary leading-relaxed max-w-xl mb-8">
                  {resource.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Download Free
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </span>
              </div>
            </a>
          ))}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {resources
            .filter((r) => !r.featured)
            .map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target={resource.url === "#" ? undefined : "_blank"}
                rel={resource.url === "#" ? undefined : "noopener noreferrer"}
                className="bg-bg-card p-8 hover:bg-bg-card-hover transition-colors cursor-pointer group"
              >
                <resource.icon
                  size={20}
                  className="text-text-muted group-hover:text-accent transition-colors mb-6"
                />
                <span className="text-[11px] text-text-muted uppercase tracking-wider block mb-2">
                  {resource.type}
                </span>
                <h3 className="font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {resource.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                  {resource.url === "#" ? "Coming Soon" : "Get It Free"}
                  {resource.url !== "#" && <Download size={12} />}
                </span>
              </a>
            ))}
        </div>

        {/* CTA */}
        <div className="mt-24 pt-12 border-t border-border text-center">
          <h3 className="font-display text-3xl mb-4">
            Want more than a cheat sheet?
          </h3>
          <p className="text-text-secondary mb-8 text-sm max-w-md mx-auto">
            Building Leverage delivers the full system every Sunday.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/newsletter"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white rounded-xl font-medium text-sm hover:bg-accent-hover transition-colors cursor-pointer"
            >
              Subscribe to Building Leverage
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border rounded-xl font-medium text-sm text-text-primary hover:border-border-hover hover:bg-bg-elevated transition-all cursor-pointer"
            >
              Work With Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
