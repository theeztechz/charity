export async function onRequestGet({ env }) {
  const r = await env.DB.prepare("SELECT COALESCE(SUM(amount),0) AS raised, COUNT(*) AS donors FROM donations").first();
  return new Response(JSON.stringify(r), {
    headers: { "content-type": "application/json", "cache-control": "public, max-age=30" }
  });
}
