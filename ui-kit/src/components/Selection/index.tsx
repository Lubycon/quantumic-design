import React, { forwardRef } from 'react';
import { Ref } from 'react';
import { CombineElementProps } from 'src/types/utils';
import classnames from 'classnames';
import { chevronDownOutline } from 'ionicons/icons';
import Icon from 'components/Icon';
import { colors } from 'src/constants/colors';
import { useState } from 'react';
import { useEffect } from 'react';
import { Typographys } from '../Text/types';
interface SelectionBaseProps {
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
}
type SelectionProps = Omit<CombineElementProps<'select', SelectionBaseProps>, 'multiple'>;

const Selection = (
  {
    placeholder = '옵션을 선택하세요',
    disabled,
    children,
    value,
    onChange,
    size = 'medium',
    ...props
  }: SelectionProps,
  ref: Ref<HTMLSelectElement>
) => {
  const [innerValue, setInnerValue] = useState(value ?? '');
  const iconColor = disabled ? colors.gray60 : colors.gray40;
  const typography: Typographys = size === 'large' ? 'content' : 'content2';

  useEffect(() => setInnerValue(value ?? ''), [value]);

  return (
    <div
      className={classnames('lubycon-selection', `lubycon-selection--size-${size}`, {
        'lubycon-selection--disabled': disabled,
        'lubycon-selection--empty': innerValue === '',
      })}
    >
      <select
        ref={ref}
        multiple={false}
        {...props}
        value={innerValue}
        className={classnames('lubycon-selection__select', `lubycon-typography--${typography}`)}
        onChange={(e) => {
          onChange?.(e);
          setInnerValue(e.target.value ?? '');
        }}
      >
        <option value="" hidden={true} className="lubycon-selection__placeholder">
          {placeholder}
        </option>
        {children}
      </select>
      <Icon icon={chevronDownOutline} type="outline" color={iconColor} />
    </div>
  );
};

export default forwardRef(Selection);
