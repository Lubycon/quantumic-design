import { TooltipArrowDirection } from './TooltipBody';
import { OffsetPosition, TooltipElementSize, TooltipPosition } from './types';

export function getArrowDirection(position: TooltipPosition): TooltipArrowDirection {
  switch (position) {
    case 'top-left':
      return 'bottom-left';
    case 'top-center':
      return 'bottom-center';
    case 'top-right':
      return 'bottom-right';
    case 'bottom-left':
      return 'top-left';
    case 'bottom-center':
      return 'top-center';
    case 'bottom-right':
      return 'top-right';
    case 'left':
      return 'right';
    case 'right':
      return 'left';
    default:
      return position;
  }
}

export function getTooltipPosition(
  childElement: HTMLElement,
  tooltipSize: TooltipElementSize,
  position: TooltipPosition
): OffsetPosition {
  const arrowHeight = 8;
  const spacing = 8;
  const { offsetTop, offsetLeft, clientWidth, clientHeight } = childElement;
  const offsetRight = offsetLeft + clientWidth;
  const offsetBottom = offsetTop + clientHeight;

  const { width: tooltipWidth, height: tooltipHeight } = tooltipSize;

  const topPosition = offsetTop - tooltipHeight - arrowHeight - spacing;
  const bottomPosition = offsetBottom + arrowHeight + spacing;
  const horizontalCenterOfChildren = offsetLeft + clientWidth / 2 - tooltipWidth / 2;
  const verticalCenterOfChildren = offsetTop + clientHeight / 2 - tooltipHeight / 2;

  switch (position) {
    case 'top-left':
      return {
        top: topPosition,
        left: offsetLeft,
      };
    case 'top-center':
      return {
        top: topPosition,
        left: horizontalCenterOfChildren,
      };
    case 'top-right':
      return {
        top: topPosition,
        left: offsetRight - tooltipWidth,
      };
    case 'bottom-left':
      return {
        top: bottomPosition,
        left: offsetLeft,
      };
    case 'bottom-center':
      return {
        top: bottomPosition,
        left: horizontalCenterOfChildren,
      };
    case 'bottom-right':
      return {
        top: bottomPosition,
        left: offsetLeft + clientWidth - tooltipWidth,
      };
    case 'left':
      return {
        top: verticalCenterOfChildren,
        left: offsetLeft - tooltipWidth - arrowHeight - spacing,
      };
    case 'right':
      return {
        top: verticalCenterOfChildren,
        left: offsetRight + arrowHeight + spacing,
      };

    default:
      return {
        top: offsetTop - arrowHeight - spacing,
        left: offsetLeft,
      };
  }
}
