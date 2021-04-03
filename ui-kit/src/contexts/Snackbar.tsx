import React, { ReactNode, createContext, useState, useCallback, useContext } from 'react';
import classnames from 'classnames';
import Snackbar, { SnackbarAlign, SnackbarProps } from 'components/Snackbar';
import { generateID } from 'src/utils';
import { Portal } from './Portal';

type SnackbarOptions = Omit<SnackbarProps, 'show'>;

const aligns: SnackbarAlign[] = ['left', 'center', 'right'];

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
export function SnackbarProvider({ children, maxStack = 3 }: SnackbarProviderProps) {
  const [openedSnackbarQueue, setOpenedSnackbarQueue] = useState<SnackbarOptions[]>([]);

  const openSnackbar = useCallback(
    ({ id = generateID('lubycon-snackbar'), align = 'left', ...option }: SnackbarOptions) => {
      const snackbar = { id, align, ...option };
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
        {aligns.map((align) => (
          <div
            key={align}
            className={classnames(
              'lubycon-snackbar__context-container',
              `lubycon-snackbar__context-container--align-${align}`
            )}
          >
            {openedSnackbarQueue
              .filter((snackbar) => snackbar.align === align)
              .map(({ id, onHide, autoHideDuration = 3000, ...snackbarProps }) => (
                <Snackbar
                  key={id}
                  show={true}
                  autoHideDuration={autoHideDuration}
                  onHide={() => {
                    closeSnackbar(id ?? '');
                    onHide?.();
                  }}
                  align={align}
                  {...snackbarProps}
                />
              ))}
          </div>
        ))}
      </Portal>
    </SnackbarContext.Provider>
  );
}

export function useSnackbar() {
  return useContext(SnackbarContext);
}
