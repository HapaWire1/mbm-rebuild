import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mindbodymedseattle.com";
  const now = new Date().toISOString();

  return [
    { url: base,                                          lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/services/chiropractic`,               lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/red-light-therapy`,          lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/acupuncture`,                lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/massage-therapy`,            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/sports-rehab`,               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/personal-injury`,                     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/conditions/back-pain`,                lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/conditions/neck-pain`,                lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/conditions/sciatica`,                 lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/conditions/headaches`,                lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/conditions/herniated-disc`,           lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/conditions/shoulder-pain`,            lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/conditions/nerve-pain`,               lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/conditions/whiplash`,                 lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faq`,                                 lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/team`,                                lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/reviews`,                             lastModified: now, changeFrequency: "weekly",  priority: 0.6 },
    { url: `${base}/insurance`,                           lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/contact`,                             lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/appointments-v2`,                                            lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/services/chiropractic-red-light-therapy`,                    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ravenna-chiropractor`,                                        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/red-light-therapy-seasonal-depression-seattle`,          lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
