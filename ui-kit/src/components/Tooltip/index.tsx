import React, { cloneElement, ReactElement, useRef, useLayoutEffect, useState } from 'react';
import { Portal } from 'src/contexts/Portal';
import TooltipBody from './TooltipBody';

type HorizentalAlign = 'left' | 'center' | 'right';
type VerticalAlign = 'top' | 'center' | 'bottom';

interface Props {
  children: ReactElement;
  message: string;
  hAlign?: HorizentalAlign;
  vAlign?: VerticalAlign;
}
const Tooltip = ({ children, message, hAlign = 'center', vAlign = 'top' }: Props) => {
  const childRef = useRef<HTMLElement>(null);
  const [childrenOffset, setChildrenOffset] = useState({
    top: -1,
    left: -1,
  });
  console.log(hAlign, vAlign);

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
        <TooltipBody>{message}</TooltipBody>
      </Portal>
    </>
  );
};

export default Tooltip;
