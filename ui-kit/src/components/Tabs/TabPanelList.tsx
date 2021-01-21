import React from 'react';
import classnames from 'classnames';
import TabContext from './TabContext';

export interface TabPanelListProps {
  activeKey: React.Key;
  animated?: boolean;
}

export default function TabPanelList({ activeKey, animated }: TabPanelListProps) {
  const { tabs } = React.useContext(TabContext);
  const tabPaneAnimated = animated;

  const activeIndex = tabs.findIndex((tab) => tab.key === activeKey);

  return (
    <div className={classnames('lubycon-content-holder')}>
      <div
        className={classnames('lubycon-content', {
          ['lubycon-content-animated']: tabPaneAnimated,
        })}
        style={
          activeIndex && tabPaneAnimated ? { ['marginLeft']: `-${activeIndex}00%` } : undefined
        }
      >
        {tabs.map((tab) => {
          return React.cloneElement(tab.node, {
            key: tab.key,
            tabKey: tab.key,
            animated: tabPaneAnimated,
            active: tab.key === activeKey,
          });
        })}
      </div>
    </div>
  );
}
