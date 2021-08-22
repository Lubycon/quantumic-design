import { Ref, useCallback, MutableRefObject, RefCallback } from 'react';

/**
 * @deprecated "@lubycon/react"의 useCombinedRefs를 사용하세요.
 */
export default function useCombinedRefs<T>(
  ...refs: Array<Ref<T> | RefCallback<T>>
): RefCallback<T> {
  return useCallback(
    (value: T) => {
      for (const ref of refs) {
        if (typeof ref === 'function') {
          ref(value);
        } else if (ref != null) {
          (ref as MutableRefObject<T>).current = value;
        }
      }
    },
    [refs]
  );
}
