import { Fragment, CSSProperties, ElementType, PropsWithChildren } from 'react';
import { TransitionKeyProps, useTransition, animated } from 'react-spring';
import { OverridableProps } from '../../types/OverridableProps';

type Props<E extends ElementType = 'div'> = OverridableProps<
  E,
  {
    flag: boolean;
    keys?: TransitionKeyProps | TransitionKeyProps[] | null;
    from?: Partial<CSSProperties>;
    enter?: Partial<CSSProperties> | Partial<CSSProperties>[];
    leave?: Partial<CSSProperties> | Partial<CSSProperties>[];
    onStart?: () => void;
    onDestroyed?: () => void;
  }
>;
const TransitionMotion = <T extends ElementType = 'div'>({
  flag,
  keys = null,
  from,
  enter,
  leave,
  children,
  onStart,
  onDestroyed,
  as,
  style,
  ...rest
}: PropsWithChildren<Props<T>>) => {
  const transitions = useTransition(flag, keys, {
    from,
    enter,
    leave,
    onStart,
    onDestroyed,
  });
  const componentKey = as as keyof JSX.IntrinsicElements;
  const Component = animated[componentKey];

  return (
    <Fragment>
      {transitions.map(({ item, key, props }) => {
        return item ? (
          <Component key={key} {...rest} style={{ ...style, ...props }}>
            {children}
          </Component>
        ) : null;
      })}
    </Fragment>
  );
};

export default TransitionMotion;
