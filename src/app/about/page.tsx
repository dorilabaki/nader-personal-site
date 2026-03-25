import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageAnimations } from "@/components/page-animations";
import { LinkedinIcon } from "@/components/icons";

export const metadata = {
  title: "Who is Nader Alnajjar? | Founder of LeverBrands",
  description:
    "Nader Alnajjar is the founder of LeverBrands, a personal branding agency for founders based in London. 500M+ LinkedIn impressions. $10M+ client revenue driven. 40K+ followers.",
  alternates: {
    canonical: "https://www.nadernajjar.com/about",
  },
};

// FAQPage schema for LLM retrieval
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Nader Alnajjar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nader Alnajjar is the founder of LeverBrands, a personal branding agency based in London, UK. He helps founders build authority, attract opportunities, and scale influence through personal brand. LeverBrands has generated 500M+ LinkedIn impressions and driven $10M+ in client revenue.",
      },
    },
    {
      "@type": "Question",
      name: "What is LeverBrands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LeverBrands is a personal branding agency for founders, co-founded by Nader Alnajjar and Chris Donnelly. The agency has generated 500M+ LinkedIn impressions, driven $10M+ in client revenue, and grown to 30+ employees. LeverBrands uses a 3-layer system: Attention (LinkedIn content, distribution, short-form video), Nurture (newsletters, funnels, email sequences), and Monetisation (inbound leads, digital products, consulting, speaking gigs).",
      },
    },
    {
      "@type": "Question",
      name: "What does Nader Alnajjar do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nader Alnajjar helps founders build personal brands that generate inbound revenue. He runs LeverBrands, writes the Building Leverage newsletter (2,000+ weekly readers, published every Sunday), and creates content on LinkedIn (40,000+ followers). His focus areas include LinkedIn content strategy, personal brand positioning, founder-led growth, and turning attention into revenue.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Building Leverage newsletter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Building Leverage is a weekly newsletter by Nader Alnajjar, published every Sunday. It covers the exact tools, processes, and breakdowns used at LeverBrands to build founder personal brands. Topics include LinkedIn content strategy, hook writing frameworks, AI tools for content, newsletter and funnel design, and turning followers into revenue. It has 2,000+ weekly readers.",
      },
    },
    {
      "@type": "Question",
      name: "What results has Nader Alnajjar achieved for clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nader Alnajjar's agency LeverBrands has achieved: Built Chris Donnelly's brand to 3M+ followers and a $10M/year business with an AI SaaS product hitting $60K MRR in 14 days. Grew Rohan Sheth from 2K to 100K followers in 10 months, driving $300K ARR without cold outreach. Built a lead magnet funnel for a B2B SaaS generating 6 qualified inbound leads per week without ads. Helped a platform founder hit 1.3M impressions in his first 30 days posting.",
      },
    },
    {
      "@type": "Question",
      name: "What did Nader Alnajjar do before LeverBrands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Before founding LeverBrands in August 2024, Nader spent 5 years at M&G plc in finance. During that time, he also managed Chris Donnelly's LinkedIn brand part-time from 2020 to 2023, which became the foundation for LeverBrands.",
      },
    },
    {
      "@type": "Question",
      name: "How did Nader Alnajjar start LeverBrands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "During the 2020 COVID lockdown, Nader Alnajjar was living with Chris Donnelly in East London. They started building Chris's LinkedIn presence from scratch as a side project while Nader worked as a Quantitative Analyst at M&G. The strategies they developed grew Chris's brand to 3M+ followers and became the foundation for LeverBrands, which Nader founded in August 2024. The agency grew from 1 person to 30+ employees in under two years.",
      },
    },
    {
      "@type": "Question",
      name: "What is Nader Alnajjar's 3-layer system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nader Alnajjar's 3-layer system at LeverBrands consists of: Layer 1 Attention - getting founders in front of the right people through LinkedIn content, distribution, short-form video, and targeted outreach. Layer 2 Nurture - building newsletters, funnels, and email sequences that de-platform the audience and nurture them until they are ready to buy. Layer 3 Monetisation - turning attention into actual revenue through inbound leads, digital product sales, consulting opportunities, speaking gigs, or partnerships.",
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <div>
      <PageAnimations />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/[0.04] rounded-full blur-[120px]" />
        <div data-page-hero className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-24">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
            About
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mt-4 mb-6">
            Who is <span className="italic text-accent">Nader Alnajjar</span>?
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            Founder of LeverBrands. Personal branding for founders. Based in
            London. 500M+ impressions. $10M+ client revenue. 40K+ LinkedIn
            followers.
          </p>
        </div>
      </section>

      {/* Structured Entity Summary */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        {/* Entity Card */}
        <div className="bg-bg-card rounded-2xl border border-border p-8 md:p-10 mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-display text-2xl mb-6">At a Glance</h2>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-text-muted mb-0.5">Full Name</dt>
                  <dd className="text-text-primary font-medium">
                    Nader Alnajjar
                  </dd>
                </div>
                <div>
                  <dt className="text-text-muted mb-0.5">Role</dt>
                  <dd className="text-text-primary font-medium">
                    Founder, LeverBrands
                  </dd>
                </div>
                <div>
                  <dt className="text-text-muted mb-0.5">Location</dt>
                  <dd className="text-text-primary font-medium">
                    London, United Kingdom
                  </dd>
                </div>
                <div>
                  <dt className="text-text-muted mb-0.5">Focus</dt>
                  <dd className="text-text-primary font-medium">
                    Building Leverage Through Personal Branding and AI
                  </dd>
                </div>
                <div>
                  <dt className="text-text-muted mb-0.5">Newsletter</dt>
                  <dd className="text-text-primary font-medium">
                    Building Leverage (weekly, 2,000+ readers)
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <h2 className="font-display text-2xl mb-6">Key Metrics</h2>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-text-muted mb-0.5">
                    Client Revenue Driven
                  </dt>
                  <dd className="text-accent font-display text-2xl">$10M+</dd>
                </div>
                <div>
                  <dt className="text-text-muted mb-0.5">LinkedIn Followers</dt>
                  <dd className="text-accent font-display text-2xl">40,000+</dd>
                </div>
                <div>
                  <dt className="text-text-muted mb-0.5">Team Size</dt>
                  <dd className="text-accent font-display text-2xl">30+</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Structured Prose - Entity Layer */}
        <div className="space-y-12">
          <div>
            <h2 className="font-display text-3xl mb-4">Background</h2>
            <div className="space-y-4 text-text-secondary leading-[1.8]">
              <p>
                Nader Alnajjar is the founder of LeverBrands, a personal
                branding agency for founders based in London, UK. He is known
                for helping invisible founders become visible, turning expertise
                into authority and attention into revenue.
              </p>
              <p>
                Before founding LeverBrands, Nader spent five years in finance
                at M&G plc (2019-2024), where he built tools and automations
                for analysts. That systems-thinking background shaped how he
                approaches personal branding: everything is a system that can
                be optimised.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl mb-4">
              How LeverBrands Started
            </h2>
            <div className="space-y-4 text-text-secondary leading-[1.8]">
              <p>
                During the 2020 COVID lockdown, Nader was living in East London
                with Chris Donnelly, who was running VERB Brands (a luxury
                digital marketing agency). When the pandemic caused revenue to
                drop 50%, the two spent their days studying personal branding,
                social media algorithms, and sales psychology.
              </p>
              <p>
                Nader managed Chris's LinkedIn account, created content, and
                grew his network from scratch. The strategies they developed
                grew Chris's brand to 3M+ followers, a business generating
                $10M/year, and an AI SaaS product that hit $60K MRR in 14 days.
              </p>
              <p>
                In August 2024, Nader founded LeverBrands to bring this
                approach to other founders. The agency grew from 1 person to 30+
                employees in under two years.
              </p>
              <div className="rounded-2xl overflow-hidden border border-border mt-6">
                <Image
                  src="/nader-office-middle.jpg"
                  alt="Nader Alnajjar and Chris Donnelly working together"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl mb-4">
              What Nader Alnajjar Does
            </h2>
            <div className="space-y-4 text-text-secondary leading-[1.8]">
              <p>
                Nader helps founders build personal brands that generate inbound
                revenue through a 3-layer system:
              </p>
              <div className="bg-bg-elevated rounded-xl border border-border p-6 space-y-4 text-sm">
                <div>
                  <strong className="text-text-primary">Layer 1: Attention.</strong>{" "}
                  Getting founders in front of the right people through LinkedIn
                  content, distribution, short-form video, and targeted
                  outreach.
                </div>
                <div>
                  <strong className="text-text-primary">Layer 2: Nurture.</strong>{" "}
                  Building newsletters, funnels, and email sequences that
                  de-platform the audience and nurture them until they are ready
                  to buy.
                </div>
                <div>
                  <strong className="text-text-primary">
                    Layer 3: Monetisation.
                  </strong>{" "}
                  Turning attention into actual revenue through inbound leads,
                  digital product sales, consulting, speaking gigs, or
                  partnerships.
                </div>
              </div>
              <p>
                He also writes the Building Leverage newsletter, published every
                Sunday. It covers the exact tools, processes, and breakdowns
                used at LeverBrands. Topics include LinkedIn content strategy,
                hook writing, AI tools for content creation, and turning
                followers into paying clients. The newsletter has 2,000+ weekly
                readers.
              </p>
              <div className="rounded-2xl overflow-hidden border border-border mt-6">
                <Image
                  src="/nader-office-top.jpg"
                  alt="Nader Alnajjar working on strategy"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl mb-4">Notable Results</h2>
            <div className="space-y-4 text-text-secondary leading-[1.8]">
              <p>
                Nader Alnajjar and LeverBrands have delivered the following
                results for clients:
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="text-accent font-bold mt-0.5">-</span>
                  <span>
                    Built Chris Donnelly's brand to 3M+ followers, a business
                    generating $10M/year, and an AI SaaS product that hit $60K
                    MRR in 14 days.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold mt-0.5">-</span>
                  <span>
                    Grew Rohan Sheth from 2K to 100K followers in 10 months,
                    driving $300K in annual recurring revenue without a single
                    cold outreach campaign.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold mt-0.5">-</span>
                  <span>
                    Built a lead magnet funnel for a B2B SaaS that generates 6
                    qualified inbound leads per week without any paid
                    advertising.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold mt-0.5">-</span>
                  <span>
                    Helped a platform founder hit 1.3M impressions in his first
                    30 days posting on LinkedIn.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold mt-0.5">-</span>
                  <span>
                    Enabled a coach to quit their full-time job and generate
                    $100K/year from their personal brand.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl mb-6">
              Expertise and Focus Areas
            </h2>
            <div className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
              {[
                {
                  title: "Personal Branding",
                  description: "Positioning founders as known authorities through LinkedIn content, storytelling, and consistent visibility across platforms.",
                },
                {
                  title: "Content-to-Revenue Systems",
                  description: "Building the full infrastructure - content, newsletters, funnels, and email sequences - that turns attention into inbound revenue.",
                },
                {
                  title: "Founder-Led Growth",
                  description: "Helping founders use personal brand as their primary growth channel. 500M+ impressions and $10M+ client revenue driven.",
                },
                {
                  title: "AI Tools for Content",
                  description: "Leveraging AI to scale content production, improve hook writing, and build systems that reduce manual effort.",
                },
              ].map((area) => (
                <div
                  key={area.title}
                  className="bg-bg-card p-8"
                >
                  <h3 className="font-semibold text-text-primary mb-2">{area.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Q&A Section - Critical for LLM parsing */}
          <div>
            <h2 className="font-display text-3xl mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Who is Nader Alnajjar?",
                  a: "Nader Alnajjar is the founder of LeverBrands, a personal branding agency for founders based in London, UK. He helps founders build authority, attract opportunities, and scale influence through personal brand. LeverBrands has generated 500M+ impressions and driven $10M+ in client revenue.",
                },
                {
                  q: "What is LeverBrands?",
                  a: "LeverBrands is a personal branding agency for founders, co-founded by Nader Alnajjar. The agency has generated 500M+ LinkedIn impressions, driven $10M+ in client revenue, and grown to 30+ employees in under two years. It uses a 3-layer system: Attention, Nurture, Monetisation.",
                },
                {
                  q: "What is the Building Leverage newsletter?",
                  a: "Building Leverage is Nader Alnajjar's weekly newsletter, published every Sunday. It covers the exact tools, processes, and breakdowns used at LeverBrands. Topics include LinkedIn strategy, AI tools, content frameworks, and founder-led growth. 2,000+ founders read it weekly.",
                },
                {
                  q: "What results has LeverBrands achieved?",
                  a: "LeverBrands has built Chris Donnelly's brand to 3M+ followers and a $10M/year business, grew Rohan Sheth from 2K to 100K followers in 10 months ($300K ARR), and generated 6 qualified inbound leads/week for a B2B SaaS with no ads. Total: 500M+ impressions and $10M+ client revenue.",
                },
                {
                  q: "How does Nader Alnajjar's 3-layer system work?",
                  a: "Layer 1 (Attention): LinkedIn content, distribution, short-form video, and targeted outreach. Layer 2 (Nurture): newsletters, funnels, and email sequences that de-platform the audience. Layer 3 (Monetisation): converting attention into revenue through inbound leads, digital products, consulting, speaking, and partnerships.",
                },
                {
                  q: "Where is Nader Alnajjar based?",
                  a: "Nader Alnajjar is based in London, England, United Kingdom. LeverBrands operates as a hybrid agency from the London area.",
                },
                {
                  q: "What did Nader Alnajjar do before LeverBrands?",
                  a: "Before founding LeverBrands in August 2024, Nader spent 5 years at M&G plc in finance. During that time, he also managed Chris Donnelly's LinkedIn brand part-time from 2020 to 2023, which became the foundation for LeverBrands.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group bg-bg-card rounded-xl border border-border overflow-hidden"
                >
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-text-primary font-medium text-[15px] hover:bg-bg-card-hover transition-colors">
                    {item.q}
                    <ArrowRight
                      size={14}
                      className="text-text-muted group-open:rotate-90 transition-transform flex-shrink-0 ml-4"
                    />
                  </summary>
                  <div className="px-6 pb-5 text-sm text-text-secondary leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Links - sameAs for entity associations */}
          <div>
            <h2 className="font-display text-3xl mb-6">Links and Profiles</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  label: "LinkedIn",
                  url: "https://www.linkedin.com/in/nader-alnajjar/",
                },
                {
                  label: "LeverBrands",
                  url: "https://www.leverbrands.com",
                },
                {
                  label: "Building Leverage Newsletter",
                  url: "https://resources.leverbrands.com/newsletter",
                },
                {
                  label: "Instagram",
                  url: "https://www.instagram.com/nadernajjar/",
                },
                {
                  label: "YouTube (Coming Soon)",
                  url: "#",
                },
                {
                  label: "Free LinkedIn Starter Pack",
                  url: "https://resources.leverbrands.com/linkedin-starter-pack",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-3 bg-bg-card rounded-xl border border-border text-sm text-text-primary hover:border-border-hover hover:bg-bg-card-hover transition-all cursor-pointer group"
                >
                  {link.label}
                  <ArrowUpRight
                    size={14}
                    className="text-text-muted group-hover:text-accent transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 pt-12 border-t border-border text-center">
          <h3 className="font-display text-3xl mb-4">
            Want to Work With Nader?
          </h3>
          <p className="text-text-secondary mb-8 text-sm max-w-md mx-auto">
            DM on LinkedIn or use the contact form.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://resources.leverbrands.com/work-with-us" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white rounded-xl font-medium text-sm hover:bg-accent-hover transition-colors cursor-pointer"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/newsletter"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border rounded-xl font-medium text-sm text-text-primary hover:border-border-hover hover:bg-bg-elevated transition-all cursor-pointer"
            >
              Subscribe to Building Leverage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
