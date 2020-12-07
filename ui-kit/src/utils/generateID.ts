export function generateID(prefix: string) {
  const now = new Date().getTime();
  return `${prefix}-${now}`;
}
