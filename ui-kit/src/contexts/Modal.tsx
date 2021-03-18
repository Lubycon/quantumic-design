import React, { useContext, ReactNode, createContext, useState, useCallback } from 'react';
import Modal, { ModalContent, ModalFooter, ModalHeader, ModalProps } from 'components/Modal';
import { generateID } from 'src/utils';
import { Portal } from './Portal';

interface ModalOptions extends Omit<ModalProps, 'show' | 'children'> {
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
}
interface ModalGlobalState {
  openModal: (option: ModalOptions) => string;
  closeModal: (modalId: string) => void;
}
interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext<ModalGlobalState>({
  openModal: () => '',
  closeModal: () => {},
});

export function ModalProvider({ children }: ModalProviderProps) {
  const [openedModalStack, setOpenedModalStack] = useState<ModalOptions[]>([]);

  const openModal = useCallback(
    ({ id = generateID('lubycon-modal'), ...option }: ModalOptions) => {
      const modal = { id, ...option };
      setOpenedModalStack([...openedModalStack, modal]);
      return id;
    },
    [openedModalStack]
  );

  const closeModal = useCallback(
    (closedModalId: string) => {
      setOpenedModalStack(openedModalStack.filter((modal) => modal.id !== closedModalId));
    },
    [openedModalStack]
  );

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
      }}
    >
      {children}
      <Portal>
        {openedModalStack.map(({ id, title, content, footer, ...modalProps }) => (
          <Modal show={true} key={id} onClose={() => closeModal(id ?? '')} {...modalProps}>
            <ModalHeader>{title}</ModalHeader>
            <ModalContent>{content}</ModalContent>
            <ModalFooter>{footer}</ModalFooter>
          </Modal>
        ))}
      </Portal>
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
