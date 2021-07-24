import React, { useCallback } from 'react';
import { useRef } from 'react';
import { useMemo } from 'react';
import { generateID } from 'src/utils';
import { useOverlayArea } from './OverlayContext';
import StateReacter, { StateReacterAPI } from './StateReacter';
import { OverlayController } from './types';

/**
 * @example
 * function useMyModal () {
 *   const { open, close, createOverlayElement } = useOverlay();
 *   useEffect(() => {
 *     // 오버레이 엘리먼트 등록
 *     createOverlayElement((isOpen, close) =>
 *       <Modal show={isOpen} onClose={close} />
 *     );
 *   }, []);
 *
 *   return {
 *     openMyModal: open,
 *     closeMyModal: close,
 *   }
 * }
 */
export function useOverlay() {
  const { addToArea, removeFromArea } = useOverlayArea();
  const stateReacterRef = useRef<StateReacterAPI>(null);

  const overlayId = useMemo(() => generateID('overlay'), []);

  const open = useCallback(() => stateReacterRef.current?.open(), []);

  const close = useCallback(() => stateReacterRef.current?.close(), []);

  const createOverlayElement = useCallback((controller: OverlayController) => {
    addToArea(overlayId, <StateReacter ref={stateReacterRef} controller={controller} />); // 클로저 떄문에 리렌더링이 안됨
  }, []);

  const destory = useCallback(() => {
    removeFromArea(overlayId);
  }, []);

  return useMemo(
    () => ({
      open,
      close,
      createOverlayElement,
      destory,
    }),
    []
  );
}
