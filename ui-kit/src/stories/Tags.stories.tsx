import React from 'react';
import { Tag } from 'src';
import { Meta } from '@storybook/react/types-6-0';
import { SemanticColor } from 'src/constants/colors';

export default {
  title: 'Lubycon UI Kit/Tags',
} as Meta;

const samples: Array<{ label: string; type?: SemanticColor }> = [
  {
    label: 'chore',
    type: undefined,
  },
  {
    label: '디자인 챕터',
    type: 'positive',
  },
  {
    label: '프론트엔드 챕터',
    type: 'informative',
  },
  {
    label: 'MVP',
    type: 'negative',
  },
  {
    label: 'feature',
    type: 'notice',
  },
];

export const Default = () => {
  return (
    <div style={{ display: 'flex' }}>
      {samples.map(({ label, type }, index) => (
        <Tag style={{ marginRight: 8 }} key={index} type={type}>
          {label}
        </Tag>
      ))}
    </div>
  );
};

export const DeleteButton = () => {
  return (
    <div style={{ display: 'flex' }}>
      {samples.map(({ label, type }, index) => (
        <Tag
          style={{ marginRight: 8 }}
          key={index}
          type={type}
          onDelete={(label) => console.log(`${label} is deleted`)}
        >
          {label}
        </Tag>
      ))}
    </div>
  );
};
