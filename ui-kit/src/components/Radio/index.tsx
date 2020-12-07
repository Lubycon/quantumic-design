import React, { forwardRef } from 'react';
import { Ref } from 'react';
import { CombineElementProps } from 'src/types/utils';
import clxs from 'classnames';
import { generateID } from 'src/utils/generateID';
import { Text } from '..';

interface RadioBaseProps {
  label?: string;
  display?: 'block' | 'inline';
}
type RadioProps = Omit<CombineElementProps<'input', RadioBaseProps>, 'type'>;

const RadioOption = (
  { label, display = 'block', ...props }: RadioProps,
  ref: Ref<HTMLInputElement>
) => {
  const id = generateID('radio-option');

  return (
    <span className={clxs('lubycon-radio', `lubycon-radio--display-${display}`)}>
      <input ref={ref} type="radio" {...props} id={id} />
      {label ? (
        <Text as="label" htmlFor={id}>
          {label}
        </Text>
      ) : null}
    </span>
  );
};

export default forwardRef(RadioOption) as typeof RadioOption;
