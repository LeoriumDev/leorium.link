const REDIRECTS_URL = "https://raw.githubusercontent.com/LeoriumDev/leorium.link/main/_redirects";

let cache = null;
let cacheTime = 0;

async function getRedirects() {
  if (cache && Date.now() - cacheTime < 60000) return cache; // 1 min cache
  const res = await fetch(REDIRECTS_URL);
  const text = await res.text();
  const map = {};
  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const [slug, url] = trimmed.split(/\s+/);
    if (slug && url && slug !== "/") map[slug.replace("/", "")] = url;
  }
  cache = map;
  cacheTime = Date.now();
  return map;
}

export default {
  async fetch(request) {
    const path = new URL(request.url).pathname.slice(1).replace(/\/$/, "");

    if (path.startsWith("qr/")) {
      const slug = path.replace("qr/", "");
      const target = `https://leorium.link/${slug}`;
      const qr = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=512x512&data=${encodeURIComponent(target)}`);
      return new Response(qr.body, { headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=86400" } });
    }

    const redirects = await getRedirects();
    if (redirects[path]) return Response.redirect(redirects[path], 301);

    return Response.redirect("https://leorium.com", 302);
  }
};
