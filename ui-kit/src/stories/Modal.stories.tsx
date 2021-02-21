import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter } from 'src';
import Button from 'components/Button';

export default {
  title: 'Lubycon UI kit/Modal',
  component: Modal,
} as Meta;

export const Default = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>모달 열기</Button>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ModalHeader title="타이틀입니다" />
        <ModalContent>
          <div>여기에 본문 텍스트가 들어갑니다</div>
          <div>여기에 본문 텍스트가 들어갑니다</div>
        </ModalContent>
        <ModalFooter>
          <Button size="small">저장하기</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
