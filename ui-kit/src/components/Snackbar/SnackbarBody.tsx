import React, { ReactNode, isValidElement } from 'react';
import classnames from 'classnames';
import Text from 'components/Text';
import Button from '../Button';

interface Props {
  message: string;
  button: ReactNode;
  onClick?: () => void;
}

const SnackbarBody = ({ message, button, onClick }: Props) => {
  return (
    <div className={classnames('lubycon-snackbar__body', 'lubycon-shadow--3')}>
      <Text typography="p2" className="lubycon-snackbar__text">
        {message}
      </Text>
      <div className="lubycon-snackbar__body__buttons">
        {isValidElement(button) ? button : <Button onClick={onClick}>{button}</Button>}
      </div>
    </div>
  );
};

export default SnackbarBody;
