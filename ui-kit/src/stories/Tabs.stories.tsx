import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Tabs, TabPane } from 'src';

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
        <TabPane tab="네번째 탭 normal" key="4">
          fourth
        </TabPane>
        <TabPane tab="다섯번째 탭 normal" key="5">
          fifth
        </TabPane>
        <TabPane tab="여섯번째 탭 normal" key="6">
          sixth
        </TabPane>
      </Tabs>
    </div>
  );
};

export const FixedTab = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1" tabWidth={80}>
        <TabPane tab="첫번째" key="1">
          first
        </TabPane>
        <TabPane tab="두번째" key="2">
          second
        </TabPane>
        <TabPane tab="세번째" key="3">
          third
        </TabPane>
        <TabPane tab="네번째" key="4">
          fourth
        </TabPane>
        <TabPane tab="다섯번째" key="5">
          fifth
        </TabPane>
        <TabPane tab="여섯번째" key="6">
          sixth
        </TabPane>
      </Tabs>
    </div>
  );
};
