import React, { HTMLAttributes, useState } from 'react';

import { DEFAULT_ELEMENT } from './types';
import { OverridableProps } from 'types/OverridableProps';
import classNames from 'classnames';

type NumberAttribute = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type ColumnSize = boolean | 'auto' | NumberAttribute;

interface ColumnBaseProps extends HTMLAttributes<HTMLDivElement> {
  xs?: ColumnSize;
  sm?: ColumnSize;
  md?: ColumnSize;
  lg?: ColumnSize;
  xl?: ColumnSize;
}
type ColumnProps<T extends React.ElementType = typeof DEFAULT_ELEMENT> = OverridableProps<
  T,
  ColumnBaseProps
>;

type ColumnResponsive = 'xl' | 'lg' | 'md' | 'sm' | 'xs';
const sizes: ColumnResponsive[] = ['xl', 'lg', 'md', 'sm', 'xs'];

const Column = <T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, ...props }: ColumnProps<T>,
  ref: React.Ref<any>
) => {
  const [spans, setSpans] = useState<string[]>([]);

  sizes.forEach(function (size) {
    const { [size]: propValue } = props;

    if (!propValue) {
      return;
    }

    const { span } = propValue;
    const infix = size !== 'xs' ? `-${size}` : '';

    if (span) {
      const currentSpan = span ? `column${infix}-${span}` : `column${infix}`;
      setSpans((prevSpans) => [...prevSpans, currentSpan]);
    }
  });

  if (spans.length === 0) {
    spans.push('column');
  }

  const target = as ?? DEFAULT_ELEMENT;
  const Component = target;

  return <Component ref={ref} className={classNames(...spans)} {...props} />;
};

export default React.forwardRef(Column) as typeof Column;
