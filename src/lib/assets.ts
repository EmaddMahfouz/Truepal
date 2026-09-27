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
  if (clean.startsWith('./')) {
    clean = clean.slice(2);
  } else if (clean.startsWith('/')) {
    clean = clean.slice(1);
  }

  // Read BASE_URL from Vite's import.meta.env or fallback to './'
  const metaEnv = (import.meta as unknown as { env?: { BASE_URL?: string } }).env;
  const base = metaEnv?.BASE_URL || './';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;

  return `${normalizedBase}${clean}`;
}
