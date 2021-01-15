import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Toast from 'components/Toast';
import Text from 'components/Text';

export default {
  title: 'Lubycon UI Kit/Toast',
  component: Toast,
} as Meta;

export const Default = () => {
  return (
    <div>
      <Toast>데이터 전송이 완료되었습니다.</Toast>
      <Toast>
        사용하시는 단말기의 네트워크 상태가 좋지 않습니다.
        <br />
        WIFI 혹은 3G/LTE 연결 상태를 확인해주세요.
      </Toast>
      <Toast>
        사용하시는 단말기의 네트워크 상태가 좋지 않습니다.
        <br />
        WIFI 혹은 3G/LTE 연결 상태를 확인해주세요.
      </Toast>
      <Toast>
        <Text typography="h3">텍스트 컴포넌트와의 조합</Text>
      </Toast>
    </div>
  );
};
