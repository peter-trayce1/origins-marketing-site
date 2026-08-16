import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://knownobjects.io";
  const routes = [
    "",
    "/platform",
    "/pricing",
    "/solutions",
    "/compliance",
    "/customer-experience",
    "/about",
    "/book-demo",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
