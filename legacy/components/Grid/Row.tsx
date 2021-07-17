import React, { ElementType, Ref, forwardRef } from 'react';
import { DEFAULT_ELEMENT } from './types';
import classnames from 'classnames';
import { OverridableProps } from 'src/types/OverridableProps';

type BaseAlign = 'flex-start' | 'center' | 'flex-end';
interface RowBaseProps {
  direction?: 'column' | 'row' | 'row-reverse' | 'column-reverse';
  justify?: BaseAlign | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: BaseAlign | 'stretch' | 'baseline';
}
type RowProps<T extends ElementType = typeof DEFAULT_ELEMENT> = OverridableProps<T, RowBaseProps>;

const Row = <T extends ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    direction = 'row',
    justify = 'flex-start',
    alignItems = 'flex-start',
    className,
    ...props
  }: RowProps<T>,
  ref: Ref<any>
) => {
  const Component = as ?? DEFAULT_ELEMENT;

  return (
    <Component
      ref={ref}
      className={classnames(
        'lubycon-grid__row',
        `lubycon-grid__row--direction-${direction}`,
        `lubycon-grid__row--justify-${justify}`,
        `lubycon-grid__row--align-items-${alignItems}`,
        className
      )}
      {...props}
    />
  );
};

export default forwardRef(Row) as typeof Row;
