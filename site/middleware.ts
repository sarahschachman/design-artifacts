// Edge Middleware: HTTP Basic Auth gate for the whole deployed site.
//
// Runs before every request (no `config.matcher`, so nothing slips through).
// Credentials come from Vercel environment variables — never hardcode them:
//   SITE_USER, SITE_PASSWORD   (set in Project Settings → Environment Variables,
//                               for both Production and Preview)
//
// Behavior:
//   - missing/wrong credentials → 401 with a Basic-Auth challenge (browser prompt)
//   - correct credentials       → request passes through to the static file
//   - env vars not configured    → 503 (fail closed: never serve unprotected)

export default function middleware(request: Request): Response | undefined {
  const USER = process.env.SITE_USER;
  const PASS = process.env.SITE_PASSWORD;

  // Fail closed: if credentials aren't configured, do not serve the site.
  if (!USER || !PASS) {
    return new Response("Site access is not configured.", { status: 503 });
  }

  const header = request.headers.get("authorization") ?? "";
  const [scheme, encoded] = header.split(" ");

  if (scheme === "Basic" && encoded) {
    try {
      const decoded = atob(encoded);
      const sep = decoded.indexOf(":");
      if (sep !== -1) {
        const user = decoded.slice(0, sep);
        const pass = decoded.slice(sep + 1);
        if (user === USER && pass === PASS) {
          return; // authenticated → continue to the requested file
        }
      }
    } catch {
      // malformed header → fall through to challenge
    }
  }

  return new Response("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Design Artifacts", charset="UTF-8"',
    },
  });
}
