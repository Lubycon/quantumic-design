import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Snackbar, Button, useSnackbar } from 'src';

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
        message={`16개의 이미지가\n“동물" 폴더에 추가되었습니다.`}
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
        message={`16개의 이미지가\n“동물" 폴더에 추가되었습니다.`}
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
            message: `파일이 휴지통으로 이동되었습니다.`,
            button: '실행취소',
            autoHideDuration: 1000000,
          })
        }
      >
        버튼 스낵바 열기
      </Button>
      <Button
        onClick={() =>
          openSnackbar({
            message: `파일이 휴지통으로 이동되었습니다.`,
          })
        }
      >
        일반 스낵바 열기
      </Button>
    </div>
  );
};

export const onClick = () => {
  const { openSnackbar } = useSnackbar();
  return (
    <div>
      <Button
        onClick={() =>
          openSnackbar({
            message: `파일이 휴지통으로 이동되었습니다.`,
            button: '실행취소',
            onClick: () => alert('실행 취소 완료'),
          })
        }
      >
        스낵바 열기
      </Button>
    </div>
  );
};

export const multipleButton = () => {
  const { openSnackbar } = useSnackbar();
  return (
    <div>
      <Button
        onClick={() =>
          openSnackbar({
            message: '메세지가 전송되었습니다.',
            button: (
              <>
                <Button onClick={() => alert('실행 취소 완료')}>실행취소</Button>
                <Button onClick={() => alert('메세지 보기 클릭')}>메세지 보기</Button>
              </>
            ),
          })
        }
      >
        스낵바 열기
      </Button>
    </div>
  );
};
