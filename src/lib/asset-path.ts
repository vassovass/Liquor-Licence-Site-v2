/**
 * Prepend the Next.js basePath to static asset URLs so they resolve correctly
 * both locally (basePath = "") and on GitHub Pages (basePath = "/Liquor-Licence-Site-v2").
 *
 * Uses process.env.NEXT_PUBLIC_BASE_PATH which is set in next.config.ts
 * or via environment variables during build.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string): string {
  // Already absolute URL (http/https) – leave as-is
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  // Ensure leading slash
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

