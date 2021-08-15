import { useCallback, useRef, useMemo } from 'react';
import { generateID } from '../../utils';
import { useOverlayArea } from './OverlayContext';
import StateReacter, { StateReacterControl } from './StateReacter';
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
  const stateReacterRef = useRef<StateReacterControl>(null);

  const overlayId = useMemo(() => generateID('overlay'), []);

  const open = useCallback(() => stateReacterRef.current?.open(), []);

  const close = useCallback(() => stateReacterRef.current?.close(), []);

  const createOverlayElement = useCallback((controller: OverlayController) => {
    addToArea(overlayId, <StateReacter ref={stateReacterRef} controller={controller} />);
  }, []);

  const destroy = useCallback(() => {
    removeFromArea(overlayId);
  }, []);

  return useMemo(
    () => ({
      open,
      close,
      createOverlayElement,
      destroy,
    }),
    []
  );
}
