import React, { useCallback } from 'react';
import { useRef } from 'react';
import { useMemo } from 'react';
import { generateID } from 'src/utils';
import { useOverlayArea } from './OverlayContext';
import StateReacter, { StateReacterAPI } from './StateReacter';
import { OverlayController } from './types';

/**
 * @example
 * const { open, close, createOverlayElement } = useOverlay();
 * const myModal = createOverlayElement((isOpen, close) =>
 *  <Modal show={isOpen} onClose={close} />
 * );
 *
 * return {
 *   open: myModal.open,
 *   close: myModal.close,
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
