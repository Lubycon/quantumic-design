let idIndex = 0;

export function generateID(prefix: string) {
  idIndex++;
  return `${prefix}-${idIndex}`;
}
