import { useState } from 'react';
import Modal, { ModalHeader, ModalContent, ModalFooter } from './Modal';
import { Column } from '../../../components/Grid';
import { useOverlayModal } from './useOverlayModal';

interface FooterProps {
  size: 'small' | 'medium';
  showCancelBtn?: boolean;
  closeModal: () => void;
}
type ModalFn = (state: boolean) => void;

const DefaultModalHeader = () => <ModalHeader>타이틀입니다</ModalHeader>;
const DefaultModalFooter = ({ showCancelBtn = true, closeModal }: FooterProps) => {
  return (
    <ModalFooter>
      {showCancelBtn ? <button onClick={closeModal}>취소</button> : null}
      <button onClick={closeModal}>저장하기</button>
    </ModalFooter>
  );
};

const margin = {
  marginRight: 16,
  marginBottom: 32,
};

export const OverlayModal = () => {
  const { openModal } = useOverlayModal();

  const handleClick = () => {
    openModal();
  };

  return <button onClick={handleClick}>모달 열기</button>;
};

export const Preview = () => {
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
      <button onClick={() => handleOpen('Open small modal', setShowSmallModal)} style={margin}>
        Small 사이즈 모달 열기
      </button>
      <Modal
        show={showSmallModal}
        onClose={() => handleClose('Close small modal', setShowSmallModal)}
      >
        <DefaultModalHeader />
        <ModalContent>
          <div>여기에 본문 텍스트가 들어갑니다</div>
          <div>여기에 본문 텍스트가 들어갑니다</div>
        </ModalContent>
        <DefaultModalFooter
          size="small"
          closeModal={() => handleClose('Close small modal', setShowSmallModal)}
        />
      </Modal>

      <button onClick={() => handleOpen('Open medium modal', setShowMediumModal)}>
        Medium 사이즈 모달 열기
      </button>
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
        <DefaultModalFooter
          size="medium"
          closeModal={() => handleClose('Close medium modal', setShowMediumModal)}
        />
      </Modal>
    </Column>
  );
};
