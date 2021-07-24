import React, { useEffect } from 'react';
import { useOverlay } from 'src';
import Modal, { ModalContent } from './Modal';

export function useOverlayModal() {
  const { createOverlayElement, open, close, destory } = useOverlay();
  useEffect(() => {
    createOverlayElement(({ isOpen, close }) => {
      return (
        <Modal show={isOpen} onClose={close}>
          <ModalContent>Hello World</ModalContent>
        </Modal>
      );
    });

    return () => {
      destory();
    };
  }, []);

  return { openModal: open, closeModal: close, destoryModal: destory };
}
