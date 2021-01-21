import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Tabs, TabPane } from 'components/Tabs';

export default {
  title: 'Lubycon UI Kit/Tab',
  component: Tabs,
} as Meta;

export const Default = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="첫번째 탭 Active" key="1">
          first
        </TabPane>
        <TabPane tab="두번째 탭 normal" key="2">
          second
        </TabPane>
        <TabPane tab="세번째 탭 Hover" key="3">
          third
        </TabPane>
      </Tabs>
    </div>
  );
};
