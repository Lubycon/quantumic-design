import React, { forwardRef, isValidElement, ReactNode, useMemo, useState } from 'react';
import classnames from 'classnames';
import { CombineElementProps } from 'src/types/utils';
import Text from '../Text';

export type TextInputType = 'text' | 'tel' | 'url' | 'email' | 'number' | 'password' | 'search';
type Props = CombineElementProps<
  'input',
  {
    label?: ReactNode;
    type?: TextInputType;
    right?: ReactNode;
    hasError?: boolean;
    description?: string;
  }
>;
const Input = forwardRef<HTMLInputElement, Props>(function Input(
  {
    style,
    label,
    className,
    disabled,
    type = 'text',
    right,
    hasError,
    description,
    onFocus,
    onBlur,
    ...props
  },
  ref
) {
  const [isFocused, setFocus] = useState(false);
  const hasLabel = label != null;
  const hasDescription = description != null;
  const hasRightArea = right != null;

  const labelElement = useMemo(() => {
    if (hasLabel) {
      return (
        <span className="lubycon-input__label">
          {isValidElement(label) ? label : <Text>{label}</Text>}
        </span>
      );
    }
    return null;
  }, [label]);

  return (
    <label
      className={classnames(
        'lubycon-input',
        {
          'lubycon-input--disabled': disabled,
          'lubycon-input--focused': isFocused,
          'lubycon-input--with-label': hasLabel,
          'lubycon-input--with-description': hasDescription,
          'lubycon-input--has-error': hasError,
        },
        className
      )}
      style={style}
    >
      {labelElement}
      <div
        className={classnames('lubycon-input__form', {
          'lubycon-input__form--with-right-area': hasRightArea,
        })}
      >
        <input
          ref={ref}
          className={classnames('lubycon-input__form__input-element', 'lubycon-typography-p1')}
          type={type}
          disabled={disabled}
          onFocus={(e) => {
            setFocus(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocus(false);
            onBlur?.(e);
          }}
          {...props}
        />
        {right != null ? <span className="lubycon-input__form__right">{right}</span> : null}
      </div>
      {description ? (
        <Text className="lubycon-input__description" typography="caption">
          {description}
        </Text>
      ) : null}
    </label>
  );
});

export default Input;
