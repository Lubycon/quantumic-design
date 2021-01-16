import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Toast from 'components/Toast';
import Button from 'components/Button';
import { useToast } from 'contexts/Toast';

export default {
  title: 'Lubycon UI Kit/Toast',
  component: Toast,
} as Meta;

export const Default = () => {
  return (
    <div>
      <Toast show={true} message="데이터 전송이 완료되었습니다." />
      <Toast
        show={true}
        message="사용하시는 단말기의 네트워크 상태가 좋지 않습니다.
        \n
        WIFI 혹은 3G/LTE 연결 상태를 확인해주세요."
      />
    </div>
  );
};

export const ToastHooks = () => {
  const { open } = useToast();
  return (
    <div>
      <Button
        onClick={() =>
          open({
            message: '데이터 전송이 완료되었습니다',
          })
        }
      >
        토스트 열기
      </Button>
    </div>
  );
};
