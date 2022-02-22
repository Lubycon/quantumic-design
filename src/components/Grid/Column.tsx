import { ElementType, useMemo, forwardRef } from 'react';
import { ColumnSize, ColumnResponsive, DEFAULT_ELEMENT } from './types';
import { OverridableProps } from '../../types/OverridableProps';
import { gridGutter, maxColumns } from './constants';
import { mediaQuery } from '../../utils/mediaQuery';

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
  const spanStyles = useMemo(
    () =>
      sizes.map((size) => {
        const { [size]: sizeValue } = props;

        if (sizeValue == null) {
          return {};
        }

        return mediaQuery(
          size,
          sizeValue === 'auto'
            ? {
                flex: '0 0 auto',
              }
            : {
                flex: `0 0 ${(sizeValue / maxColumns) * 100}%`,
                width: `${(sizeValue / maxColumns) * 100}%`,
              }
        );
      }),
    []
  );

  const Component = as ?? DEFAULT_ELEMENT;

  return (
    <Component
      ref={ref}
      css={[
        {
          position: 'relative',
          paddingRight: gridGutter / 2,
          paddingLeft: gridGutter / 2,
          flexBasis: 0,
          flexGrow: 1,
          minWidth: 0,
          maxWidth: '100%',
          boxSizing: 'border-box',
        },
        ...spanStyles,
      ]}
      {...props}
    />
  );
};

export default forwardRef(Column) as typeof Column;
