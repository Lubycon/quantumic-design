import React, { ReactNode, createContext, useState, useCallback, useContext } from 'react';
import classnames from 'classnames';
import Snackbar, { SnackbarProps } from 'components/Snackbar';
import { generateID } from 'src/utils';
import { Portal } from './Portal';
interface SnackbarOptions extends Omit<SnackbarProps, 'show'> {
  duration?: number;
}

interface SnackbarGlobalState {
  openSnackbar: (option: SnackbarOptions) => void;
  closeSnackbar: (toastId: string) => void;
}
const SnackbarContext = createContext<SnackbarGlobalState>({
  openSnackbar: () => {},
  closeSnackbar: () => {},
});

interface SnackbarProviderProps {
  children: ReactNode;
  maxStack?: number;
}
export function SnackbarProvider({ children, maxStack = 1 }: SnackbarProviderProps) {
  const [openedSnackbarQueue, setOpenedSnackbarQueue] = useState<SnackbarOptions[]>([]);

  const openSnackbar = useCallback(
    ({ id = generateID('lubycon-snackbar'), ...option }: SnackbarOptions) => {
      const snackbar = { id, ...option };
      const [, ...rest] = openedSnackbarQueue;

      if (openedSnackbarQueue.length >= maxStack) {
        setOpenedSnackbarQueue([...rest, snackbar]);
      } else {
        setOpenedSnackbarQueue([...openedSnackbarQueue, snackbar]);
      }
    },
    [openedSnackbarQueue]
  );

  const closeSnackbar = useCallback(
    (closedSnackbarId: string) => {
      setOpenedSnackbarQueue(
        openedSnackbarQueue.filter((snackbar) => snackbar.id !== closedSnackbarId)
      );
    },
    [openedSnackbarQueue]
  );

  return (
    <SnackbarContext.Provider
      value={{
        openSnackbar,
        closeSnackbar,
      }}
    >
      {children}
      <Portal>
        <div className={classnames('lubycon-snackbar__context-container')}>
          {openedSnackbarQueue.map(({ id, onHide, duration = 3000, ...snackbarProps }) => (
            <Snackbar
              key={id}
              show={true}
              autoHideDuration={duration}
              onHide={() => {
                closeSnackbar(id ?? '');
                onHide?.();
              }}
              {...snackbarProps}
            />
          ))}
        </div>
      </Portal>
    </SnackbarContext.Provider>
  );
}

export function useSnackbar() {
  return useContext(SnackbarContext);
}
