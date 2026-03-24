import {
  Download,
  FileText,
  ArrowRight,
  Sparkles,
  BookOpen,
  Lightbulb,
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
      "The exact framework to set up your LinkedIn profile, write your first posts, and start building an audience from scratch. Everything you need to go from zero to visible.",
    type: "Free Guide",
    icon: Sparkles,
    color: "bg-accent-light text-accent",
    url: "https://resources.leverbrands.com/linkedin-starter-pack",
    featured: true,
  },
  {
    title: "Hook Writing Cheat Sheet",
    description:
      "80% of your post's success depends on the first line. This cheat sheet gives you 20+ proven hook templates that earn that click.",
    type: "Cheat Sheet",
    icon: FileText,
    color: "bg-blue-50 text-blue-600",
    url: "#",
    featured: false,
  },
  {
    title: "Personal Brand Playbook",
    description:
      "The step-by-step guide to building a personal brand that generates inbound leads, speaking opportunities, and partnerships. The exact framework we use at LeverBrands.",
    type: "Guide",
    icon: Lightbulb,
    color: "bg-purple-50 text-purple-600",
    url: "#",
    featured: false,
  },
  {
    title: "Content Calendar Template",
    description:
      "The exact content planning system we use at LeverBrands. Map out 30 days of LinkedIn content with pillars, hooks, and CTAs.",
    type: "Template",
    icon: BookOpen,
    color: "bg-emerald-50 text-emerald-600",
    url: "#",
    featured: false,
  },
];

export default function ResourcesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light via-background to-background" />
        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Resources
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Free <span className="highlight-underline">tools</span> to start
            building.
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl">
            Guides, templates, and cheat sheets. No email wall for some. Others
            require a quick signup. All designed to give you a head start.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid gap-6">
          {/* Featured Resource */}
          {resources
            .filter((r) => r.featured)
            .map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-surface rounded-2xl border border-accent/20 p-8 md:p-12 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent text-white">
                      Most Popular
                    </span>
                    <span className="text-xs text-muted">{resource.type}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {resource.title}
                  </h2>
                  <p className="text-muted leading-relaxed max-w-xl mb-6">
                    {resource.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    Download Free
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </div>
              </a>
            ))}

          {/* Other Resources */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {resources
              .filter((r) => !r.featured)
              .map((resource) => (
                <a
                  key={resource.title}
                  href={resource.url}
                  target={resource.url === "#" ? undefined : "_blank"}
                  rel={resource.url === "#" ? undefined : "noopener noreferrer"}
                  className="group bg-surface rounded-2xl border border-border p-8 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${resource.color} flex items-center justify-center mb-6`}
                  >
                    <resource.icon size={20} />
                  </div>
                  <span className="text-xs text-muted mb-2 block">
                    {resource.type}
                  </span>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    {resource.url === "#" ? "Coming Soon" : "Get It Free"}
                    {resource.url !== "#" && (
                      <Download
                        size={14}
                        className="group-hover:translate-y-0.5 transition-transform"
                      />
                    )}
                  </span>
                </a>
              ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-border text-center">
          <h3 className="text-2xl font-bold mb-4">
            Want more than a cheat sheet?
          </h3>
          <p className="text-muted mb-8 max-w-md mx-auto">
            Building Leverage delivers the full system every Sunday. Tools,
            prompts, frameworks, and case studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/newsletter"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-foreground text-white rounded-xl font-medium text-sm hover:bg-foreground/90 transition-colors cursor-pointer"
            >
              Subscribe to Building Leverage
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-surface border border-border rounded-xl font-medium text-sm hover:border-foreground/20 transition-colors cursor-pointer"
            >
              Work With Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
