import { RefObject, useEffect } from 'react';

const useScroll = (ref: RefObject<HTMLElement>, scrollCallback: () => void) => {
  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    ref.current.addEventListener('scroll', scrollCallback);
    return () => ref.current?.removeEventListener('scroll', scrollCallback);
  }, [ref]);
};

export default useScroll;
