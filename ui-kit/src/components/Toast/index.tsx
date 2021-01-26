import React, { HTMLAttributes, useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import classnames from 'classnames';
import ToastBody from './ToastBody';
import { useMemo } from 'react';

export type ToastAlign = 'left' | 'center' | 'right';

const getTranslateAnimation = (align: ToastAlign) => {
  switch (align) {
    case 'left':
      return {
        from: 'translateX(-100%)',
        to: 'translateX(0)',
      };
    case 'center':
      return {
        from: 'translateY(100%)',
        to: 'translateY(0)',
      };
    case 'right':
      return {
        from: 'translateX(100%)',
        to: 'translateX(0)',
      };
  }
};

export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  show: boolean;
  message: string;
  autoHideDuration?: number;
  onShow?: () => void;
  onHide?: () => void;
  align?: ToastAlign;
}
const Toast = ({
  show,
  message,
  autoHideDuration,
  onShow,
  onHide,
  className,
  style,
  align = 'left',
  ...rest
}: ToastProps) => {
  const [isOpen, setOpen] = useState(show);
  const translateAnimation = useMemo(() => getTranslateAnimation(align), [align]);

  const transition = useTransition(isOpen, null, {
    from: {
      opacity: 0,
      transform: translateAnimation.from,
      height: 60,
    },
    enter: [
      { height: 60 },
      {
        opacity: 1,
        transform: translateAnimation.to,
      },
    ],
    leave: [
      {
        opacity: 0,
        transform: translateAnimation.from,
      },
      { height: 0 },
    ],
    onStart: () => {
      onShow?.();
    },
    onDestroyed: () => {
      onHide?.();
    },
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (autoHideDuration != null && isOpen === true) {
      timer = setTimeout(() => {
        setOpen(false);
      }, autoHideDuration);
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {transition.map(({ item, key, props }) => {
        return item ? (
          <animated.div
            key={key}
            className={classnames('lubycon-toast', className)}
            style={{
              ...style,
              ...props,
            }}
            {...rest}
          >
            <ToastBody message={message} textAlign={align} />
          </animated.div>
        ) : null;
      })}
    </>
  );
};

export default Toast;
