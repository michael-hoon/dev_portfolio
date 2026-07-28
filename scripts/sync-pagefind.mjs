import { cpSync, existsSync } from "node:fs";

// The `pagefind` CLI (run as `postbuild`) indexes `dist/` after `astro build`
// has already finished — which, for the Vercel adapter, is also after it has
// copied `dist/` into `.vercel/output/static/`. Without this, the deployed
// site would ship the empty dev-time `/pagefind/pagefind.js` stub instead of
// the real search index.
const vercelStaticDir = ".vercel/output/static";

if (existsSync(vercelStaticDir)) {
	cpSync("dist/pagefind", `${vercelStaticDir}/pagefind`, { recursive: true });
}
