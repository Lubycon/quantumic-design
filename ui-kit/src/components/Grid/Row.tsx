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
    ...props
  }: RowProps<T>,
  ref: Ref<T>
) => {
  const Component = as ?? DEFAULT_ELEMENT;

  return (
    <Component
      ref={ref}
      className={classnames(
        'lubycon-grid-row',
        `lubycon-grid-row--direction__${direction}`,
        `lubycon-grid-row--justify__${justify}`,
        `lubycon-grid-row--align-items__${alignItems}`
      )}
      {...props}
    />
  );
};

export default forwardRef(Row);
