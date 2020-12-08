import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

type NumberAttribute =
  | number
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12';
type ColumnSize = boolean | 'auto' | NumberAttribute;

interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
  xs?: ColumnSize;
  sm?: ColumnSize;
  md?: ColumnSize;
  lg?: ColumnSize;
  xl?: ColumnSize;
}

const sizes = ['xl' as const, 'lg' as const, 'md' as const, 'sm' as const, 'xs' as const];

export default function Column({ children, ...props }: ColumnProps): JSX.Element {
  const spans: string[] = [];
  const classes: string[] = [];

  sizes.forEach(function (size) {
    const propValue = props[size];
    delete props[size];

    const span: ColumnSize | undefined = propValue;
    let offset: NumberAttribute | undefined;

    const infix = size !== 'xs' ? `-${size}` : '';

    if (span) {
      spans.push(span ? `column${infix}` : `column${infix}-${span}`);
    }

    if (offset) {
      classes.push(`offset${infix}-${offset}`);
    }
  });

  if (!spans.length) {
    spans.push('column');
  }

  return (
    <div {...props} className={classNames(...spans, ...classes)}>
      {children}
    </div>
  );
}
