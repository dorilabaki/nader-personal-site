import {
  Mail,
  ArrowRight,
  MessageSquare,
  Send,
} from "lucide-react";
import { LinkedinIcon, YoutubeIcon, InstagramIcon } from "@/components/icons";
import { PageAnimations } from "@/components/page-animations";

export const metadata = {
  title: "Contact - Nader Alnajjar",
  description:
    "Get in touch with Nader Alnajjar. Work with LeverBrands, book a call, or just say hello.",
};

const socials = [
  {
    name: "LinkedIn",
    handle: "@nader-alnajjar",
    description: "Best place to DM me",
    url: "https://www.linkedin.com/in/nader-alnajjar/",
    icon: LinkedinIcon,
  },
  {
    name: "Instagram",
    handle: "@nader_al_najjer",
    description: "Behind the scenes",
    url: "https://www.instagram.com/nadernajjar/",
    icon: InstagramIcon,
  },
  {
    name: "YouTube",
    handle: "@naderalnajjar",
    description: "Coming soon",
    url: "#",
    icon: YoutubeIcon,
  },
  {
    name: "Email",
    handle: "nader@leverbrands.com",
    description: "For business enquiries",
    url: "mailto:nader@leverbrands.com",
    icon: Mail,
  },
];

export default function ContactPage() {
  return (
    <div>
      <PageAnimations />
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/[0.04] rounded-full blur-[120px]" />
        <div data-page-hero className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-24">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
            Contact
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mt-4 mb-6">
            Let&apos;s Build Some
            <br />
            <span className="italic text-accent">leverage</span>.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            Whether you want to work together, collaborate on something, or just
            say hello. The fastest way to reach me is a DM on LinkedIn.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Form */}
          <div>
            <h2 className="font-display text-2xl mb-2">Send a Message</h2>
            <p className="text-text-secondary text-sm mb-8">
              Fill out the form and I'll get back to you within 48 hours.
            </p>

            {/*
              GoHighLevel Integration:
              Replace form action with your GHL webhook endpoint.
            */}
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-text-primary mb-1.5"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg-elevated text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-colors"
                    placeholder="Nader"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-text-primary mb-1.5"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg-elevated text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-colors"
                    placeholder="Alnajjar"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-primary mb-1.5"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-bg-elevated text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-text-primary mb-1.5"
                >
                  What's this about?
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-bg-elevated text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-colors cursor-pointer"
                >
                  <option value="">Select a topic</option>
                  <option value="work-together">Working with LeverBrands</option>
                  <option value="speaking">Speaking / Podcast</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Something Else</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-primary mb-1.5"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-bg-elevated text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-colors resize-y"
                  placeholder="Tell me about your goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white rounded-xl font-medium text-sm hover:bg-accent-hover transition-colors cursor-pointer"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Social */}
          <div>
            <h2 className="font-display text-2xl mb-2">Or find me here</h2>
            <p className="text-text-secondary text-sm mb-8">
              DMs are always open. Pick your platform.
            </p>

            <div className="space-y-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    social.url.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group flex items-center gap-4 bg-bg-card rounded-2xl border border-border p-5 hover:border-border-hover hover:bg-bg-card-hover transition-all cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-bg-elevated border border-border flex items-center justify-center text-text-muted group-hover:text-accent group-hover:border-accent/30 transition-all flex-shrink-0">
                    <social.icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm text-text-primary">
                      {social.name}
                    </div>
                    <div className="text-xs text-text-muted">
                      {social.description}
                    </div>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0"
                  />
                </a>
              ))}
            </div>

            {/* Note */}
            <div className="mt-8 bg-accent-subtle rounded-2xl border border-accent/10 p-6">
              <div className="flex gap-3">
                <MessageSquare
                  size={18}
                  className="text-accent flex-shrink-0 mt-0.5"
                />
                <div>
                  <h3 className="font-medium text-sm text-text-primary mb-1">
                    Quick note
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    If you're a founder looking to build your personal brand, the
                    fastest path is a LinkedIn DM. Tell me your current situation
                    and what you want to achieve. I read every message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
