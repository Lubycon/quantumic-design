import React from 'react';
import Alert from 'components/Alert';
import { Meta } from '@storybook/react/types-6-0';
import { Column, Row } from 'src/components';
import { SemanticColor } from 'src/constants/colors';

export default {
  title: 'Lubycon UI Kit/Alert',
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
        <Column xs={6}>
          <Alert type="negative" title="오류메세지">
            서브 타이틀을 넣어주세요
          </Alert>
          <br />
          <Alert type="negative">오류메세지를 넣어주세요</Alert>
        </Column>
        <Column xs={6}>
          <Alert type="notice" title="경고메세지">
            서브 타이틀을 넣어주세요
          </Alert>
          <br />
          <Alert type="notice">경고메세지를 넣어주세요</Alert>
        </Column>
        <Column xs={6}>
          <Alert type="informative" title="정보메세지">
            서브 타이틀을 넣어주세요
          </Alert>
          <br />
          <Alert type="informative">정보메세지를 넣어주세요</Alert>
        </Column>
        <Column xs={6}>
          <Alert type="positive" title="완료메세지">
            서브 타이틀을 넣어주세요
          </Alert>
          <br />
          <Alert type="positive">완료메세지를 넣어주세요</Alert>
        </Column>
      </Row>
    </>
  );
};
