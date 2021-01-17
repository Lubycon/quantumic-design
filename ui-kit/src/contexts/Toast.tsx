import React, {
  ReactNode,
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import Toast, { ToastProps } from 'components/Toast';
import { generateID } from 'src/utils';
import { Portal } from './Portal';
import ToastStories from 'src/stories/Toast.stories';

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
  const [waitToastsQueue, setWaitToastsQueue] = useState<ToastOptions[]>([]);
  const [openedToastsQueue, setOpenedToastsQueue] = useState<ToastOptions[]>([]);

  const openToast = useCallback(
    (option: ToastOptions) => {
      const id = option.id ?? generateID('lubycon-toast');
      setWaitToastsQueue([...waitToastsQueue, { id, ...option }]);
    },
    [waitToastsQueue]
  );

  const closeToast = useCallback(
    (closedToastId: string) => {
      setOpenedToastsQueue(openedToastsQueue.filter((toast) => toast.id !== closedToastId));
      moveToastFromWaitQueueToOpenedQueue();
    },
    [openedToastsQueue]
  );

  const moveToastFromWaitQueueToOpenedQueue = () => {
    const currentToast = waitToastsQueue[0];
    if (currentToast) {
      setWaitToastsQueue((toasts) => toasts.filter((toast) => toast.id !== currentToast.id));
      setOpenedToastsQueue((toasts) => [...toasts, currentToast]);
    }
  };

  useEffect(() => {
    if (openedToastsQueue.length >= maxStack) {
      return;
    }
    console.log('wait queue -> ', waitToastsQueue);
    moveToastFromWaitQueueToOpenedQueue();
  }, [waitToastsQueue]);

  useEffect(() => {
    console.log('open queue -> ', openedToastsQueue);
  }, [openedToastsQueue]);

  return (
    <ToastContext.Provider
      value={{
        openToast,
        closeToast,
      }}
    >
      {children}
      <Portal>
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
      </Portal>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
