import React, { ElementType, useMemo } from 'react';
import { ColumnSize, ColumnResponsive, DEFAULT_ELEMENT } from './types';
import { OverridableProps } from 'types/OverridableProps';
import classNames from 'classnames';

const sizes: ColumnResponsive[] = ['xl', 'lg', 'md', 'sm', 'xs'];

type ColumnBaseProps = {
  [key in ColumnResponsive]?: ColumnSize;
};

type ColumnProps<T extends ElementType = typeof DEFAULT_ELEMENT> = OverridableProps<
  T,
  ColumnBaseProps
>;

const Column = <T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, ...props }: ColumnProps<T>,
  ref: React.Ref<any>
) => {
  const spanClasses = useMemo(
    () =>
      sizes.map((size) => {
        const { [size]: sizeValue } = props;
        return sizeValue ? `lubycon-grid-column--${size}__${sizeValue}` : '';
      }),
    []
  );

  const target = as ?? DEFAULT_ELEMENT;
  const Component = target;

  return (
    <Component ref={ref} className={classNames(`lubycon-grid-column`, ...spanClasses)} {...props} />
  );
};

export default React.forwardRef(Column) as typeof Column;
