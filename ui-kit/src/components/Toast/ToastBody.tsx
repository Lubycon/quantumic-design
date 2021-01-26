import React from 'react';
import classnames from 'classnames';
import Text from 'components/Text';

type ToastTextAlign = 'left' | 'center' | 'right';

interface Props {
  message: string;
  textAlign: ToastTextAlign;
}

const ToastBody = ({ message, textAlign = 'left' }: Props) => {
  return (
    <div
      className={classnames(
        'lubycon-toast__body',
        'lubycon-shadow--3',
        `lubycon-toast__body--align-${textAlign}`
      )}
    >
      <Text typography="p2" className="lubycon-toast__text">
        {message}
      </Text>
    </div>
  );
};

export default ToastBody;
