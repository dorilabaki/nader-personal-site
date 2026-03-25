"use client";

import { useState } from "react";
import {
  Mail,
  ArrowRight,
  MessageSquare,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { LinkedinIcon, YoutubeIcon, InstagramIcon } from "@/components/icons";
import { PageAnimations } from "@/components/page-animations";

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
    handle: "@nadernajjar",
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
    handle: "nader@leverbrands.co.uk",
    description: "For business enquiries",
    url: "mailto:nader@leverbrands.co.uk",
    icon: Mail,
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
            <span className="italic text-accent">Leverage</span>.
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
          {/* Left: Contact Form */}
          <div>
            <h2 className="font-display text-2xl mb-2">Send a Message</h2>
            <p className="text-text-secondary text-sm mb-8">
              Fill in the details below and it will go straight to my inbox.
            </p>

            {status === "sent" ? (
              <div className="bg-accent-subtle rounded-2xl border border-accent/20 p-10 text-center">
                <CheckCircle size={32} className="text-accent mx-auto mb-4" />
                <h3 className="font-display text-2xl mb-2">Message Sent</h3>
                <p className="text-text-secondary text-sm">
                  Thanks for reaching out. I&apos;ll get back to you within 48 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm text-accent hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">Name</label>
                    <input type="text" id="name" name="name" required autoComplete="name" className="w-full px-4 py-3 rounded-xl border border-border bg-bg-elevated text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">Email</label>
                    <input type="email" id="email" name="email" required autoComplete="email" className="w-full px-4 py-3 rounded-xl border border-border bg-bg-elevated text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-colors" placeholder="you@company.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-1.5">Subject</label>
                  <select id="subject" name="subject" className="w-full px-4 py-3 rounded-xl border border-border bg-bg-elevated text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-colors cursor-pointer">
                    <option value="Working with LeverBrands">Working with LeverBrands</option>
                    <option value="Speaking / Podcast">Speaking / Podcast</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Something Else">Something Else</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">Message</label>
                  <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 rounded-xl border border-border bg-bg-elevated text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-colors resize-y" placeholder="Tell me about your goals..." />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">Something went wrong. Please try again or email directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white rounded-xl font-medium text-sm hover:bg-accent-hover transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right: Social */}
          <div>
            <h2 className="font-display text-2xl mb-2">Or Find Me Here</h2>
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
                    Quick Note
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    If you&apos;re a founder looking to build your personal brand, the
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
