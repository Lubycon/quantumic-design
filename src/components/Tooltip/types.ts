export type TooltipPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'left'
  | 'right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface OffsetPosition {
  top: number;
  left: number;
}

export interface TooltipElementSize {
  width: number;
  height: number;
}
