import React, { HTMLAttributes } from 'react';
import classnames from 'classnames';
import { Combine } from 'src/types/utils';

type CardImageContentProps = Combine<
  {
    src: string;
    alt: string;
  },
  HTMLAttributes<HTMLImageElement>
>;
const CardImageContent = ({ className, ...props }: CardImageContentProps) => {
  return (
    <div className={`${classnames('lubycon-card__image-content')} ${className}`}>
      <img {...props} />
    </div>
  );
};

export default CardImageContent;
