export const DEFAULT_ELEMENT = 'div' as const;

type ColumnNumberSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ColumnSize = 'auto' | ColumnNumberSize;
export type ColumnResponsive = 'xl' | 'lg' | 'md' | 'sm' | 'xs';
