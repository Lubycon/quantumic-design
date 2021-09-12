interface ProgressOptions {
  min: number;
  value: number;
  valueMapper?: (value: number) => number;
  max: number;
}

/**
 * @deprecated
 * value와 max간 퍼센테이지를 계산합니다. valueMapper 함수를 사용하여 value의 상승폭을 변경할 수 있습니다.
 *
 * ex)
 * useProgress({
 *   min: 0,
 *   max: 100,
 *   value: 50,
 *   valueMapper: (value: number) => BezierEasing(0.08, 0.4, 0.5, 0.82)
 * })
 */
function useProgress({ min = 0, value: originValue, valueMapper, max }: ProgressOptions) {
  const value = valueMapper?.(originValue) ?? originValue;

  if (value < min) {
    return 0;
  } else if (value > max) {
    return 100;
  }

  return (value / max) * 100;
}

export default useProgress;
