import React, { ReactNode, createContext, useState, useCallback, useContext } from 'react';
import classnames from 'classnames';
import Toast, { ToastProps } from 'components/Toast';
import { generateID } from 'src/utils';
import { Portal } from './Portal';

interface ToastOptions extends Omit<ToastProps, 'show'> {
  duration?: number;
}
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
    (option: ToastOptions) => {
      const id = option.id ?? generateID('lubycon-toast');
      const toast = { id, ...option };
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
        <div className={classnames('lubycon-toast--context-container')}>
          {openedToastsQueue.map(({ id, onHide, duration = 3000, ...toastProps }) => (
            <Toast
              key={id}
              show={true}
              autoHideDuration={duration}
              onHide={() => {
                closeToast(id ?? '');
                onHide?.();
              }}
              {...toastProps}
            />
          ))}
        </div>
      </Portal>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
