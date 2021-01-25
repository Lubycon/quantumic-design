import * as React from 'react';
import classNames from 'classnames';
import { Tab } from './types';

export interface TabNodeProps {
  id: string;
  tab: Tab;
  active: boolean;
  tabWidth?: number;
  onClick?: (e: React.MouseEvent) => void;
  onFocus: React.FocusEventHandler;
}

function TabNode(
  { id, active, tab: { key, tab, disabled }, tabWidth, onClick, onFocus }: TabNodeProps,
  ref: React.Ref<HTMLDivElement>
) {
  const tabPrefix = 'lubycon-tab';

  const nodeStyle: React.CSSProperties = { width: tabWidth };

  function onInternalClick(e: React.MouseEvent) {
    if (disabled) {
      return;
    }

    onClick?.(e);
  }

  return (
    <div
      key={key}
      ref={ref}
      className={classNames(tabPrefix, {
        [`${tabPrefix}__active`]: active,
        [`${tabPrefix}__disabled`]: disabled,
      })}
      style={nodeStyle}
      onClick={onInternalClick}
    >
      <div
        role="tab"
        aria-selected={active}
        id={id !== null ? `${id}-tab-${key}` : ''}
        className={`${tabPrefix}__btn`}
        aria-controls={id !== null ? `${id}-panel-${key}` : ''}
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
