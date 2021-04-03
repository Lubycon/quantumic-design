import React, { ReactNode, isValidElement, useMemo } from 'react';
import classnames from 'classnames';
import Text from 'components/Text';
import Button from '../Button';

interface Props {
  message: string;
  button?: ReactNode;
  onClick?: () => void;
}

const SnackbarBody = ({ message, button: buttonProp, onClick }: Props) => {
  const button = useMemo(
    () =>
      isValidElement(buttonProp) ? buttonProp : <Button onClick={onClick}>{buttonProp}</Button>,
    [buttonProp]
  );

  return (
    <div className={classnames('lubycon-snackbar__body', 'lubycon-shadow--3')}>
      <Text typography="p2" className="lubycon-snackbar__text">
        {message}
      </Text>
      <div className="lubycon-snackbar__body__buttons">{buttonProp == null ? null : button}</div>
    </div>
  );
};

export default SnackbarBody;
