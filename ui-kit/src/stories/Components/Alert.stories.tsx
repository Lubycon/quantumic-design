import React from 'react';
import Alert from 'components/Alert';
import { Meta } from '@storybook/react/types-6-0';
import { Column, Row } from 'src/components/Grid';
import { SemanticColor } from 'src/constants/colors';

export default {
  title: 'Components/Alert',
} as Meta;

const alerts: Array<{ type: SemanticColor; title: string }> = [
  {
    type: 'negative',
    title: '오류',
  },
  {
    type: 'notice',
    title: '경고',
  },
  {
    type: 'informative',
    title: '정보',
  },
  {
    type: 'positive',
    title: '완료',
  },
];

export const Default = () => {
  return (
    <>
      <Row style={{ marginBottom: 80, width: 1200 }}>
        {alerts.map(({ type, title }) => (
          <Column xs={6} key={type} style={{ marginBottom: 32 }}>
            <Alert style={{ marginBottom: 16 }} type={type} title={`${title} 메세지`}>
              서브 타이틀을 넣어주세요
            </Alert>
            <Alert type={type}>{title} 메세지를 넣어주세요</Alert>
          </Column>
        ))}
      </Row>
    </>
  );
};
