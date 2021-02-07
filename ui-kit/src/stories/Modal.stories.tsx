import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import Modal from 'components/Modal';
import Button from 'components/Button';

export default {
  title: 'Lubycon UI kit/Modal',
  component: Modal,
} as Meta;

export const Default = () => {
  const [openModal, setModal] = useState(false);

  const onClose = () => setModal(false);
  const onConfirm = () => setModal(false);

  return (
    <div>
      <Button size="medium" onClick={() => setModal(!openModal)}>
        Modal Trigger
      </Button>
      <Modal open={openModal} title="타이틀입니다" size="medium" handleClick={onConfirm} onClose={onClose}>
        여기에 본문 텍스트가 들어갑니다
        <br />
        여기에 본문 텍스트가 들어갑니다
      </Modal>
    </div>
  );
};
