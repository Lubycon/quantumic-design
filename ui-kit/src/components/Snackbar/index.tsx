import React, { HTMLAttributes, useEffect, useState, ReactNode } from 'react';
import { animated, useTransition } from 'react-spring';
import classnames from 'classnames';
import SnackbarBody from './SnackbarBody';
import { Combine } from 'src/types/utils';

export type SnackbarProps = Combine<
  {
    show: boolean;
    message: string;
    button: ReactNode;
    autoHideDuration?: number;
    onShow?: () => void;
    onHide?: () => void;
    onClick?: () => void;
  },
  Omit<HTMLAttributes<HTMLDivElement>, 'children'>
>;

const Snackbar = ({
  show,
  message,
  button,
  autoHideDuration,
  onShow,
  onHide,
  onClick,
  className,
  style,
  ...rest
}: SnackbarProps) => {
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
            className={classnames('lubycon-snackbar', className)}
            style={{
              ...style,
              ...props,
            }}
            {...rest}
          >
            <SnackbarBody message={message} button={button} onClick={onClick} />
          </animated.div>
        ) : null;
      })}
    </>
  );
};

export default Snackbar;
