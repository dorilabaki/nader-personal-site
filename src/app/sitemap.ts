import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.nadernajjar.com";
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/story`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/timeline`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/feed`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/newsletter`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
