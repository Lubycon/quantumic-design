import React from 'react';
import classnames from 'classnames';
import TabPane from './TabPane';
import TabNavList from './TabNavList';
import { Tab } from './types';
import { useMergedState } from '../../hooks';
import TabContext from './TabContext';
import TabPanelList from './TabPanelList';

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children?: React.ReactNode;
  activeKey?: string;
  defaultActiveKey?: string;
  animated?: boolean;
  tabWidth?: number;
  onTabClick?: (activeKey: string, e: React.MouseEvent) => void;
  onChange?: (activeKey: string) => void;
}

function parseTabList(children: React.ReactNode): Tab[] {
  return React.Children.toArray(children)
    .map((node) => {
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
  { children, activeKey, defaultActiveKey, animated, tabWidth, onTabClick, onChange }: TabsProps,
  ref: React.Ref<HTMLDivElement>
) {
  const tabs = parseTabList(children);

  const [mergedActiveKey, setMergedActiveKey] = useMergedState<string>(() => tabs[0]?.key, {
    value: activeKey,
    defaultValue: defaultActiveKey,
  });

  function onInternalTabClick(key: string, e: React.MouseEvent) {
    onTabClick?.(key, e);

    setMergedActiveKey(key);
    onChange?.(key);
  }

  const tabNavBarProps = {
    id: '',
    activeKey: mergedActiveKey,
    animated,
    tabWidth,
    panes: children,
    onTabClick: onInternalTabClick,
  };

  const tabNavBar: React.ReactElement = <TabNavList {...tabNavBarProps} />;

  return (
    <TabContext.Provider value={{ tabs }}>
      <div ref={ref} className={classnames('lubycon-tabs')}>
        {tabNavBar}

        <TabPanelList activeKey={mergedActiveKey} animated={animated} />
      </div>
    </TabContext.Provider>
  );
}

const ForwardTabs = React.forwardRef(Tabs);

export type ForwardTabsType = typeof ForwardTabs & { TabPane: typeof TabPane };

(ForwardTabs as ForwardTabsType).TabPane = TabPane;

export default ForwardTabs as ForwardTabsType;
