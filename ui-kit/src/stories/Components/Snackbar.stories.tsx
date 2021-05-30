import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Snackbar, Button, useSnackbar } from 'src';
import { SnackbarAlign } from 'src/components/Snackbar';

export default {
  title: 'Components/Snackbar',
  component: Snackbar,
} as Meta;

export const Default = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <div>
      <Button>기본 스낵바</Button>
      <Snackbar show={true} message="데이터 전송이 완료되었습니다." />
      <Button onClick={() => setShow(true)}>스낵바 열기</Button>
      <Snackbar
        show={show}
        message={`16개의 이미지가\n“동물" 폴더에 추가되었습니다.`}
        button="실행취소"
        onClick={handleClose}
      />
    </div>
  );
};

export const LongText = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <Button onClick={() => setShow(true)}>텍스트 메시지가 긴 스낵바 열기</Button>
      <Snackbar
        show={show}
        message={`동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세\n무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세`}
        button="애국가 더 부르기"
        onClick={handleClose}
      />
    </div>
  );
};

export const AutoHide = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <Snackbar show={true} message="데이터 전송이 완료되었습니다." button="실행취소" />
      <Snackbar
        show={show}
        autoHideDuration={3000}
        onHide={() => setShow(true)}
        onClose={() => setShow(false)}
        message={`16개의 이미지가\n“동물" 폴더에 추가되었습니다.`}
        button="실행취소"
        onClick={handleClose}
      />
    </div>
  );
};

export const SnackbarHooks = () => {
  const { openSnackbar, closeSnackbar } = useSnackbar();

  return (
    <div>
      <Button
        onClick={() => {
          const id = openSnackbar({
            message: `파일이 휴지통으로 이동되었습니다.`,
            button: '실행취소',
            onClick: () => closeSnackbar(id),
          });
        }}
      >
        스낵바 열기
      </Button>
    </div>
  );
};

const aligns: SnackbarAlign[] = ['left', 'center', 'right'];
export const Aligns = () => {
  const { openSnackbar, closeSnackbar } = useSnackbar();
  return (
    <div>
      {aligns.map((align) => (
        <Button
          key={align}
          onClick={() => {
            const id = openSnackbar({
              message: `파일이 휴지통으로 이동되었습니다.`,
              button: '실행취소',
              align,
              onClick: () => closeSnackbar(id),
            });
          }}
        >
          {align.toUpperCase()}
        </Button>
      ))}
    </div>
  );
};

export const onClick = () => {
  const { openSnackbar, closeSnackbar } = useSnackbar();
  const cancelExecution = (id: string) => {
    alert('실행 취소 완료');
    closeSnackbar(id);
  };
  return (
    <div>
      <Button
        onClick={() => {
          const id = openSnackbar({
            message: `파일이 휴지통으로 이동되었습니다.`,
            button: '실행취소',
            onClick: () => cancelExecution(id),
          });
        }}
      >
        스낵바 열기
      </Button>
    </div>
  );
};

export const multipleButton = () => {
  const { openSnackbar, closeSnackbar } = useSnackbar();
  const cancelExecution = (id: string) => {
    alert('실행 취소 완료');
    closeSnackbar(id);
  };
  return (
    <div>
      <Button
        onClick={() => {
          const id = openSnackbar({
            message: '메세지가 전송되었습니다.',
            button: (
              <>
                <Button onClick={() => cancelExecution(id)}>실행취소</Button>
                <Button onClick={() => alert('메세지 보기 클릭')}>메세지 보기</Button>
              </>
            ),
          });
        }}
      >
        스낵바 열기
      </Button>
    </div>
  );
};
