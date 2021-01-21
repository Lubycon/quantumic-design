import React, { useContext, useState, useEffect, useMemo } from 'react';
import classnames from 'classnames';
import TabNode from './TabNode';
import TabContext from './TabContext';
import { TabOffsetMap, TabOffset, TabSizeMap } from './types';

const DEFAULT_SIZE = { width: 0, height: 0, left: 0, top: 0 };

export interface TabNavListProps {
  id: string;
  activeKey: string;
  panes: React.ReactNode;
  animated?: boolean;
  tabBarGutter?: number;
  className?: string;
  style?: React.CSSProperties;
  onTabClick: (activeKey: string, e: React.MouseEvent) => void;
  children?: (node: React.ReactElement) => React.ReactElement;
}

function TabNavList(props: TabNavListProps, ref: React.Ref<HTMLDivElement>) {
  const { tabs } = useContext(TabContext);
  const { id, activeKey, animated } = props;

  const [wrapperScrollWidth, setWrapperScrollWidth] = useState<number>(0);
  const [barStyle, setBarStyle] = useState<React.CSSProperties>();
  const [tabSizes, setTabSizes] = useState<TabSizeMap>(new Map());

  const tabOffsets = useMemo(() => {
    const map: TabOffsetMap = new Map();

    const lastOffset = tabSizes.get(tabs[0]?.key) || DEFAULT_SIZE;
    const rightOffset = lastOffset.left + lastOffset.width;

    for (let i = 0; i < tabs.length; i += 1) {
      const { key } = tabs[i];
      let data = tabSizes.get(key);

      if (!data) {
        data = tabSizes.get(tabs[i - 1]?.key) || DEFAULT_SIZE;
      }

      const entity = (map.get(key) || { ...data }) as TabOffset;
      entity.right = rightOffset - entity.left - entity.width;
      map.set(key, entity);
    }

    return map;
  }, [tabs.map((tab) => tab.key).join('_'), tabSizes, wrapperScrollWidth]);

  const activeTabOffset = tabOffsets.get(activeKey);

  useEffect(() => {
    const newBarStyle: React.CSSProperties = {};

    if (activeTabOffset) {
      newBarStyle.left = activeTabOffset.left;
      newBarStyle.width = activeTabOffset.width;
    }

    setBarStyle(newBarStyle);
  }, [activeTabOffset]);

  function scrollToTab(key = activeKey) {}

  const tabNodes: React.ReactElement[] = tabs.map((tab) => {
    const { key } = tab;
    console.log(key, activeKey);

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
      <div>
        <div className="lubycon-nav-list">{tabNodes}</div>

        <div
          className={classnames(`lubycon-bar`, {
            ['lubycon-bar-animated']: animated,
          })}
          style={barStyle}
        />
      </div>
    </div>
  );
}

export default React.forwardRef(TabNavList);
