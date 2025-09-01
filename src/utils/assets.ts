export function getAssetPath(path: string): string {
  const base = import.meta.env.PROD ? '/client' : ''
  return `${base}${path}`
}