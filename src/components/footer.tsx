import Link from "next/link";
import { Mail } from "lucide-react";
import { LinkedinIcon, YoutubeIcon, InstagramIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-sm">
                N
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm text-text-primary tracking-tight leading-none">
                  Nader
                </span>
                <span className="text-[10px] text-text-muted tracking-widest uppercase leading-none mt-0.5">
                  Alnajjar
                </span>
              </div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
              Co-founder of Lever Brands. Helping ambitious founders build
              authority, attract opportunities, and scale influence through
              personal branding.
            </p>
            <div className="flex gap-2 mt-6">
              {[
                {
                  href: "https://www.linkedin.com/in/nader-alnajjar/",
                  icon: <LinkedinIcon size={14} />,
                },
                {
                  href: "#",
                  icon: <YoutubeIcon size={14} />,
                },
                {
                  href: "https://www.instagram.com/nadernajjar/",
                  icon: <InstagramIcon size={14} />,
                },
                {
                  href: "mailto:nader@leverbrands.com",
                  icon: <Mail size={14} />,
                },
              ].map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target={
                    social.href.startsWith("mailto") ? undefined : "_blank"
                  }
                  rel={
                    social.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-all cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-text-muted font-medium mb-5">
              Navigate
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Nader" },
                { href: "/story", label: "My Story" },
                { href: "/timeline", label: "Timeline" },
                { href: "/feed", label: "Feed" },
                { href: "/resources", label: "Resources" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-text-muted font-medium mb-5">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/newsletter"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                >
                  Get in Touch
                </Link>
              </li>
              <li>
                <a
                  href="https://www.leverbrands.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                >
                  Lever Brands
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Nader Alnajjar. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-text-muted">Powered by</span>
            <span className="text-xs font-bold text-accent uppercase tracking-[0.15em]">
              LEVER
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
