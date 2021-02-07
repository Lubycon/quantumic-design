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
  tabWidth?: number;
  onTabClick: (activeKey: string, e: React.MouseEvent) => void;
  children?: (node: React.ReactElement) => React.ReactElement;
}

function TabNavList(
  { animated = true, ...props }: TabNavListProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { tabs } = useContext(TabContext);
  const { id, activeKey, tabWidth, onTabClick } = props;

  const tabsWrapperRef = useRef<HTMLDivElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);
  const getTabRef = useRefs<HTMLDivElement>();

  const [wrapperScrollWidth, setWrapperScrollWidth] = useState<number>(0);
  const [, setWrapperContentWidth] = useState<number>(0);
  const [, setWrapperWidth] = useState<number>(0);
  const [barStyle, setBarStyle] = useState<React.CSSProperties>();
  const [tabSizes, setTabSizes] = useState<TabSizeMap>(new Map());

  const tabOffsets = useMemo(() => {
    const map: TabOffsetMap = new Map();

    const lastOffset = tabSizes.get(tabs[0].key) ?? DEFAULT_SIZE;
    const rightOffset = lastOffset.left + lastOffset.width;

    tabs.forEach(({ key }, i) => {
      const prevTab = tabs[i - 1];

      let data = tabSizes.get(key);

      if (!data) {
        data = tabSizes.get(prevTab?.key) ?? DEFAULT_SIZE;
      }

      const entity = (map.get(key) ?? { ...data }) as TabOffset;
      entity.right = rightOffset - entity.left - entity.width;
      map.set(key, entity);
    });

    return map;
  }, [tabs.map((tab) => tab.key).join('_'), tabSizes, wrapperScrollWidth]);

  const activeTabOffset = tabOffsets.get(activeKey);

  useEffect(() => {
    const newBarStyle: React.CSSProperties = {};

    if (activeTabOffset) {
      newBarStyle.left = activeTabOffset.left;
      newBarStyle.width = tabWidth ?? activeTabOffset.width;
    }

    setBarStyle(newBarStyle);
  }, [activeTabOffset, tabWidth]);

  useEffect(() => {
    const offsetWidth = tabsWrapperRef.current?.offsetWidth ?? 0;

    setWrapperWidth(offsetWidth);

    const newWrapperScrollWidth = tabListRef.current?.offsetWidth ?? 0;

    setWrapperScrollWidth(newWrapperScrollWidth);

    setWrapperContentWidth(newWrapperScrollWidth);

    setTabSizes(() => {
      const newSizes: TabSizeMap = new Map();
      tabs.forEach(({ key }) => {
        const tabNode = getTabRef(key)?.current;

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

  const tabNodes: React.ReactElement[] = tabs.map((tab) => {
    const { key } = tab;
    return (
      <TabNode
        id={id}
        tab={tab}
        key={key}
        ref={getTabRef(key)}
        tabWidth={tabWidth}
        active={key === activeKey}
        onClick={(e) => {
          onTabClick(key, e);
        }}
        onFocus={() => {
          if (tabsWrapperRef?.current != null) {
            tabsWrapperRef.current.scrollLeft = 0;
          }
        }}
      />
    );
  });

  return (
    <div ref={ref} role="tablist" className={classnames('lubycon-tab__nav')}>
      <div ref={tabsWrapperRef} className={classnames('lubycon-tab__nav__wrap')}>
        <div ref={tabListRef} className="lubycon-nav-list">
          {tabNodes}
        </div>

        <div
          className={classnames(`lubycon-tab__bar`, {
            ['lubycon-tab__bar__animated']: animated,
          })}
          style={barStyle}
        />
      </div>
    </div>
  );
}

export default React.forwardRef(TabNavList);
