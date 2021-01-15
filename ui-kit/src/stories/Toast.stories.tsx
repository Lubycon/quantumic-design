import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Toast from 'components/Toast';
import Text from 'components/Text';
import Button from 'components/Button';

export default {
  title: 'Lubycon UI Kit/Toast',
  component: Toast,
} as Meta;

export const Default = () => {
  return (
    <div>
      <Toast show={true}>데이터 전송이 완료되었습니다.</Toast>
      <Toast show={true}>
        사용하시는 단말기의 네트워크 상태가 좋지 않습니다.
        <br />
        WIFI 혹은 3G/LTE 연결 상태를 확인해주세요.
      </Toast>
      <Toast show={true}>
        사용하시는 단말기의 네트워크 상태가 좋지 않습니다.
        <br />
        WIFI 혹은 3G/LTE 연결 상태를 확인해주세요.
      </Toast>
      <Toast show={true}>
        <Text typography="h3">텍스트 컴포넌트와의 조합</Text>
      </Toast>
    </div>
  );
};

export const ShowAndHide = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>토스트 열기</Button>
      <Toast show={open} onHide={() => setOpen(false)}>
        데이터 전송이 완료되었습니다.
      </Toast>
    </div>
  );
};
