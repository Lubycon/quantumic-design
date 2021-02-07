import React, { ReactNode, createContext, useState, useCallback, useContext } from 'react';
import classnames from 'classnames';
import Toast, { ToastAlign, ToastProps } from 'components/Toast';
import { generateID } from 'src/utils';
import { Portal } from './Portal';
interface ToastOptions extends Omit<ToastProps, 'show'> {
  duration?: number;
  align?: ToastAlign;
}
const aligns: ToastAlign[] = ['left', 'center', 'right'];

interface ToastGlobalState {
  openToast: (option: ToastOptions) => void;
  closeToast: (toastId: string) => void;
}
const ToastContext = createContext<ToastGlobalState>({
  openToast: () => {},
  closeToast: () => {},
});

interface ToastProviderProps {
  children: ReactNode;
  maxStack?: number;
}
export function ToastProvider({ children, maxStack = 3 }: ToastProviderProps) {
  const [openedToastsQueue, setOpenedToastsQueue] = useState<ToastOptions[]>([]);

  const openToast = useCallback(
    ({ id = generateID('lubycon-toast'), align = 'left', ...option }: ToastOptions) => {
      const toast = { id, align, ...option };
      const [, ...rest] = openedToastsQueue;

      if (openedToastsQueue.length >= maxStack) {
        setOpenedToastsQueue([...rest, toast]);
      } else {
        setOpenedToastsQueue([...openedToastsQueue, toast]);
      }
    },
    [openedToastsQueue]
  );

  const closeToast = useCallback(
    (closedToastId: string) => {
      setOpenedToastsQueue(openedToastsQueue.filter((toast) => toast.id !== closedToastId));
    },
    [openedToastsQueue]
  );

  return (
    <ToastContext.Provider
      value={{
        openToast,
        closeToast,
      }}
    >
      {children}
      <Portal>
        {aligns.map((align) => (
          <div
            key={align}
            className={classnames(
              'lubycon-toast__context-container',
              `lubycon-toast__context-container--align-${align}`
            )}
          >
            {openedToastsQueue
              .filter((toast) => toast.align === align)
              .map(({ id, align, onHide, duration = 3000, ...toastProps }) => (
                <Toast
                  key={id}
                  show={true}
                  align={align}
                  autoHideDuration={duration}
                  onHide={() => {
                    closeToast(id ?? '');
                    onHide?.();
                  }}
                  {...toastProps}
                />
              ))}
          </div>
        ))}
      </Portal>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
