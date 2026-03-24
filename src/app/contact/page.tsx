import {
  Mail,
  ArrowRight,
  MessageSquare,
  Send,
} from "lucide-react";
import { LinkedinIcon, YoutubeIcon, InstagramIcon } from "@/components/icons";

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
    color: "bg-[#0A66C2]/10 text-[#0A66C2]",
  },
  {
    name: "Instagram",
    handle: "@nader_al_najjer",
    description: "Behind the scenes",
    url: "https://www.instagram.com/nader_al_najjer/",
    icon: InstagramIcon,
    color: "bg-pink-50 text-pink-600",
  },
  {
    name: "YouTube",
    handle: "@naderalnajjar",
    description: "Video content coming soon",
    url: "https://www.youtube.com/@naderalnajjar",
    icon: YoutubeIcon,
    color: "bg-red-50 text-red-600",
  },
  {
    name: "Email",
    handle: "nader@leverbrands.com",
    description: "For business enquiries",
    url: "mailto:nader@leverbrands.com",
    icon: Mail,
    color: "bg-accent-light text-accent",
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light via-background to-background" />
        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Let's build some{" "}
            <span className="highlight-underline">leverage</span>.
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl">
            Whether you want to work together, collaborate on something, or just
            say hello. The fastest way to reach me is a DM on LinkedIn.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Send a Message</h2>
            <p className="text-muted text-sm mb-8">
              Fill out the form and I'll get back to you within 48 hours.
            </p>

            {/*
              GoHighLevel Integration:
              Replace this form's action with your GHL form/webhook endpoint.
              Example: action="https://app.gohighlevel.com/v1/forms/submit"
              Or embed a GHL iframe form here instead.
            */}
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium mb-1.5"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                    placeholder="Nader"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                    placeholder="Alnajjar"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1.5"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-1.5"
                >
                  What's this about?
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors cursor-pointer"
                >
                  <option value="">Select a topic</option>
                  <option value="work-together">
                    Working with LeverBrands
                  </option>
                  <option value="speaking">Speaking / Podcast</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Something Else</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1.5"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-y"
                  placeholder="Tell me about your goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-foreground text-white rounded-xl font-medium text-sm hover:bg-foreground/90 transition-colors cursor-pointer"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Social + Info */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Or find me here</h2>
            <p className="text-muted text-sm mb-8">
              DMs are always open. Pick your platform.
            </p>

            <div className="space-y-4">
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
                  className="group flex items-center gap-4 bg-surface rounded-2xl border border-border p-5 hover:border-accent/30 hover:shadow-sm transition-all cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${social.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <social.icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm">{social.name}</div>
                    <div className="text-xs text-muted">{social.description}</div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0"
                  />
                </a>
              ))}
            </div>

            {/* Quick note */}
            <div className="mt-8 bg-accent-light rounded-2xl p-6">
              <div className="flex gap-3">
                <MessageSquare
                  size={20}
                  className="text-accent flex-shrink-0 mt-0.5"
                />
                <div>
                  <h3 className="font-bold text-sm mb-1">Quick note</h3>
                  <p className="text-sm text-muted leading-relaxed">
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
