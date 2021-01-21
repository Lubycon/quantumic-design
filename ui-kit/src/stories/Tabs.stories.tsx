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
      <Tabs>
        <TabPane>
          <div></div>
        </TabPane>
      </Tabs>
    </div>
  );
};
