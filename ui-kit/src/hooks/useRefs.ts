import React, { useRef } from 'react';

// Key 기반으로 RefObject 저장하고 캐시로 성능 향상화
export default function useRefs<RefType>(): (key: React.Key) => React.RefObject<RefType> {
  const cacheRefs = useRef(new Map<React.Key, React.RefObject<RefType>>());

  function getRef(key: React.Key) {
    if (!cacheRefs.current.has(key)) {
      cacheRefs.current.set(key, React.createRef<RefType>());
    }
    return cacheRefs.current.get(key);
  }

  return getRef;
}
