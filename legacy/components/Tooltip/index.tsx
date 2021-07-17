import React, { cloneElement, ReactElement, useState, useMemo, useCallback } from 'react';
import { animated, useSpring } from 'react-spring';
import { Portal } from 'src/contexts/Portal';
import { CombineElementProps } from 'src/types/utils';
import TooltipBody from './TooltipBody';
import { OffsetPosition, TooltipElementSize, TooltipPosition } from './types';
import { getArrowDirection, getTooltipPosition } from './utils';

type Props = CombineElementProps<
  'div',
  {
    show: boolean;
    children: ReactElement;
    message: string;
    position?: TooltipPosition;
  }
>;

const Tooltip = ({ show, children, message, position = 'top-center', ...props }: Props) => {
  const [tooltipSize, setTooltipSize] = useState<TooltipElementSize>({ width: 0, height: 0 });
  const [tooltipOffset, setTooltipOffset] = useState<OffsetPosition>({
    top: -1,
    left: -1,
  });
  const arrowDirection = useMemo(() => getArrowDirection(position), [position]);

  const childRef = useCallback(
    (childElement: HTMLElement | null) => {
      if (childElement !== null) {
        setTooltipOffset(getTooltipPosition(childElement, tooltipSize, position));
      }
    },
    [tooltipSize, position]
  );

  const tooltipRef = useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      setTooltipSize({
        width: node.clientWidth,
        height: node.clientHeight,
      });
    }
  }, []);

  const animation = useSpring({
    visibility: show ? 'visible' : 'hidden',
    opacity: show ? 1 : 0,
  });

  return (
    <>
      {cloneElement(children, {
        ref: childRef,
      })}
      <Portal>
        <animated.div
          className="lubycon-tooltip__positioner"
          style={{ ...tooltipOffset, ...animation }}
        >
          <TooltipBody ref={tooltipRef} arrowDirection={arrowDirection} {...props}>
            {message}
          </TooltipBody>
        </animated.div>
      </Portal>
    </>
  );
};

export default Tooltip;
