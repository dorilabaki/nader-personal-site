import Link from "next/link";
import { Mail } from "lucide-react";
import { LinkedinIcon, YoutubeIcon, InstagramIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="bg-foreground text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-sm">
                N
              </div>
              <span className="font-semibold text-white tracking-tight">
                Nader Alnajjar
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Co-founder of Lever Brands. Helping ambitious founders build
              authority, attract opportunities, and scale influence through
              personal branding.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.linkedin.com/in/nader-alnajjar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="https://www.youtube.com/@naderalnajjar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <YoutubeIcon size={16} />
              </a>
              <a
                href="https://www.instagram.com/nader_al_najjer/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="mailto:nader@leverbrands.com"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Navigate
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/story", label: "My Story" },
                { href: "/timeline", label: "Timeline" },
                { href: "/feed", label: "Feed" },
                { href: "/resources", label: "Resources" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Connect
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/newsletter"
                  className="text-sm hover:text-white transition-colors"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-white transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
              <li>
                <a
                  href="https://www.leverbrands.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  Lever Brands
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Nader Alnajjar. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/40">Powered by</span>
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              LEVER
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
