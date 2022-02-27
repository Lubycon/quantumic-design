import { useEffect } from 'react';
import { useOverlay } from 'src';

export function useOverlayModal() {
  const { createOverlayElement, open, close, destroy } = useOverlay();
  useEffect(() => {
    createOverlayElement(({ isOpen, close }) => {
      return (
        <div style={{ display: isOpen ? 'block' : 'none' }}>
          모달입니다.
          <button onClick={close}>닫기</button>
        </div>
      );
    });

    return () => {
      destroy();
    };
  }, []);

  return { openModal: open, closeModal: close, destroyModal: destroy };
}

export function OverlayStory() {
  const { openModal } = useOverlayModal();
  return <button onClick={openModal}>모달 열기</button>;
}
