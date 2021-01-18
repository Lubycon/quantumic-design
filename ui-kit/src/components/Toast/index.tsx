import React, { HTMLAttributes, useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import classnames from 'classnames';
import ToastBody from './ToastBody';

export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  show: boolean;
  message: string;
  autoHideDuration?: number;
  onShow?: () => void;
  onHide?: () => void;
}
const Toast = ({
  show,
  message,
  autoHideDuration,
  onShow,
  onHide,
  className,
  style,
  ...rest
}: ToastProps) => {
  const [isOpen, setOpen] = useState(show);

  const transition = useTransition(isOpen, null, {
    from: {
      opacity: 0,
      transform: 'translateX(-100%)',
      height: 60,
    },
    enter: [
      { height: 60 },
      {
        opacity: 1,
        transform: 'translateX(0)',
      },
    ],
    leave: [
      {
        opacity: 0,
        transform: 'translateX(-100%)',
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
            <div>
              <ToastBody message={message} />
            </div>
          </animated.div>
        ) : null;
      })}
    </>
  );
};

export default Toast;
