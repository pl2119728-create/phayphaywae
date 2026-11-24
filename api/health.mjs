export async function GET() {
  const url = "https://phay-phay-wae-default-rtdb.asia-southeast1.firebasedatabase.app/posts/ppw-connection-test.json";
  let result;

  try {
    const r = await fetch(url, { signal: AbortSignal.timeout(6000) });
    if (r.ok) {
      await r.json();
      result = "Firebase OK";
    } else {
      result = "Firebase HTTP " + r.status;
    }
  } catch {
    result = "Firebase check failed";
  }

  return new Response(result, {
    headers: { "Cache-Control": "no-store" }
  });
}
