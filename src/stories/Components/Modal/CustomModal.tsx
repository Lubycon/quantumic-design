import React from 'react';

const CustomModal = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
  return show ? (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: 16,
        boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2)',
      }}
      onClick={onClose}
    >
      hihi
    </div>
  ) : null;
};

export default CustomModal;
