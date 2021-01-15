import React, { HTMLAttributes, ReactNode } from 'react';
import { Portal } from 'src/contexts/Portal';
import ToastBody from './ToastBody';

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  show: boolean;
  children: ReactNode;
  onShow?: () => void;
  onHide?: () => void;
}
const Toast = ({ show, children, onShow, onHide, ...rest }: Props) => {
  return (
    <Portal>
      <ToastBody>{children}</ToastBody>
    </Portal>
  );
};

export default Toast;
