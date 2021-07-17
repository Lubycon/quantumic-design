import React, { forwardRef, ReactNode } from 'react';
import classnames from 'classnames';
import { CombineElementProps } from 'src/types/utils';
import Text from '../Text';

type Props = Omit<
  CombineElementProps<
    'li',
    {
      left?: ReactNode;
      right?: ReactNode;
      title?: string;
      content: string;
      caption?: string;
    }
  >,
  'children' | 'role'
>;
const ListItem = forwardRef<HTMLLIElement, Props>(function ListItem(
  { className, left, right, title, content, caption, onClick, ...props },
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
      {left ? <div className="lubycon-list__item__left">{left}</div> : null}
      <div className="lubycon-list__item__center">
        {title ? (
          <Text className="lubycon-list__item__center__title" fontWeight="bold">
            {title}
          </Text>
        ) : null}
        <Text className="lubycon-list__item__center__content" typography="p2">
          {content}
        </Text>
        {caption ? (
          <Text className="lubycon-list__item__center__caption" typography="caption">
            {caption}
          </Text>
        ) : null}
      </div>
      {right ? <div className="lubycon-list__item__right">{right}</div> : null}
    </li>
  );
});

export default ListItem;
