import React, { useState } from 'react';
import { TagsInput, Text } from 'src';
import { Meta } from '@storybook/react/types-6-0';
import { TagType } from 'src/components/Tag';

export default {
  title: 'Lubycon UI Kit/TagsInput',
} as Meta;

interface TagInputLabel {
  label: string;
  type: TagType;
}

export const Default = () => {
  const [labels, setLabel] = useState<TagInputLabel[]>([
    {
      label: '디자인 챕터',
      type: 'notice',
    },
  ]);
  return (
    <>
      <Text style={{ marginBottom: 8 }}>{`${labels
        .map(({ label }) => label)
        .join(',')}이 입력되었습니다`}</Text>
      <TagsInput defaultValue={labels} onChange={setLabel} />
    </>
  );
};

export const WithDeleteButton = () => {
  const [labels, setLabel] = useState<TagInputLabel[]>([
    {
      label: '디자인 챕터',
      type: 'notice',
    },
  ]);
  return (
    <>
      <Text style={{ marginBottom: 8 }}>{`${labels
        .map(({ label }) => label)
        .join(',')}이 입력되었습니다`}</Text>
      <TagsInput defaultValue={labels} onChange={setLabel} hasDeleteButton={true} />
    </>
  );
};
