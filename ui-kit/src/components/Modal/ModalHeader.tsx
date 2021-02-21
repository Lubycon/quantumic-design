import React from 'react';
import Text from 'components/Text';

interface ModalHeaderProps {
  size?: 'small' | 'medium';
  title: string;
}

const ModalHeader = ({ size, title }: ModalHeaderProps) => {
  const typography = size === 'small' ? 'subtitle' : 'h6';

  return (
    <header className="lubycon-modal__title">
      <Text typography={typography}>{title}</Text>
    </header>
  );
};

export default ModalHeader;
