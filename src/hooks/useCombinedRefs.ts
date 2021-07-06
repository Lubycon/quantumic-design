import { Ref, useCallback, MutableRefObject, RefCallback } from 'react';

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
