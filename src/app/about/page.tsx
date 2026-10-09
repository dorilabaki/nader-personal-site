import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageAnimations } from "@/components/page-animations";
import { LinkedinIcon } from "@/components/icons";

export const metadata = {
  title: "Who is Nader Alnajjar? | Co-founder of LeverBrands",
  description:
    "Nader Alnajjar is the co-founder of LeverBrands, a London personal branding agency for founders, CEOs and executives. LinkedIn, short-form video, YouTube and email. 1B+ client impressions. £20M+ attributed client revenue.",
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
      name: "Is LeverBrands just a LinkedIn agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. LinkedIn is where LeverBrands started, but it now runs personal brands across LinkedIn, short-form video, YouTube, Instagram and Facebook, and email. Short-form video is handled end to end, from ideas and filming to editing and publishing, and YouTube channels are fully managed. Underneath the content it builds newsletters, lead magnets, funnels and offers.",
      },
    },
    {
      "@type": "Question",
      name: "Who does LeverBrands work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LeverBrands works with three types of client: founders building pipeline who want their expertise to generate inbound leads and revenue; CEOs and executives building authority with customers, investors, talent, partners and press; and exited founders repositioning around their next chapter. Clients are based in the UK, US, Europe and the Middle East and typically spend around one hour a week on their brand.",
      },
    },
    {
      "@type": "Question",
      name: "Who is Nader Alnajjar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nader Alnajjar is the co-founder of LeverBrands, a London personal branding agency for founders, CEOs and executives. He helps clients build authority, attract opportunities and turn attention into revenue across LinkedIn, short-form video, YouTube, Instagram and email. Over the last three years LeverBrands clients have generated 1B+ impressions, grown 15M+ followers and attributed £20M+ in revenue to their personal brands.",
      },
    },
    {
      "@type": "Question",
      name: "What is LeverBrands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LeverBrands is a London personal branding agency co-founded by Nader Alnajjar, Chris Donnelly and Tom Pearce. It works with founders building pipeline, CEOs and executives building authority, and exited founders repositioning for their next chapter. It is not only a LinkedIn agency: services include personal brand strategy, LinkedIn management, short-form video (ideas, filming and publishing), YouTube channel management, Instagram content, distribution across its media network, inbound and outbound systems, newsletters, lead magnets, funnels and offer development. Clients have generated 1B+ impressions, 15M+ followers and £20M+ in attributed revenue over the last three years.",
      },
    },
    {
      "@type": "Question",
      name: "What does Nader Alnajjar do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nader Alnajjar co-runs LeverBrands, where he builds personal brands for founders, CEOs and executives that generate inbound revenue. The work spans LinkedIn, short-form video, YouTube, Instagram, newsletters and funnels. He also writes the Building Leverage newsletter, published every Sunday, and posts on LinkedIn and YouTube.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Building Leverage newsletter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Building Leverage is a weekly newsletter by Nader Alnajjar, published every Sunday. It breaks down the tools, processes and strategies used at LeverBrands to build founder and executive personal brands, covering content strategy, short-form video, newsletters and funnels, AI tools for content, and turning attention into revenue.",
      },
    },
    {
      "@type": "Question",
      name: "What results has Nader Alnajjar achieved for clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LeverBrands grew Richard Harpin (founder of HomeServe) from 20K to 80K+ LinkedIn followers alongside a Sunday Times bestselling book; grew Rohan Sheth (founder of GrowRev) from 2K to 100K followers in 10 months with 50M impressions, with his brand now driving 40% of new business; helped dermatologist and author Dr Felix Bertram reach 110K+ LinkedIn followers, a bestselling book and a top podcast in Germany's health category; and built co-founder Chris Donnelly's brand to 3M+ followers. Across all clients: 1B+ impressions, 15M+ followers grown and £20M+ attributed revenue.",
      },
    },
    {
      "@type": "Question",
      name: "What did Nader Alnajjar do before LeverBrands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Before co-founding LeverBrands in August 2024, Nader spent 5 years at M&G plc in finance. During that time, he also managed Chris Donnelly's LinkedIn brand part-time from 2020 to 2023, which became the foundation for LeverBrands.",
      },
    },
    {
      "@type": "Question",
      name: "How did Nader Alnajjar start LeverBrands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "During the 2020 COVID lockdown, Nader Alnajjar was living with Chris Donnelly in East London. They started building Chris's LinkedIn presence from scratch as a side project while Nader worked as a Quantitative Analyst at M&G. The strategies they developed grew Chris's brand to 3M+ followers and became the foundation for LeverBrands, which Nader co-founded in August 2024 with Chris Donnelly and Tom Pearce. The agency grew from 1 person to 30+ employees in under two years.",
      },
    },
    {
      "@type": "Question",
      name: "What is Nader Alnajjar's 3-layer system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nader Alnajjar's 3-layer system at LeverBrands consists of: Layer 1 Attention - personal brand strategy, LinkedIn management, short-form video, Instagram content, distribution across the LeverBrands media network, and inbound and outbound systems. Layer 2 Nurture - YouTube channel management, newsletters and email, lead magnets and funnels that move the audience onto owned channels. Layer 3 Monetise - offer development, digital products, group programmes, consulting, speaking and partnerships.",
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
            Co-founder of LeverBrands. Personal branding for founders, CEOs and
            executives across LinkedIn, short-form video, YouTube and email.
            Based in London.
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
                    Co-founder, LeverBrands
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
                    Personal Brands for Founders, CEOs &amp; Executives
                  </dd>
                </div>
                <div>
                  <dt className="text-text-muted mb-0.5">Newsletter</dt>
                  <dd className="text-text-primary font-medium">
                    Building Leverage (every Sunday)
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <h2 className="font-display text-2xl mb-6">Client Results</h2>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-text-muted mb-0.5">Impressions Generated</dt>
                  <dd className="text-accent font-display text-2xl">1B+</dd>
                </div>
                <div>
                  <dt className="text-text-muted mb-0.5">Attributed Client Revenue</dt>
                  <dd className="text-accent font-display text-2xl">£20M+</dd>
                </div>
                <div>
                  <dt className="text-text-muted mb-0.5">Followers Grown</dt>
                  <dd className="text-accent font-display text-2xl">15M+</dd>
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
                Nader Alnajjar is the co-founder of LeverBrands, a personal
                branding agency based at London Bridge that works with founders,
                CEOs and executives across the UK, US, Europe and the Middle
                East. He is known for helping brilliant people become impossible
                to ignore, turning expertise into authority and attention into
                revenue.
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
                In August 2024, Nader co-founded LeverBrands with Chris and Tom
                Pearce to bring this approach to other founders and executives.
                The agency grew from 1 person to 30+ people in under two years,
                and its clients have since generated 1B+ impressions and £20M+
                in attributed revenue.
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
                Nader helps founders, CEOs and executives build personal brands
                that generate inbound revenue. LinkedIn is one channel of
                several: the team also produces short-form video end to end,
                manages YouTube channels, and runs Instagram, newsletters and
                funnels. It all sits inside a 3-layer system:
              </p>
              <div className="bg-bg-elevated rounded-xl border border-border p-6 space-y-4 text-sm">
                <div>
                  <strong className="text-text-primary">Layer 1: Attention.</strong>{" "}
                  Personal brand strategy, LinkedIn management, short-form video
                  (ideas, filming, editing and publishing), Instagram content,
                  distribution across the LeverBrands media network, and inbound
                  and outbound systems.
                </div>
                <div>
                  <strong className="text-text-primary">Layer 2: Nurture.</strong>{" "}
                  YouTube channel management, newsletters and email, lead magnets
                  and funnels that move the audience onto owned channels and
                  nurture them until they are ready to buy.
                </div>
                <div>
                  <strong className="text-text-primary">
                    Layer 3: Monetise.
                  </strong>{" "}
                  Offer development, digital products, group programmes,
                  consulting, speaking and partnerships.
                </div>
              </div>
              <p>
                He also writes the Building Leverage newsletter, published every
                Sunday. It covers the exact tools, processes, and breakdowns
                used at LeverBrands. Topics include content strategy across
                platforms, short-form video, AI tools for content creation, and
                turning followers into paying clients.
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
                    Grew Richard Harpin, founder of HomeServe, from 20K to 80K+ followers (4x+ audience growth) alongside a Sunday Times bestselling book.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold mt-0.5">-</span>
                  <span>
                    Grew Rohan Sheth, founder of GrowRev, from 2K to 100K followers in 10 months with 50M impressions. His personal brand now drives 40% of new business.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold mt-0.5">-</span>
                  <span>
                    Helped dermatologist and author Dr Felix Bertram reach 110K+ LinkedIn followers, a bestselling book and a top podcast in Germany&apos;s health category.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold mt-0.5">-</span>
                  <span>
                    Built co-founder Chris Donnelly&apos;s brand to 3M+ followers, behind a business generating $10M/year.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold mt-0.5">-</span>
                  <span>
                    Across all clients over the last three years: 1B+ impressions, 15M+ followers grown and £20M+ in attributed revenue.
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
                  description: "Positioning founders, CEOs and executives as known authorities through storytelling and consistent visibility on LinkedIn, Instagram and YouTube.",
                },
                {
                  title: "Content-to-Revenue Systems",
                  description: "Building the full infrastructure - content, newsletters, funnels, and email sequences - that turns attention into inbound revenue.",
                },
                {
                  title: "Founder-Led Growth",
                  description: "Helping founders use personal brand as their primary growth channel. £20M+ in attributed client revenue.",
                },
                {
                  title: "Short-Form Video & YouTube",
                  description: "Video handled end to end, from ideas and filming to editing and publishing, plus full YouTube channel management for long-form depth.",
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
                  a: "Nader Alnajjar is the co-founder of LeverBrands, a London personal branding agency for founders, CEOs and executives. He helps clients build authority, attract opportunities and turn attention into revenue across LinkedIn, short-form video, YouTube, Instagram and email. Over the last three years LeverBrands clients have generated 1B+ impressions, grown 15M+ followers and attributed £20M+ in revenue to their personal brands.",
                },
                {
                  q: "What is LeverBrands?",
                  a: "LeverBrands is a London personal branding agency co-founded by Nader Alnajjar, Chris Donnelly and Tom Pearce. It works with founders building pipeline, CEOs and executives building authority, and exited founders repositioning for their next chapter. It is not only a LinkedIn agency: services include personal brand strategy, LinkedIn management, short-form video (ideas, filming and publishing), YouTube channel management, Instagram content, distribution across its media network, inbound and outbound systems, newsletters, lead magnets, funnels and offer development. Clients have generated 1B+ impressions, 15M+ followers and £20M+ in attributed revenue over the last three years.",
                },
                {
                  q: "Is LeverBrands just a LinkedIn agency?",
                  a: "No. LinkedIn is where LeverBrands started, but it now runs personal brands across LinkedIn, short-form video, YouTube, Instagram and email. Short-form video is handled end to end, from ideas and filming to editing and publishing, and YouTube channels are fully managed. Underneath the content it builds newsletters, lead magnets, funnels and offers.",
                },
                {
                  q: "Who does LeverBrands work with?",
                  a: "Founders building pipeline, CEOs and executives building authority, and exited founders repositioning for their next chapter. Clients are in the UK, US, Europe and the Middle East, and typically spend around one hour a week on their brand.",
                },
                {
                  q: "What is the Building Leverage newsletter?",
                  a: "Building Leverage is Nader Alnajjar's weekly newsletter, published every Sunday. It breaks down the tools, processes and strategies used at LeverBrands, covering content strategy across platforms, short-form video, AI tools, newsletters and funnels, and founder-led growth.",
                },
                {
                  q: "What results has LeverBrands achieved?",
                  a: "LeverBrands grew Richard Harpin (founder of HomeServe) from 20K to 80K+ LinkedIn followers alongside a Sunday Times bestselling book; grew Rohan Sheth (founder of GrowRev) from 2K to 100K followers in 10 months with 50M impressions, with his brand now driving 40% of new business; helped dermatologist and author Dr Felix Bertram reach 110K+ LinkedIn followers, a bestselling book and a top podcast in Germany's health category; and built co-founder Chris Donnelly's brand to 3M+ followers. Across all clients: 1B+ impressions, 15M+ followers grown and £20M+ attributed revenue.",
                },
                {
                  q: "How does Nader Alnajjar's 3-layer system work?",
                  a: "Layer 1 (Attention): personal brand strategy, LinkedIn management, short-form video, Instagram content, distribution and inbound/outbound systems. Layer 2 (Nurture): YouTube channel management, newsletters, lead magnets and funnels. Layer 3 (Monetise): offer development, digital products, group programmes, consulting, speaking and partnerships.",
                },
                {
                  q: "Where is Nader Alnajjar based?",
                  a: "Nader Alnajjar is based in London, UK. LeverBrands' office is at Hatcher's Yard, London Bridge, and it works with clients across the UK, US, Europe and the Middle East.",
                },
                {
                  q: "What did Nader Alnajjar do before LeverBrands?",
                  a: "Before co-founding LeverBrands in August 2024, Nader spent 5 years at M&G plc in finance. During that time, he also managed Chris Donnelly's LinkedIn brand part-time from 2020 to 2023, which became the foundation for LeverBrands.",
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
                  label: "YouTube",
                  url: "https://www.youtube.com/@Nader-Alnajjar",
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
