import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Snackbar from 'components/Snackbar';
import Button from 'components/Button';
import { useSnackbar } from 'contexts/Snackbar';
import { generateID } from 'src/utils';

export default {
  title: 'Lubycon UI Kit/Snackbar',
  component: Snackbar,
} as Meta;

export const Default = () => {
  return (
    <div>
      <Snackbar show={true} message="데이터 전송이 완료되었습니다." button="실행취소" />
      <Snackbar
        show={true}
        message={`사용하시는 단말기의 네트워크 상태가 좋지 않습니다.\nWIFI 혹은 3G/LTE 연결 상태를 확인해주세요.`}
        button="실행취소"
      />
    </div>
  );
};

export const AutoHide = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Snackbar show={true} message="데이터 전송이 완료되었습니다." button="실행취소" />
      <Snackbar
        show={show}
        autoHideDuration={3000}
        onHide={() => setShow(true)}
        message={`사용하시는 단말기의 네트워크 상태가 좋지 않습니다.\nWIFI 혹은 3G/LTE 연결 상태를 확인해주세요.`}
        button="실행취소"
      />
    </div>
  );
};

export const SnackbarHooks = () => {
  const { openSnackbar } = useSnackbar();
  return (
    <div>
      <Button
        onClick={() =>
          openSnackbar({
            message: `데이터 전송이 완료되었습니다 - ${generateID('snackbar-test')}`,
            button: '실행취소',
          })
        }
      >
        스낵바 열기
      </Button>
    </div>
  );
};
