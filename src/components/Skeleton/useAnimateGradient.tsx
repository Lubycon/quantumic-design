import { useEffect, useRef, useState } from 'react';

const gradientDegree = 90;

export interface GradientOptions {
  foregroundColor: string;
  backgroundColor: string;
  progress: number;
  width: number;
}
export function calcGradient({
  foregroundColor,
  backgroundColor,
  progress,
  width,
}: GradientOptions) {
  const startPosition = Math.max(progress - width, 0);
  const endPosition = Math.min(progress + width, 100);

  return `linear-gradient(${gradientDegree}deg, ${backgroundColor} ${startPosition}%, ${foregroundColor} ${progress}%, ${backgroundColor} ${endPosition}%)`;
}

interface Options {
  foregroundColor: string;
  backgroundColor: string;
}
export function useAnimateGradient({ foregroundColor, backgroundColor }: Options) {
  const animateRequestRef = useRef<number>();

  const [progress, setProgress] = useState(-200);

  useEffect(() => {
    const animate = () => {
      setProgress((prev) => (prev >= 200 ? -200 : prev + 3));

      animateRequestRef.current = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animateRequestRef.current != null) {
        window.cancelAnimationFrame(animateRequestRef.current);
      }
    };
  }, []);

  return calcGradient({
    foregroundColor,
    backgroundColor,
    progress,
    width: 20,
  });
}
