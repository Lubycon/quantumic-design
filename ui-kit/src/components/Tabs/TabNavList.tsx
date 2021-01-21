import React, { useContext, useState, useEffect, useMemo, useRef } from 'react';
import classnames from 'classnames';
import TabNode from './TabNode';
import TabContext from './TabContext';
import { TabOffsetMap, TabOffset, TabSizeMap } from './types';
import { useRefs } from '../../hooks';

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
  const { id, activeKey, animated, onTabClick } = props;

  const tabsWrapperRef = useRef<HTMLDivElement>();
  const tabListRef = useRef<HTMLDivElement>();
  const getTabRef = useRefs<HTMLDivElement>();

  const [wrapperScrollWidth, setWrapperScrollWidth] = useState<number>(0);
  const [wrapperContentWidth, setWrapperContentWidth] = useState<number>(0);
  const [wrapperWidth, setWrapperWidth] = useState<number>(0);
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

  useEffect(() => {
    const offsetWidth = tabsWrapperRef.current?.offsetWidth || 0;

    setWrapperWidth(offsetWidth);

    const newWrapperScrollWidth = tabListRef.current?.offsetWidth || 0;

    setWrapperScrollWidth(newWrapperScrollWidth);

    setWrapperContentWidth(newWrapperScrollWidth);

    setTabSizes(() => {
      const newSizes: TabSizeMap = new Map();
      tabs.forEach(({ key }) => {
        const tabNode = getTabRef(key).current;

        if (tabNode) {
          newSizes.set(key, {
            width: tabNode.offsetWidth,
            height: tabNode.offsetHeight,
            left: tabNode.offsetLeft,
            top: tabNode.offsetTop,
          });
        }
      });

      return newSizes;
    });
  }, []);

  function scrollToTab(key = activeKey) {}

  const tabNodes: React.ReactElement[] = tabs.map((tab) => {
    const { key } = tab;
    return (
      <TabNode
        id={id}
        tab={tab}
        key={key}
        ref={getTabRef(key)}
        active={key === activeKey}
        onClick={(e) => {
          onTabClick(key, e);
        }}
        onFocus={() => {
          scrollToTab(key);

          tabsWrapperRef.current.scrollToLeft = 0;
        }}
      />
    );
  });

  return (
    <div ref={ref} role="tablist" className={classnames('lubycon-tab-nav')}>
      <div ref={tabsWrapperRef} className={classnames('lubycon-nav-wrap')}>
        <div ref={tabListRef} className="lubycon-nav-list">
          {tabNodes}
        </div>

        <div
          className={classnames(`lubycon-bar`, {
            ['lubycon-bar-animated']: animated ? animated : true,
          })}
          style={barStyle}
        />
      </div>
    </div>
  );
}

export default React.forwardRef(TabNavList);
