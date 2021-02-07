import React, { useMemo } from 'react';
import classnames from 'classnames';

export interface TabPaneProps {
  tab?: React.ReactNode;
  children?: React.ReactNode;
  active?: boolean;
  animated?: boolean;
  disabled?: boolean;
}

const animatedInvisibleStyle = {
  visibility: 'hidden',
  height: 0,
  overflowY: 'hidden',
};
const notAnimatedInvisibleStyle = {
  display: 'none',
};

export default function TabPane({ active = false, animated, children }: TabPaneProps) {
  const style = useMemo(() => {
    if (active) {
      return {};
    } else {
      if (animated === true) {
        return animatedInvisibleStyle;
      } else {
        return notAnimatedInvisibleStyle;
      }
    }
  }, [active, animated]);

  return (
    <div
      role="tabpanel"
      tabIndex={active ? 0 : -1}
      aria-hidden={!active}
      className={classnames('lubycon-tab__pane', active && `lubycon-tab__pane__active`)}
      style={style}
    >
      {active && children}
    </div>
  );
}
