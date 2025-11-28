/**
 * Prepend the Next.js basePath to static asset URLs so they resolve correctly
 * both locally (basePath = "") and on GitHub Pages (basePath = "/Liquor-Licence-Site-v2").
 *
 * Uses process.env.NODE_ENV to determine if we're in production.
 * For static export, this is evaluated at build time.
 */
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/Liquor-Licence-Site-v2" : "";

export function assetPath(path: string): string {
  // Already absolute URL (http/https) – leave as-is
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  // Ensure leading slash
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

