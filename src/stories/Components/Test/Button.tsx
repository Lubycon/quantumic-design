import { SerializedStyles, css } from '@emotion/react';

import React from 'react';
import palette from './color';

export interface ComponentCommonProps {
  isCapturing?: boolean;
  className?: string;
  style?: Record<string, unknown>;
  margin?: [number, number?, number?, number?];
  padding?: [number, number?, number?, number?];
}

export enum ButtonType {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

const style = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0 1rem;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
`;
const themes: { [key: string]: SerializedStyles } = {
  disabled: css`
    background: ${palette.key0};
    color: white;
    &:hover {
      background: ${palette.key1};
    }
    &:active {
      background: ${palette.key2};
    }
  `,
  primary: css`
    background: ${palette.key0};
    color: white;
    &:hover {
      background: ${palette.key1};
    }
    &:active {
      background: ${palette.key3};
    }
  `,
  secondary: css`
    color: ${palette.key0};
    border: 1px solid ${palette.key0};
    background: none;
    &:hover {
      color: ${palette.key1};
      border: 1px solid ${palette.key1};
    }
    &:active {
      color: ${palette.key3};
      border: 1px solid ${palette.key3};
    }
  `,
  tertiary: css`
    background: none;
    color: ${palette.key0};
    &:hover {
      color: ${palette.key1};
    }
    &:active {
      color: ${palette.key3};
      background: rgba(233, 137, 48, 0.08);
    }
  `,
};

const sizes = {
  small: css`
    height: 2rem;
    font-size: 1rem;
    padding: 0 0.75rem;
  `,
  medium: css`
    height: 2.5rem;
    font-size: 1.125rem;
    padding: 0 1rem;
  `,
  large: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.25rem;
  `,
};

interface IProps extends ComponentCommonProps {
  isCapture?: boolean;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
  theme?: string;
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

function Button({
  children,
  theme = 'primary',
  isCapture = false,
  onClick,
  size = 'large',
}: IProps) {
  const clickEvent = isCapture ? { onClickCapture: onClick } : { onClick };
  const colors = themes[theme];

  return (
    <button css={[style, colors, sizes[size]]} {...clickEvent}>
      {children}
    </button>
  );
}
Button.defaultProps = {
  theme: 'primary',
  size: 'medium',
};

export default Button;
