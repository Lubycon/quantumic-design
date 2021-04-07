import React, { memo } from 'react';
import { animated, useSpring, config } from 'react-spring';
import { TabsIndicatorPosition } from './TabsContext';

const TabsIndicator = memo(({ width, left }: TabsIndicatorPosition) => {
  const animation = useSpring({
    width,
    left,
    config: config.gentle,
  });

  return (
    <animated.div
      className="lubycon-tabs__indicator"
      style={{
        width: animation.width,
        transform: animation.left.interpolate((value) => `translateX(${value}px)`),
      }}
    />
  );
});

export default TabsIndicator;
