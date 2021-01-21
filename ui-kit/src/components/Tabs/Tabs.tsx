import React, { useState } from 'react';
import classnames from 'classnames';
import TabPane, { TabPaneProps } from './TabPane';
import TabNavList from './TabNavList';
import { Tab } from './types';

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children?: React.ReactNode;
  activeKey?: string;
  defaultActiveKey?: string;
  animated?: boolean;
  onTabClick?: (activeKey: string, e: React.MouseEvent) => void;
  onChange?: (activeKey: string) => void;
}

function parseTabList(children: React.ReactNode): Tab[] {
  return toArray(children)
    .map((node: React.ReactElement<TabPaneProps>) => {
      if (React.isValidElement(node)) {
        const key = node.key !== undefined ? String(node.key) : undefined;
        return {
          key,
          ...node.props,
          node,
        };
      }

      return null;
    })
    .filter((tab) => tab);
}

function Tabs(
  { children, activeKey, defaultActiveKey, animated, onTabClick, onChange }: TabsProps,
  ref: React.Ref<HTMLDivElement>
) {
  const tabs = parseTabList(children);

  const [selectedKey, setSelectedKey] = useState<string>(() => {
    if (tabs) {
      return tabs[0].key;
    } else {
      return activeKey ? activeKey : defaultActiveKey;
    }
  });

  function onInternalTabClick(key: string, e: React.MouseEvent) {
    onTabClick?.(key, e);

    setSelectedKey(key);
    onChange?.(key);
  }

  const tabNavBarProps = {
    id: '',
    activeKey: selectedKey,
    animated,
    panes: children,
    onTabClick: onInternalTabClick,
  };

  const tabNavBar: React.ReactElement = <TabNavList {...tabNavBarProps} />;

  return (
    <div ref={ref} className={classnames('lubycon-tabs')}>
      {tabNavBar}
    </div>
  );
}

const ForwardTabs = React.forwardRef(Tabs);

export type ForwardTabsType = typeof ForwardTabs & { TabPane: typeof TabPane };

(ForwardTabs as ForwardTabsType).TabPane = TabPane;

export default ForwardTabs as ForwardTabsType;
