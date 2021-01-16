import React from 'react';
import classnames from 'classnames';
import Text from 'components/Text';

interface Props {
  message: string;
}

const ToastBody = ({ message }: Props) => {
  return (
    <div className={classnames('lubycon-toast--inbox', 'lubycon-shadow--3')}>
      <Text typography="p2">{message}</Text>
    </div>
  );
};

export default ToastBody;
