import React, { forwardRef } from 'react';
import { Ref } from 'react';
import { CombineElementProps } from 'src/types/utils';
import classnames from 'classnames';

interface SelectionBaseProps {
  placeholder?: string;
}
type SelectionProps = Omit<CombineElementProps<'select', SelectionBaseProps>, 'multiple'>;

const Selection = (
  { placeholder, disabled, children, ...props }: SelectionProps,
  ref: Ref<any>
) => {
  console.log(placeholder);
  return (
    <select
      ref={ref}
      multiple={false}
      {...props}
      className={classnames('lubycon-selection', {
        'lubycon-selection--disabled': disabled,
      })}
    >
      {placeholder !== undefined ? (
        <option value="" hidden={true}>
          {placeholder}
        </option>
      ) : null}
      {children}
    </select>
  );
};

export default forwardRef(Selection) as typeof Selection;
