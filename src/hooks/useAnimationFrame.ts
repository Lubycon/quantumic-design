import { useEffect, useRef } from 'react';

export function useAnimationFrame(callback: () => void) {
  const animateRequestRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      callback();
      console.log('callback');
      animateRequestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animateRequestRef.current != null) {
        cancelAnimationFrame(animateRequestRef.current);
      }
    };
  }, [callback]);
}
