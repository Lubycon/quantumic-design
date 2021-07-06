import React, { ImgHTMLAttributes } from 'react';
import classnames from 'classnames';

const ListItemImage = ({
  className,
  src,
  alt,
  tabIndex,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) => (
  <div
    className={classnames('lubycon-list__item__image', className)}
    style={{ backgroundImage: `url(${src})` }}
    role="img"
    aria-label={alt}
    tabIndex={tabIndex}
  >
    <img src={src} alt={alt} tabIndex={-1} {...props} />
  </div>
);

export default ListItemImage;
