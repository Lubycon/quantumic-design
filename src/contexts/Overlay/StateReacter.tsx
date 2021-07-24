import { forwardRef, useState, useCallback, useImperativeHandle } from 'react';
import { OverlayController } from './types';

export interface StateReacterAPI {
  open: () => void;
  close: () => void;
}
const StateReacter = forwardRef<any, { controller: OverlayController }>(function StateReacter(
  { controller },
  ref
) {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  useImperativeHandle(ref, () => ({
    open,
    close,
  }));

  return controller({ isOpen, close });
});

export default StateReacter;
