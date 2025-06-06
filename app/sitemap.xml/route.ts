export async function GET(): Promise<Response> {
  const baseUrl = "https://www.internalops.pro";

  const routes = [
    "",
    "/blog",
    "/contact",
    "/about",
  ];

  const sitemap = routes
    .map((route) => {
      return `
        <url>
          <loc>${baseUrl}${route}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
      `;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemap}
    </urlset>
  `;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
