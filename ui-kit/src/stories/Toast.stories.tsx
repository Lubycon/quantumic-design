import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Toast, useToast, Button } from 'src';

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
        message={`사용하시는 단말기의 네트워크 상태가 좋지 않습니다.\nWIFI 혹은 3G/LTE 연결 상태를 확인해주세요.`}
      />
    </div>
  );
};

export const AutoHide = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Toast show={true} message="데이터 전송이 완료되었습니다." />
      <Toast
        show={show}
        autoHideDuration={3000}
        onHide={() => setShow(true)}
        message={`사용하시는 단말기의 네트워크 상태가 좋지 않습니다.\nWIFI 혹은 3G/LTE 연결 상태를 확인해주세요.`}
      />
    </div>
  );
};

export const ToastHooks = () => {
  const { openToast } = useToast();
  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
      <Button
        type="informative"
        size="large"
        onClick={() =>
          openToast({
            message: `데이터 전송이 완료되었습니다`,
          })
        }
      >
        토스트 열기
      </Button>
    </div>
  );
};

export const Align = () => {
  const { openToast } = useToast();
  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
      <Button
        type="informative"
        onClick={() =>
          openToast({
            message: `데이터 전송이 완료되었습니다`,
          })
        }
        size="large"
      >
        Left
      </Button>
      <Button
        type="informative"
        onClick={() =>
          openToast({
            message: `데이터 전송이 완료되었습니다`,
            align: 'center',
          })
        }
        size="large"
      >
        Center
      </Button>
      <Button
        type="informative"
        onClick={() =>
          openToast({
            message: `데이터 전송이 완료되었습니다`,
            align: 'right',
          })
        }
        size="large"
      >
        Right
      </Button>
    </div>
  );
};
