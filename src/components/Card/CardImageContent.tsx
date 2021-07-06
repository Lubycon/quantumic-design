import React from 'react';
import classnames from 'classnames';
import { CombineElementProps } from 'src/types/utils';

type CardImageContentProps = CombineElementProps<
  'img',
  {
    src: string;
    alt: string;
  }
>;
const CardImageContent = ({ className, ...props }: CardImageContentProps) => {
  return (
    <div className={classnames('lubycon-card__image-content', className)}>
      <img {...props} />
    </div>
  );
};

export default CardImageContent;
