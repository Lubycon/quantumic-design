import React, { useContext, ReactNode, createContext, useState, useCallback } from 'react';
import Modal, { ModalContent, ModalFooter, ModalHeader, ModalProps } from 'components/Modal';
import { generateID } from 'src/utils';
import { Portal } from './Portal';

interface ModalHookOption {
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
}

type ModalOptions = ModalHookOption & Omit<ModalProps, 'show' | 'children' | 'onClose'>;
type ModalStackOptions = ModalHookOption & Omit<ModalProps, 'children' | 'onClose'>;

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
  const [openedModalStack, setOpenedModalStack] = useState<ModalStackOptions[]>([]);

  const openModal = useCallback(
    ({ id = generateID('lubycon-modal'), ...option }: ModalOptions) => {
      const modal = { id, show: true, ...option };
      setOpenedModalStack([...openedModalStack, modal]);
      return id;
    },
    [openedModalStack]
  );

  const closeModal = useCallback((closedModalId: string) => {
    setOpenedModalStack((stack) =>
      stack.map((modal) => {
        return modal.id === closedModalId
          ? {
              ...modal,
              show: false,
            }
          : modal;
      })
    );
  }, []);

  const removeModalFromStack = (closedModalId: string) => {
    setOpenedModalStack((stack) => stack.filter((modal) => modal.id !== closedModalId));
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
      }}
    >
      {children}
      <Portal>
        {openedModalStack.map(({ id, show, title, content, footer, ...modalProps }) => (
          <Modal
            show={show}
            key={id}
            onClose={() => closeModal(id ?? '')}
            onCloseTransitionEnd={() => removeModalFromStack(id ?? '')}
            {...modalProps}
          >
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
