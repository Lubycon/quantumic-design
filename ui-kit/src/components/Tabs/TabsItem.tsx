import React, { ReactNode, useRef, HTMLProps, Ref, forwardRef, useContext, useEffect } from 'react';
import classnames from 'classnames';
import useCombinedRefs from 'src/hooks/useCombinedRefs';
import TabsContext from './TabsContext';
import Text from 'components/Text';

export interface Props
  extends Omit<HTMLProps<HTMLDivElement>, 'role' | 'aria-disabled' | 'aria-selected'> {
  children: ReactNode;
  disabled?: boolean;
  value?: string;
}

function TabItem(
  { children, disabled = false, value = String(children), className, onClick, ...props }: Props,
  forwardedRef: Ref<HTMLDivElement>
) {
  const { selectedValue, onSelect, indicatorPosition, setIndicatorPosition } = useContext(
    TabsContext
  );
  const isSelected = selectedValue === value;
  const internalRef = useRef<HTMLDivElement | null>(null);

  const ref = useCombinedRefs(internalRef, forwardedRef);

  useEffect(() => {
    if (isSelected) {
      const width = internalRef.current!.clientWidth;
      const left = internalRef.current!.offsetLeft;
      setIndicatorPosition({ width, left });
    }
  }, [isSelected, value, setIndicatorPosition]);

  return (
    <div
      ref={(element) => {
        ref(element);

        if (indicatorPosition == null && element != null && isSelected) {
          const width = element.clientWidth;
          const left = element.offsetLeft;

          setIndicatorPosition({ width, left });
        }
      }}
      className={classnames(
        'lubycon-tabs__item',
        {
          'lubycon-tabs__item--selected': isSelected,
          'lubycon-tabs__item--disabled': disabled,
        },
        className
      )}
      role="tab"
      aria-disabled={disabled}
      aria-selected={isSelected}
      {...props}
      onClick={(event) => {
        if (disabled) {
          event.preventDefault();
          return;
        }

        onClick?.(event);
        onSelect(value);
      }}
    >
      <Text className="lubycon-tabs__item__text" typography="p2">
        {children}
      </Text>
    </div>
  );
}

export default forwardRef(TabItem);
