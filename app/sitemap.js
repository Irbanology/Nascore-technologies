const baseUrl = "https://nascoretech.com";

export default function sitemap() {
  const pages = [
    "",
    "/services/ai-automation",
    "/services/seo",
    "/services/web-development",
    "/services/aws-cloud",
    "/privacy",
    "/terms",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : 0.8,
  }));
}