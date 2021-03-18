import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter } from 'src';
import Button from 'components/Button';
import { colors } from 'constants/colors';
import { useModal } from 'src/contexts/Modal';

export default {
  title: 'Lubycon UI kit/Modal',
  component: Modal,
} as Meta;

export const Default = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const handleOpen = () => console.info('open');

  return (
    <>
      <Button onClick={() => setShowModal(true)}>모달 열기</Button>
      <Modal show={showModal} onClose={closeModal} onOpen={handleOpen}>
        <ModalHeader>타이틀입니다</ModalHeader>
        <ModalContent className="Test">
          <div>여기에 본문 텍스트가 들어갑니다</div>
          <div>여기에 본문 텍스트가 들어갑니다</div>
        </ModalContent>
        <ModalFooter>
          <Button
            size="small"
            style={{ color: colors.gray80, background: 'transparent', marginRight: '4px' }}
            onClick={closeModal}
          >
            취소
          </Button>
          <Button size="small" onClick={closeModal}>
            저장하기
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const ModalHooks = () => {
  const { openModal, closeModal } = useModal();
  const handleClick = () => {
    openModal({
      title: '타이틀입니다',
      contents: (
        <>
          <div>여기에 본문 텍스트가 들어갑니다</div>
          <div>여기에 본문 텍스트가 들어갑니다</div>
        </>
      ),
      footer: (
        <>
          <Button
            size="small"
            style={{ color: colors.gray80, background: 'transparent', marginRight: '4px' }}
            onClick={() => closeModal}
          >
            취소
          </Button>
          <Button size="small" onClick={() => closeModal}>
            저장하기
          </Button>
        </>
      ),
    });
  };

  return <Button onClick={handleClick}>모달 열기</Button>;
};
