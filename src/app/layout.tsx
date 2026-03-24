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
  title: "Nader Alnajjar - Founder of LeverBrands | Personal Branding for Founders",
  description:
    "Nader Alnajjar is the founder of LeverBrands, a personal branding agency for founders. 500M+ LinkedIn impressions. $10M+ client revenue driven. Based in London, UK.",
  openGraph: {
    title: "Nader Alnajjar - Founder of LeverBrands",
    description:
      "Nader Alnajjar is the founder of LeverBrands. He helps founders build leverage through personal brand. 40K+ followers. 500M+ impressions. $10M+ client revenue.",
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
  jobTitle: "Founder",
  worksFor: {
    "@type": "Organization",
    name: "LeverBrands",
    url: "https://www.leverbrands.com",
    description:
      "Personal branding agency for founders. Helps founders build authority, attract opportunities, and scale influence through personal brand.",
  },
  description:
    "Nader Alnajjar is the founder of LeverBrands, a personal branding agency that has generated 500M+ LinkedIn impressions and driven $10M+ in client revenue. He helps founders turn expertise into authority and attention into revenue through a 3-layer system: Attention, Nurture, Monetisation.",
  knowsAbout: [
    "Personal Branding",
    "LinkedIn Growth Strategy",
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
  founder: {
    "@type": "Person",
    name: "Nader Alnajjar",
    url: "https://www.nadernajjar.com",
  },
  description:
    "LeverBrands is a personal branding agency for founders. It helps ambitious founders build authority, attract opportunities, and scale influence through a 3-layer system: Attention, Nurture, Monetisation. 500M+ impressions generated. $10M+ client revenue driven. 30+ team members.",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 30,
  },
  knowsAbout: [
    "Personal Branding",
    "LinkedIn Strategy",
    "Content Marketing",
    "Founder-Led Growth",
    "Newsletter Marketing",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
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
