import { MetadataRoute } from "next";

export async function GET(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://internalops.pro";

  const routes = [
    "",
    "/blog",
    "/contact",
    "/about",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
