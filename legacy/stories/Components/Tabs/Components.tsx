import React, { PropsWithChildren, useState } from 'react';
import { TabsItem, Tabs } from 'src';
import { tabs } from './data';

const TabContent = ({ children }: PropsWithChildren<unknown>) => {
  return <div style={{ padding: 20 }}>{children}</div>;
};

export const Preview = () => {
  const [selectedTab, selectTab] = useState(tabs[0].value);

  return (
    <div>
      <Tabs selectedValue={selectedTab} onChange={selectTab}>
        {tabs.map((item) => (
          <TabsItem key={item.value} value={item.value} disabled={item.disabled}>
            {item.text}
          </TabsItem>
        ))}
      </Tabs>
      {tabs.map((item) => {
        return item.value === selectedTab ? (
          <TabContent key={item.value}>{item.text}이 선택되었습니다!</TabContent>
        ) : null;
      })}
    </div>
  );
};
