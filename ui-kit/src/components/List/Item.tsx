import React, { HTMLAttributes, forwardRef } from 'react';
import classnames from 'classnames';
import { Combine } from 'src/types/utils';
import Text from '../Text';

type Props = Combine<
  {
    title?: string;
    content: string;
    caption?: string;
  },
  Omit<HTMLAttributes<HTMLLIElement>, 'children' | 'role'>
>;
const ListItem = forwardRef<HTMLLIElement, Props>(function ListItem(
  { className, title, content, caption, onClick, ...props },
  ref
) {
  const isClickable = onClick != null;

  return (
    <li
      ref={ref}
      className={classnames(
        'lubycon-list__item',
        {
          'lubycon-list__item--clickable': isClickable,
        },
        className
      )}
      onClick={onClick}
      role="listitem"
      {...props}
    >
      {title ? (
        <Text className="lubycon-list__item__title" fontWeight="bold">
          {title}
        </Text>
      ) : null}
      <Text className="lubycon-list__item__content" typography="p2">
        {content}
      </Text>
      {caption ? (
        <Text className="lubycon-list__item__caption" typography="caption">
          {caption}
        </Text>
      ) : null}
    </li>
  );
});

export default ListItem;
