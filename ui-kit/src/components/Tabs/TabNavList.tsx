import React from 'react';
import classnames from 'classnames';
import TabNode from './TabNode';
import TabContext from './TabContext';
import { RenderTabBar, TabsLocale, EditableConfig, OnTabScroll, TabBarExtraContent } from './types';

export interface TabNavListProps {
  id: string;
  activeKey: string;
  panes: React.ReactNode;
  animated?: boolean;
  extra?: TabBarExtraContent;
  editable?: EditableConfig;
  moreIcon?: React.ReactNode;
  moreTransitionName?: string;
  tabBarGutter?: number;
  renderTabBar?: RenderTabBar;
  className?: string;
  style?: React.CSSProperties;
  locale?: TabsLocale;
  onTabClick: (activeKey: React.Key, e: React.MouseEvent | React.KeyboardEvent) => void;
  onTabScroll?: OnTabScroll;
  children?: (node: React.ReactElement) => React.ReactElement;
}

function TabNavList(props: TabNavListProps, ref: React.Ref<HTMLDivElement>) {
  const { id, activeKey } = props;

  const { tabs } = React.useContext(TabContext);

  function scrollToTab(key = activeKey) {}

  const tabNodes: React.ReactElement[] = tabs.map((tab) => {
    const { key } = tab;
    return (
      <TabNode
        id={id}
        tab={tab}
        key={key}
        active={key === activeKey}
        onFocus={() => {
          scrollToTab(key);
        }}
      />
    );
  });

  return (
    <div ref={ref} role="tablist" className={classnames('lubycon-tab-nav')}>
      <div>{tabNodes}</div>
    </div>
  );
}

export default React.forwardRef(TabNavList);
