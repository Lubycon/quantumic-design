import React from 'react';
import classnames from 'classnames';

export interface TabPaneProps {
  tab?: React.ReactNode;
  children?: React.ReactNode;
  active?: boolean;
  animated?: boolean;
  disabled?: boolean;
}

export default function TabPane({ active, animated, children }: TabPaneProps) {
  const mergedStyle: React.CSSProperties = {};
  if (!active) {
    if (animated) {
      mergedStyle.visibility = 'hidden';
      mergedStyle.height = 0;
      mergedStyle.overflowY = 'hidden';
    } else {
      mergedStyle.display = 'none';
    }
  }

  return (
    <div
      role="tabpanel"
      tabIndex={active ? 0 : -1}
      aria-hidden={!active}
      className={classnames('lubycon-tab-pane', active && `lubycon-tab-pane--active`)}
      style={{ ...mergedStyle }}
    >
      {active && children}
    </div>
  );
}
