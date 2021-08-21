import { ElementType, Ref, forwardRef } from 'react';
import { DEFAULT_ELEMENT } from './types';
import { OverridableProps } from '../../types/OverridableProps';
import { gridGutter } from './constants';

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
  ref: Ref<any>
) => {
  const Component = as ?? DEFAULT_ELEMENT;

  return (
    <Component
      ref={ref}
      css={{
        display: 'flex',
        flexDirection: direction,
        justifyContent: justify,
        alignItems: alignItems,
        margin: `0 ${gridGutter / 2}px`,
        flexWrap: 'wrap',
        boxSizing: 'border-box',
      }}
      {...props}
    />
  );
};

export default forwardRef(Row) as typeof Row;
