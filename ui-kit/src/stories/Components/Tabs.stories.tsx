import React, { PropsWithChildren, useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Tabs, TabsItem } from 'src';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta;

const tabs = [
  {
    value: 'first',
    text: '첫번째 탭',
    disabled: false,
  },
  {
    value: 'second',
    text: '두번째 태애애애애앱',
    disabled: false,
  },
  {
    value: 'third',
    text: '세번째 탭',
    disabled: false,
  },
  {
    value: 'forth',
    text: '네번째 탭',
    disabled: true,
  },
  {
    value: 'fifth',
    text: '다섯번째 탭',
    disabled: false,
  },
];

const TabContent = ({ children }: PropsWithChildren<unknown>) => {
  return <div style={{ padding: 20 }}>{children}</div>;
};

export const Default = () => {
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
