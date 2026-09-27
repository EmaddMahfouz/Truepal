/**
 * Resolves static asset paths accurately across local dev, GitHub Pages (subpaths like /Truepal/),
 * and custom domain deployments.
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';

  // Return as-is if already an absolute external URL, data URI, or blob
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  // Strip leading slash or dot-slash
  let clean = path;
  while (clean.startsWith('./') || clean.startsWith('/')) {
    clean = clean.startsWith('./') ? clean.slice(2) : clean.slice(1);
  }

  // 1. In browser runtime, check if we are on github.io with a repository subpath
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;

    if (hostname.endsWith('github.io')) {
      const segments = pathname.split('/').filter(Boolean);
      const repo = segments[0] || 'Truepal';
      return `/${repo}/${clean}`;
    }
  }

  // 2. Vite base URL or root fallback
  const metaEnv = (import.meta as unknown as { env?: { BASE_URL?: string } }).env;
  const base = metaEnv?.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;

  return `${normalizedBase}${clean}`;
}
