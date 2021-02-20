import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import Modal from 'components/Modal';
import Button from 'components/Button';
import { useModal } from 'contexts/Modal';

export default {
  title: 'Lubycon UI kit/Modal',
  component: Modal,
} as Meta;

export const Default = () => {
  const { openModal } = useModal();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, fit-content(100%))',
        gridGap: '15px',
      }}
    >
      <Button
        size="medium"
        onClick={() =>
          openModal({
            title: '타이틀입니다',
            message: '여기에 본문 텍스트가 들어갑니다\n' + '여기에 본문 텍스트가 들어갑니다',
            cancelButton: true,
          })
        }
      >
        Small Modal Trigger (with all)
      </Button>
      <Button
        size="medium"
        onClick={() =>
          openModal({
            message: '본문 텍스트와 타이틀은 용도에 따라 별도로 구성이 가능합니다',
            cancelButton: true,
          })
        }
      >
        Small Modal Trigger (without title)
      </Button>
      <Button
        size="medium"
        onClick={() =>
          openModal({
            title: '타이틀입니다',
            message: '여기에 본문 텍스트가 들어갑니다\n' + '여기에 본문 텍스트가 들어갑니다',
          })
        }
      >
        Small Modal Trigger (without cancel)
      </Button>
      <Button
        size="medium"
        onClick={() =>
          openModal({
            message: '본문 텍스트와 타이틀은 용도에 따라 별도로 구성이 가능합니다',
          })
        }
      >
        Small Modal Trigger (without title, cancel)
      </Button>
      <Button
        size="medium"
        onClick={() =>
          openModal({
            title: '타이틀입니다',
            message: `텍스트 내용이 많을 경우에는 중간 크기의 모달 사용을 권장합니다. 여기에 본문 텍스트를 입력해주세요.`,
            size: 'medium',
            cancelButton: true,
          })
        }
      >
        Medium Modal Trigger (with all)
      </Button>
      <Button
        size="medium"
        onClick={() =>
          openModal({
            message: '본문 텍스트와 타이틀은 용도에 따라\n별도로 구성이 가능합니다',
            size: 'medium',
            cancelButton: true,
          })
        }
      >
        Medium Modal Trigger (without title)
      </Button>
      <Button
        size="medium"
        onClick={() =>
          openModal({
            title: '타이틀입니다',
            message: `텍스트 내용이 많을 경우에는 중간 크기의 모달 사용을 권장합니다. 여기에 본문 텍스트를 입력해주세요.`,
            size: 'medium',
          })
        }
      >
        Medium Modal Trigger (without cancel)
      </Button>
      <Button
        size="medium"
        onClick={() =>
          openModal({
            message: '본문 텍스트와 타이틀은 용도에 따라\n별도로 구성이 가능합니다',
            size: 'medium',
          })
        }
      >
        Medium Modal Trigger (without title, cancel)
      </Button>
    </div>
  );
};
