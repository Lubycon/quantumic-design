import React, { cloneElement, ReactElement, useState, useMemo, useCallback } from 'react';
import { Portal } from 'src/contexts/Portal';
import TooltipBody, { TooltipArrowDirection } from './TooltipBody';

const arrowHeight = 8;
const tooltipPadding = 8;

export type TooltipPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'left'
  | 'right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

function getArrowDirection(position: TooltipPosition): TooltipArrowDirection {
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
interface Props {
  children: ReactElement;
  message: string;
  position?: TooltipPosition;
}
const Tooltip = ({ children, message, position = 'top-center' }: Props) => {
  const [tooltipSize, setTooltipSize] = useState({ width: 0, height: 0 });
  const [tooltipOffset, setTooltipOffset] = useState({
    top: -1,
    left: -1,
  });
  const arrowDirection = useMemo(() => getArrowDirection(position), [position]);

  const childRef = useCallback(
    (node: HTMLElement | null) => {
      if (node !== null) {
        const tooltipHeight = tooltipSize.height;
        setTooltipOffset({
          top: node.offsetTop - tooltipHeight - arrowHeight - tooltipPadding,
          left: node.offsetLeft,
        });
      }
    },
    [tooltipSize]
  );

  const tooltipRef = useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      setTooltipSize({
        width: node.clientWidth,
        height: node.clientHeight,
      });
    }
  }, []);

  return (
    <>
      {cloneElement(children, {
        ref: childRef,
      })}
      <Portal>
        <div className="lubycon-tooltip__positioner" style={tooltipOffset}>
          <TooltipBody ref={tooltipRef} arrowDirection={arrowDirection}>
            {message}
          </TooltipBody>
        </div>
      </Portal>
    </>
  );
};

export default Tooltip;
