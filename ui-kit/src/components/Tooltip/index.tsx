import React, {
  cloneElement,
  ReactElement,
  useRef,
  useLayoutEffect,
  useState,
  useMemo,
} from 'react';
import { Portal } from 'src/contexts/Portal';
import TooltipBody, { TooltipArrowDirection } from './TooltipBody';

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
  const childRef = useRef<HTMLElement>(null);
  const [childrenOffset, setChildrenOffset] = useState({
    top: -1,
    left: -1,
  });
  const arrowDirection = useMemo(() => getArrowDirection(position), [position]);
  console.log(position, arrowDirection);

  useLayoutEffect(() => {
    if (childRef.current != null) {
      const childrenElement = childRef.current;
      setChildrenOffset({
        top: childrenElement.offsetTop,
        left: childrenElement.offsetLeft,
      });
    }
  }, [childRef]);

  console.log(childrenOffset);

  return (
    <>
      {cloneElement(children, {
        ref: childRef,
      })}
      <Portal>
        <div className="lubycon-tooltip__positioner" style={childrenOffset}>
          <TooltipBody arrowDirection={arrowDirection}>{message}</TooltipBody>
        </div>
      </Portal>
    </>
  );
};

export default Tooltip;
