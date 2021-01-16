import React, { HTMLAttributes } from 'react';
import { animated, useSpring } from 'react-spring';
import classnames from 'classnames';
import { Portal } from 'contexts/Portal';
import ToastBody from './ToastBody';

export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  show: boolean;
  message: string;
  duration?: number;
  onShow?: () => void;
  onHide?: () => void;
}
const Toast = ({ show, message, onShow, onHide, className, style, ...rest }: ToastProps) => {
  const animation = useSpring<{
    progress: number;
    opacity: number;
    translateY: number;
    onFrame: (props: { progress: number }) => void;
  }>({
    progress: show ? 1 : 0,
    opacity: show ? 1 : 0,
    translateY: show ? 0 : 100,
    onFrame: ({ progress }) => {
      if (show && progress === 1) {
        onShow?.();
      }

      if (!show && progress === 0) {
        onHide?.();
      }
    },
  });

  return (
    <Portal>
      <animated.div
        className={classnames('lubycon-toast', className)}
        style={{
          ...style,
          display: animation.progress.interpolate((v) => (v === 0 ? 'none' : 'block')),
          opacity: animation.opacity.interpolate((v) => v),
          transform: animation.translateY.interpolate((v) => `translateY(${v}%)`),
        }}
        {...rest}
      >
        <ToastBody message={message} />
      </animated.div>
    </Portal>
  );
};

export default Toast;
