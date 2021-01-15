import React, { HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import classnames from 'classnames';
import { Portal } from 'contexts/Portal';
import ToastBody from './ToastBody';

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  show: boolean;
  children: ReactNode;
  duration?: number;
  onShow?: () => void;
  onHide?: () => void;
}
const Toast = ({
  show,
  children,
  duration = 3000,
  onShow,
  onHide,
  className,
  style,
  ...rest
}: Props) => {
  const [isOpen, setOpen] = useState(show);
  const animation = useSpring<{
    progress: number;
    opacity: number;
    translateY: number;
    onFrame: (props: { progress: number }) => void;
  }>({
    progress: isOpen ? 1 : 0,
    opacity: isOpen ? 1 : 0,
    translateY: isOpen ? 0 : 100,
    onFrame: ({ progress }) => {
      if (isOpen && progress === 1) {
        onShow?.();
      }

      if (!isOpen && progress === 0) {
        onHide?.();
      }
    },
  });

  useEffect(() => {
    if (isOpen === true) {
      setTimeout(() => {
        setOpen(false);
      }, duration);
    }
  }, [isOpen]);

  useEffect(() => setOpen(show), [show]);

  console.log(show);

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
        <ToastBody>{children}</ToastBody>
      </animated.div>
    </Portal>
  );
};

export default Toast;
