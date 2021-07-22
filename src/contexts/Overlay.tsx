import React, {
  ReactNode,
  useState,
  useCallback,
  Fragment,
  createContext,
  PropsWithChildren,
  useMemo,
} from 'react';
import { useContext } from 'react';
import { Portal } from 'src';
import { generateID } from 'src/utils';

interface OverlayValues {
  open: (element: ReactNode) => string;
  close: (overlayId: string) => void;
}
const OverlayContext = createContext<OverlayValues>({
  open: () => '',
  close: () => {},
});

function OverlayProvider({ children }: PropsWithChildren<unknown>) {
  const [overlays, setOverlays] = useState(new Map<string, ReactNode>());

  const open = useCallback((element: ReactNode) => {
    const overlayId = generateID('overlay');
    setOverlays((state) => {
      const newState = new Map(state);
      newState.set(overlayId, element);
      return newState;
    });

    return overlayId;
  }, []);

  const close = useCallback((overlayId: string) => {
    setOverlays((state) => {
      const newState = new Map(state);
      newState.delete(overlayId);
      return newState;
    });
  }, []);

  const values = useMemo(
    () => ({
      open,
      close,
    }),
    [open, close]
  );

  return (
    <OverlayContext.Provider value={values}>
      {children}
      <Portal>
        {Array.from(overlays).map(([id, element]) => (
          <Fragment key={id}>{element}</Fragment>
        ))}
      </Portal>
    </OverlayContext.Provider>
  );
}

function useOverlay() {
  return useContext(OverlayContext);
}

export { OverlayProvider, useOverlay };
