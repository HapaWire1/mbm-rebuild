import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/appointments-v2",
    },
    sitemap: "https://mindbodymedseattle.com/sitemap.xml",
  };
}
