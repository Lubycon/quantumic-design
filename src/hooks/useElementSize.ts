import { RefObject, useEffect, useState } from 'react';

type ElementSize = Omit<IntersectionObserverEntry['boundingClientRect'], 'toJSON'>;

const DEFAULT_CASE: ElementSize = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

function useElementSize(ref: RefObject<HTMLElement>) {
  const [elementSize, setElementSize] = useState<ElementSize>(DEFAULT_CASE);

  useEffect(() => {
    if (ref.current === null) {
      return;
    }
    const resizeObserver = new IntersectionObserver((entries) => {
      setElementSize(entries[0].boundingClientRect);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [ref]);

  return elementSize;
}

export default useElementSize;
