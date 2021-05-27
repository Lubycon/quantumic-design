import React, { useEffect, ReactNode, useMemo } from 'react';
import { animated, useTransition } from 'react-spring';
import classnames from 'classnames';
import SnackbarBody from './SnackbarBody';
import { CombineElementProps } from 'src/types/utils';
import { getTranslateAnimation } from './utils';

export type SnackbarAlign = 'left' | 'center' | 'right';

export type SnackbarProps = Omit<
  CombineElementProps<
    'div',
    {
      show: boolean;
      message: string;
      button?: ReactNode;
      autoHideDuration?: number;
      onClose?: () => void;
      onShow?: () => void;
      onHide?: () => void;
      onClick?: () => void;
      align?: SnackbarAlign;
    }
  >,
  'children'
>;

const Snackbar = ({
  show,
  message,
  button,
  autoHideDuration,
  onClose,
  onShow,
  onHide,
  onClick,
  className,
  style,
  align = 'left',
  ...rest
}: SnackbarProps) => {
  const translateAnimation = useMemo(() => getTranslateAnimation(align), [align]);
  const transition = useTransition(show, null, {
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
    if (autoHideDuration != null && show === true) {
      timer = setTimeout(() => {
        onClose?.();
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
