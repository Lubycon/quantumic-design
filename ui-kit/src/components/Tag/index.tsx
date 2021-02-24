import React, { isValidElement, ReactText } from 'react';
import { colors, SemanticColor } from 'src/constants/colors';
import { CombineElementProps } from 'src/types/utils';
import classnames from 'classnames';
import Text from '../Text';
import Icon from '../Icon';
import { close } from 'ionicons/icons';

export type TagType = SemanticColor | 'default';

type Props = CombineElementProps<
  'div',
  {
    type?: TagType;
    onDelete?: (label: ReactText) => void;
    children: ReactText;
  }
>;

const Tag = ({
  type = 'default',
  className,
  children: label,
  onClick,
  onDelete,
  ...props
}: Props) => {
  const isClickable = onClick != null || onDelete != null;
  return (
    <div
      className={classnames(
        'lubycon-tag',
        `lubycon-tag--type-${type}`,
        {
          'lubycon-tag--clickable': isClickable,
        },
        className
      )}
      onClick={onClick}
      {...props}
    >
      <span className="lubycon-tag__label">
        {isValidElement(label) ? label : <Text typography="p2">{label}</Text>}
      </span>
      {onDelete != null ? (
        <a className="lubycon-tag__delete-button" onClick={() => onDelete?.(label)}>
          <Icon icon={close} type="filled" color={colors.gray70} />
        </a>
      ) : null}
    </div>
  );
};

export default Tag;
