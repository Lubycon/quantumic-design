import React, { ReactNode, createContext, useState, useCallback, useContext } from 'react';
import { ToastProps } from 'components/Toast';

interface ToastOptions extends Omit<ToastProps, 'show'> {
  duration?: number;
}
interface ToastGlobalState {
  open: (option: ToastOptions) => void;
}
const ToastContext = createContext<ToastGlobalState>({
  open: () => {},
});

interface ToastProviderProps {
  children: ReactNode;
}
export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<string[]>([]);
  const [currentOpenedToasts, setCurrentOpenedToasts] = useState<string[]>([]);

  const open = useCallback((option: ToastOptions) => {
    console.log(option);
    setToasts((state) => [...state]);
  }, []);

  console.log(toasts);

  return (
    <ToastContext.Provider
      value={{
        open,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
