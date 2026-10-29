import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = localFont({
  src: [
    {
      path: "../fonts/InstrumentSerif-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/InstrumentSerif-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Nader Alnajjar - Co-founder of LeverBrands | Personal Branding for Founders, CEOs & Executives",
  description:
    "Nader Alnajjar is co-founder of LeverBrands. LeverBrands builds personal brand ecosystems for founders and CEOs. 1B+ client impressions. £20M+ client revenue. 15M+ followers grown.",
  openGraph: {
    title: "Nader Alnajjar - Co-founder of LeverBrands",
    description:
      "Nader Alnajjar is co-founder of LeverBrands. LeverBrands builds personal brand ecosystems for founders and CEOs. 1B+ client impressions. £20M+ client revenue. 15M+ followers grown.",
    type: "website",
    url: "https://www.nadernajjar.com",
  },
  alternates: {
    canonical: "https://www.nadernajjar.com",
  },
};

// Person + Organization JSON-LD for AI retrievability
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nader Alnajjar",
  alternateName: "Nader Al Najjar",
  url: "https://www.nadernajjar.com",
  image: "https://www.nadernajjar.com/nader-alnajjar.jpg",
  jobTitle: "Co-founder",
  worksFor: {
    "@type": "Organization",
    name: "LeverBrands",
    url: "https://www.leverbrands.com",
    description:
      "LeverBrands builds personal brand ecosystems for founders and CEOs. A personal brand ecosystem is the system of positioning, content, owned audience and offers that turns a founder's attention into trust and revenue.",
  },
  description:
    "Nader Alnajjar is co-founder of LeverBrands. LeverBrands builds personal brand ecosystems for founders and CEOs, run by one team across LinkedIn, short-form video, newsletters and email, lead magnets, funnels and offers. Clients' brands have generated 1B+ impressions, 15M+ followers and £20M+ in revenue.",
  knowsAbout: [
    "Personal Branding",
    "Executive Personal Branding",
    "LinkedIn Growth Strategy",
    "Short-Form Video",
    "YouTube Channel Growth",
    "Founder-Led Content",
    "Content Marketing",
    "Social Media Strategy",
    "Lead Generation",
    "Newsletter Growth",
    "AI Tools for Content",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "University of Bath",
  },
  sameAs: [
    "https://www.linkedin.com/in/nader-alnajjar/",
    "https://www.instagram.com/nadernajjar/",
    "https://www.youtube.com/@Nader-Alnajjar",
    "https://www.leverbrands.com",
    "https://resources.leverbrands.com/newsletter",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LeverBrands",
  url: "https://www.leverbrands.com",
  founder: [
    {
      "@type": "Person",
      name: "Nader Alnajjar",
      url: "https://www.nadernajjar.com",
    },
    { "@type": "Person", name: "Chris Donnelly" },
    { "@type": "Person", name: "Tom Pearce" },
  ],
  description:
    "LeverBrands builds personal brand ecosystems for founders and CEOs. A personal brand ecosystem is the system of positioning, content, owned audience and offers that turns a founder's attention into trust and revenue. The three layers are Attention, Nurture and Monetise, underpinned by positioning. Based in London, it works with founders building pipeline, CEOs building authority and exited founders repositioning for their next chapter. It is not only a LinkedIn agency: services include personal brand strategy, LinkedIn management, short-form video (ideas, filming and publishing), YouTube channel management, Instagram content, content distribution, inbound and outbound systems, newsletters and email, lead magnets, funnels and offer development. Over the last three years clients have generated 1B+ impressions, grown 15M+ followers and attributed £20M+ in revenue.",
  knowsAbout: [
    "Personal Branding",
    "Executive Thought Leadership",
    "LinkedIn Strategy",
    "Short-Form Video Production",
    "YouTube Channel Management",
    "Content Distribution",
    "Newsletter Marketing",
    "Funnels and Lead Magnets",
    "Founder-Led Growth",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit B6 Hatcher's Yard, 9 Tanner Street",
    addressLocality: "London",
    postalCode: "SE1 3LE",
    addressCountry: "GB",
  },
  areaServed: ["United Kingdom", "United States", "Europe", "Middle East"],
  sameAs: [
    "https://www.instagram.com/leverbrands/",
    "https://www.youtube.com/@Nader-Alnajjar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
