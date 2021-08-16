import { ReactNode, isValidElement } from 'react';
import Text from '../../../../components/Text';
import { Typographys } from '../../../../components/Text/types';
import { CombineElementProps } from '../../../../types/utils';
import classnames from 'classnames';

type ModalHeaderProps = CombineElementProps<
  'div',
  {
    size?: 'small' | 'medium';
    children?: ReactNode;
  }
>;

const ModalHeader = ({ size, children, className, ...props }: ModalHeaderProps) => {
  const typography: Typographys = size === 'small' ? 'subtitle' : 'h6';

  return (
    <header className={classnames('lubycon-modal__title', className)} {...props}>
      {isValidElement(children) ? children : <Text typography={typography}>{children}</Text>}
    </header>
  );
};

export default ModalHeader;
