import { CSSProperties, ElementType, PropsWithChildren } from 'react';
import { TransitionKeyProps, useTransition, animated } from 'react-spring';
import { OverridableProps } from 'src/types/OverridableProps';

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
const TransitionMotion = ({
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
}: PropsWithChildren<Props>) => {
  const transitions = useTransition(flag, keys, {
    from,
    enter,
    leave,
    onStart,
    onDestroyed,
  });
  const Component = animated[as ?? 'div'];

  return (
    <>
      {transitions.map(({ item, key, props }) => {
        return item ? (
          <Component key={key} {...rest} style={{ ...style, ...props }}>
            {children}
          </Component>
        ) : null;
      })}
    </>
  );
};

export default TransitionMotion;
