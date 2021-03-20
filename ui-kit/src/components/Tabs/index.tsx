import React, { HTMLProps, ReactElement, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import TabsContext, { TabsIndicatorPosition } from './TabsContext';
import TabsIndicator from './TabsIndicator';
import { useSpring, config } from 'react-spring';

interface Props extends Omit<HTMLProps<HTMLDivElement>, 'onChange' | 'role'> {
  children: ReactElement | ReactElement[];
  onChange?: (value: string) => void;
  selectedValue: string;
}

const Tabs = ({ selectedValue, onChange, children, className, ...props }: Props) => {
  const [indicatorPosition, setIndicatorPosition] = useState<TabsIndicatorPosition | null>(null);
  const tabRef = useRef<HTMLDivElement>(null);

  const [, setScrollLeft] = useSpring(() => {
    return {
      scrollLeft: tabRef.current?.scrollLeft ?? 0,
      config: config.gentle,
      onFrame: ({ scrollLeft }: { scrollLeft: number }) => {
        if (tabRef.current == null) {
          return;
        }

        tabRef.current.scrollTo({
          left: scrollLeft,
        });
      },
    };
  });

  useEffect(() => {
    if (indicatorPosition == null || tabRef.current == null) {
      return;
    }

    setScrollLeft({
      immediate: true,
      scrollLeft: tabRef.current.scrollLeft,
    });

    const scrollLeft = Math.min(
      Math.max(
        indicatorPosition.left + indicatorPosition.width / 2 - tabRef.current.clientWidth / 2,
        0
      ),
      tabRef.current.scrollWidth - window.innerWidth
    );

    setScrollLeft({
      immediate: false,
      scrollLeft,
    });
  }, [indicatorPosition, setScrollLeft]);

  return (
    <TabsContext.Provider
      value={{
        selectedValue,
        onSelect: (value) => {
          onChange?.(value);
        },
        indicatorPosition,
        setIndicatorPosition,
      }}
    >
      <div className={classnames('lubycon-tabs', className)} {...props}>
        {children}
        {indicatorPosition != null ? <TabsIndicator {...indicatorPosition} /> : null}
      </div>
    </TabsContext.Provider>
  );
};

export default Tabs;
export { default as TabsItem } from './TabsItem';
