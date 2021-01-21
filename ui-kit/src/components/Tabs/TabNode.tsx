import * as React from 'react';
import classNames from 'classnames';
import { Tab } from './types';

export interface TabNodeProps {
  id: string;
  tab: Tab;
  active: boolean;
  tabWidth?: number;
  onClick?: (e: React.MouseEvent) => void;
  tabBarGutter?: number;
  onFocus: React.FocusEventHandler;
}

function TabNode(
  {
    id,
    active,
    tab: { key, tab, disabled },
    tabBarGutter,
    tabWidth,
    onClick,
    onFocus,
  }: TabNodeProps,
  ref: React.Ref<HTMLDivElement>
) {
  const tabPrefix = 'lubycon-tab';

  const nodeStyle: React.CSSProperties = { marginLeft: tabBarGutter, width: tabWidth };

  function onInternalClick(e: React.MouseEvent) {
    if (disabled || !onClick) return;

    onClick(e);
  }

  return (
    <div
      key={key}
      ref={ref}
      className={classNames(tabPrefix, {
        [`${tabPrefix}-active`]: active,
        [`${tabPrefix}-disabled`]: disabled,
      })}
      style={nodeStyle}
      onClick={onInternalClick}
    >
      <div
        role="tab"
        aria-selected={active}
        id={id && `${id}-tab-${key}`}
        className={`${tabPrefix}-btn`}
        aria-controls={id && `${id}-panel-${key}`}
        aria-disabled={disabled}
        tabIndex={disabled ? undefined : 0}
        onClick={(e) => {
          e.stopPropagation();
          onInternalClick(e);
        }}
        onFocus={onFocus}
      >
        {tab}
      </div>
    </div>
  );
}

export default React.forwardRef(TabNode);
