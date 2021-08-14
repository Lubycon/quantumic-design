import { useEffect } from 'react';
import { useOverlay } from 'src';
import Modal, { ModalContent } from './Modal';

export function useOverlayModal() {
  const { createOverlayElement, open, close, destroy } = useOverlay();
  useEffect(() => {
    createOverlayElement(({ isOpen, close }) => {
      return (
        <Modal show={isOpen} onClose={close}>
          <ModalContent>Hello World</ModalContent>
        </Modal>
      );
    });

    return () => {
      destroy();
    };
  }, []);

  return { openModal: open, closeModal: close, destroyModal: destroy };
}
