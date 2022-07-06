import { ElementType, Ref, forwardRef } from 'react';
import { DEFAULT_ELEMENT } from './types';
import { OverridableProps } from '../../types/OverridableProps';
import { gridGutter } from './constants';
import { css } from '@emotion/react';

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
      css={css`
        display: flex;
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${alignItems};
        margin: 0 ${gridGutter} 2px;
        flex-wrap: wrap;
        box-sizing: 'border-box';
      `}
      {...props}
    />
  );
};

export default forwardRef(Row) as typeof Row;
