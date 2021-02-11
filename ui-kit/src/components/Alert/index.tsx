import React, { forwardRef } from 'react';
import { ReactNode } from 'react';
import { colors, SemanticColor } from 'src/constants/colors';
import classnames from 'classnames';
import Text from '../Text';
import Icon from '../Icon';
import { informationCircle, closeCircle, alertCircle, checkmarkCircle } from 'ionicons/icons';

interface AlertIcon {
  icon: string;
  color: string;
}
const alertIconMap: {
  [key in SemanticColor]: AlertIcon;
} = {
  negative: {
    icon: closeCircle,
    color: colors.red50,
  },
  notice: {
    icon: alertCircle,
    color: colors.yellow50,
  },
  informative: {
    icon: informationCircle,
    color: colors.blue50,
  },
  positive: {
    icon: checkmarkCircle,
    color: colors.green50,
  },
};

interface AlertProps {
  type?: SemanticColor;
  title?: string;
  children: ReactNode;
}
const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { type = 'informative', title, children },
  ref
) {
  const { icon: iconName, color: iconColor } = alertIconMap[type];

  return (
    <div ref={ref} className={classnames('lubycon-alert', `lubycon-alert--type-${type}`)}>
      <Icon
        className="lubycon-alert__icon"
        icon={iconName}
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
