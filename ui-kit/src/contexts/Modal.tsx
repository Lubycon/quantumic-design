import React, {
  ReactElement,
  useContext,
  ReactNode,
  createContext,
  useState,
  useCallback,
  isValidElement,
} from 'react';
import Modal, { ModalProps } from 'components/Modal';
import { generateID } from 'src/utils';
import { Portal } from './Portal';
import { cloneElement } from 'react';

interface ModalOptions extends Omit<ModalProps, 'show' | 'children'> {
  header?: ReactElement;
  content: ReactElement;
  footer: ReactElement;
}
interface ModalStackOptions extends Omit<ModalOptions, 'header' | 'content' | 'footer'> {
  reactElements: ReactElement[];
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
  const [openedModalStack, setOpenedModalStack] = useState<ModalStackOptions[]>([]);

  const openModal = useCallback(
    ({ id = generateID('lubycon-modal'), header, content, footer, ...option }: ModalOptions) => {
      const reactElements = isValidElement(header) ? [header, content, footer] : [content, footer];
      const modal = { id, reactElements, ...option };
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
        {openedModalStack.map(({ id, reactElements, size = 'small', ...modalProps }) => (
          <Modal
            show={true}
            key={id}
            onClose={() => closeModal(id ?? '')}
            size={size}
            {...modalProps}
          >
            {reactElements.map((element) => {
              return cloneElement(element, {
                key: generateID('lubycon-modal__children'),
                size: size,
              });
            })}
          </Modal>
        ))}
      </Portal>
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
