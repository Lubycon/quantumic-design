import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter } from 'src';
import Button from 'components/Button';
import { useModal } from 'contexts/Modal';
import { Column, Row } from 'src/components/Grid';

interface FooterProps {
  size: 'small' | 'medium';
  showCancelBtn?: boolean;
  closeModal: () => void;
}
type ModalFn = (state: boolean) => void;

const DefaultModalHeader = () => <ModalHeader>타이틀입니다</ModalHeader>;
const DefaultModdalFooter = ({ size, showCancelBtn = true, closeModal }: FooterProps) => {
  return (
    <ModalFooter>
      {showCancelBtn ? (
        <Button size={size} onClick={closeModal}>
          취소
        </Button>
      ) : null}
      <Button size={size} type="informative" onClick={closeModal}>
        저장하기
      </Button>
    </ModalFooter>
  );
};

const margin = {
  marginRight: 16,
  marginBottom: 32,
};

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

export const Default = () => {
  const [showSmallModal, setShowSmallModal] = useState(false);
  const [showMediumModal, setShowMediumModal] = useState(false);

  const handleOpen = (msg: string, openModalFn: ModalFn) => {
    console.info(msg);
    openModalFn(true);
  };
  const handleClose = (msg: string, closeModalFn: ModalFn) => {
    console.info(msg);
    closeModalFn(false);
  };

  return (
    <Column xs={6} style={{ marginBottom: 32 }}>
      <Button
        type="informative"
        onClick={() => handleOpen('Open small modal', setShowSmallModal)}
        style={margin}
      >
        Small 사이즈 모달 열기
      </Button>
      <Modal
        show={showSmallModal}
        onClose={() => handleClose('Close small modal', setShowSmallModal)}
      >
        <DefaultModalHeader />
        <ModalContent>
          <div>여기에 본문 텍스트가 들어갑니다</div>
          <div>여기에 본문 텍스트가 들어갑니다</div>
        </ModalContent>
        <DefaultModdalFooter
          size="small"
          closeModal={() => handleClose('Close small modal', setShowSmallModal)}
        />
      </Modal>

      <Button
        size="medium"
        type="informative"
        onClick={() => handleOpen('Open medium modal', setShowMediumModal)}
      >
        Medium 사이즈 모달 열기
      </Button>
      <Modal
        size="medium"
        show={showMediumModal}
        onClose={() => handleClose('Close medium modal', setShowMediumModal)}
      >
        <DefaultModalHeader />
        <ModalContent>
          텍스트 내용이 많을 경우에는 중간 크기의 모달 사용을 권장합니다. 여기에 본문 텍스트를
          입력해 주세요.
        </ModalContent>
        <DefaultModdalFooter
          size="medium"
          closeModal={() => handleClose('Close medium modal', setShowMediumModal)}
        />
      </Modal>
    </Column>
  );
};

export const ModalHooks = () => {
  const { openModal, closeModal } = useModal();

  return (
    <Row>
      <Column xs={8} style={{ marginBottom: 32 }}>
        <Button
          style={margin}
          onClick={() => {
            const modalId = openModal({
              content: (
                <ModalContent>
                  본문 텍스트와 타이틀은 용도에 따라 별도로 구성이 가능합니다
                </ModalContent>
              ),
              footer: <DefaultModdalFooter size="small" closeModal={() => closeModal(modalId)} />,
            });
          }}
        >
          small 타이틀 제외
        </Button>
        <Button
          style={margin}
          onClick={() => {
            const modalId = openModal({
              header: <DefaultModalHeader />,
              content: (
                <ModalContent>
                  <div>여기에 본문 텍스트가 들어갑니다</div>
                  <div>여기에 본문 텍스트가 들어갑니다</div>
                </ModalContent>
              ),
              footer: (
                <DefaultModdalFooter
                  size="small"
                  showCancelBtn={false}
                  closeModal={() => closeModal(modalId)}
                />
              ),
            });
          }}
        >
          small 취소 버튼 제외
        </Button>
        <Button
          style={margin}
          onClick={() => {
            const modalId = openModal({
              content: (
                <ModalContent>
                  본문 텍스트와 타이틀은 용도에 따라 별도로 구성이 가능합니다
                </ModalContent>
              ),
              footer: (
                <DefaultModdalFooter
                  size="small"
                  showCancelBtn={false}
                  closeModal={() => closeModal(modalId)}
                />
              ),
            });
          }}
        >
          small 타이틀, 취소 버튼 제외
        </Button>
        <Button
          style={margin}
          onClick={() => {
            const modalId = openModal({
              content: (
                <ModalContent>
                  텍스트 내용이 많을 경우에는 중간 크기의 모달 사용을 권장합니다. 여기에 본문
                  텍스트를 입력해주세요.
                </ModalContent>
              ),
              footer: (
                <DefaultModdalFooter
                  size="medium"
                  showCancelBtn={true}
                  closeModal={() => closeModal(modalId)}
                />
              ),
              size: 'medium',
            });
          }}
        >
          medium 타이틀 제외
        </Button>
        <Button
          style={margin}
          onClick={() => {
            const modalId = openModal({
              header: <DefaultModalHeader />,
              content: (
                <ModalContent>
                  텍스트 내용이 많을 경우에는 중간 크기의 모달 사용을 권장합니다. 여기에 본문
                  텍스트를 입력해주세요.
                </ModalContent>
              ),
              footer: (
                <DefaultModdalFooter
                  size="medium"
                  showCancelBtn={false}
                  closeModal={() => closeModal(modalId)}
                />
              ),
              size: 'medium',
            });
          }}
        >
          medium 취소 버튼 제외
        </Button>
        <Button
          style={margin}
          onClick={() => {
            const modalId = openModal({
              content: (
                <ModalContent>
                  본문 텍스트와 타이틀은 용도에 따라 별도로 구성이 가능합니다
                </ModalContent>
              ),
              footer: (
                <DefaultModdalFooter
                  size="small"
                  showCancelBtn={false}
                  closeModal={() => closeModal(modalId)}
                />
              ),
            });
          }}
        >
          medium 타이틀, 취소 버튼 제외
        </Button>
      </Column>
    </Row>
  );
};