import React, { forwardRef } from 'react';
import { colors, SemanticColor } from 'src/constants/colors';
import classnames from 'classnames';
import Text from '../Text';
import Icon from '../Icon';
import { CombineElementProps } from 'src/types/utils';
import { IconName } from 'src/types/icon';

interface AlertIcon {
  icon: IconName;
  color: string;
}
const alertIconMap: {
  [key in SemanticColor]: AlertIcon;
} = {
  negative: {
    icon: 'close-circle',
    color: colors.red50,
  },
  notice: {
    icon: 'alert-circle',
    color: colors.yellow50,
  },
  informative: {
    icon: 'information-circle',
    color: colors.blue50,
  },
  positive: {
    icon: 'checkmark-circle',
    color: colors.green50,
  },
};

type AlertProps = CombineElementProps<
  'div',
  {
    type?: SemanticColor;
    title?: string;
  }
>;

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { type = 'informative', title, children, className, ...props },
  ref
) {
  const { icon: iconName, color: iconColor } = alertIconMap[type];

  return (
    <div
      ref={ref}
      className={classnames('lubycon-alert', `lubycon-alert--type-${type}`, className)}
      {...props}
    >
      <Icon
        className="lubycon-alert__icon"
        name={iconName}
        type="filled"
        size={19}
        color={iconColor}
      ></Icon>
      {title ? (
        <Text fontWeight="bold" className="lubycon-alert__title">
          {title}
        </Text>
      ) : null}
      <Text className="lubycon-alert__description">{children}</Text>
    </div>
  );
});

export default Alert;
