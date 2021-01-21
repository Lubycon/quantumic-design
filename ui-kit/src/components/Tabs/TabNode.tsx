import * as React from 'react';
import classNames from 'classnames';
import { Tab, EditableConfig } from './types';

export interface TabNodeProps {
  id: string;
  tab: Tab;
  active: boolean;
  closable?: boolean;
  editable?: EditableConfig;
  onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;
  onResize?: (width: number, height: number, left: number, top: number) => void;
  tabBarGutter?: number;
  renderWrapper?: (node: React.ReactElement) => React.ReactElement;
  onFocus: React.FocusEventHandler;
}

function TabNode(
  {
    id,
    active,
    tab: { key, tab, disabled },
    tabBarGutter,
    closable,
    renderWrapper,
    editable,
    onClick,
    onFocus,
  }: TabNodeProps,
  ref: React.Ref<HTMLDivElement>
) {
  const tabPrefix = 'lubycon-tab';

  const nodeStyle: React.CSSProperties = { marginLeft: tabBarGutter };

  const removable = editable && closable !== false && !disabled;

  function onInternalClick(e: React.MouseEvent | React.KeyboardEvent) {
    if (disabled) return;

    onClick(e);
  }

  let node: React.ReactElement = (
    <div
      key={key}
      ref={ref}
      className={classNames(tabPrefix, {
        [`${tabPrefix}-with-remove`]: removable,
        [`${tabPrefix}-active`]: active,
        [`${tabPrefix}-disabled`]: disabled,
      })}
      style={nodeStyle}
      onClick={onInternalClick}
    >
      {/* Primary Tab Button */}
      <div
        role="tab"
        aria-selected={active}
        id={id && `${id}-tab-${key}`}
        className={`${tabPrefix}-btn`}
        aria-controls={id && `${id}-panel-${key}`}
        aria-disabled={disabled}
        tabIndex={disabled ? null : 0}
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

  if (renderWrapper) {
    node = renderWrapper(node);
  }

  return node;
}

export default React.forwardRef(TabNode);
