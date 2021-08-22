import { RefObject, useEffect } from 'react';

/**
 * @deprecated
 * "@lubycon/react"의 useScrollEvent를 사용하세요
 */
const useScroll = (ref: RefObject<HTMLElement>, scrollCallback: () => void) => {
  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    ref.current.addEventListener('scroll', scrollCallback, { passive: true });
    return () => ref.current?.removeEventListener('scroll', scrollCallback);
  }, [ref, scrollCallback]);
};

export default useScroll;
