export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://nascoretech.com/sitemap.xml",
    host: "https://nascoretech.com",
  };
}
