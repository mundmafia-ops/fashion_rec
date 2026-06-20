// Vercel Edge Function: returns the visitor's ISO country code from Vercel's
// geo-IP header. Used client-side to localize Amazon Associates links
// (US store fragrandise-20 by default, India store fragrandise-21 for IN).
export const config = { runtime: "edge" };

export default function handler(request) {
  const country = request.headers.get("x-vercel-ip-country") || "";
  return new Response(JSON.stringify({ country }), {
    headers: {
      "content-type": "application/json",
      // Cache per-edge-region for a day; country rarely changes per visitor.
      "cache-control": "public, max-age=0, s-maxage=86400",
    },
  });
}
