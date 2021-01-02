import React, { forwardRef } from 'react';
import { Ref } from 'react';
import { CombineElementProps } from 'src/types/utils';
import classnames from 'classnames';
import { chevronDownOutline } from 'ionicons/icons';
import Icon from 'components/Icon';
import { colors } from 'src/constants/colors';
interface SelectionBaseProps {
  placeholder?: string;
}
type SelectionProps = Omit<CombineElementProps<'select', SelectionBaseProps>, 'multiple'>;

const Selection = (
  { placeholder, disabled, children, ...props }: SelectionProps,
  ref: Ref<any>
) => {
  return (
    <div
      className={classnames('lubycon-selection', {
        'lubycon-selection--disabled': disabled,
      })}
    >
      <select ref={ref} multiple={false} {...props} className="lubycon-selection--select">
        {placeholder !== undefined ? (
          <option value="" hidden={true} className="lubycon-selection--placeholder">
            {placeholder}
          </option>
        ) : null}
        {children}
      </select>
      <Icon icon={chevronDownOutline} type="outline" color={colors.gray40} />
    </div>
  );
};

export default forwardRef(Selection) as typeof Selection;
