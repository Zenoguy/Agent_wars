/** Public files need the same build-time prefix as the exported project site. */
export function assetPath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}
