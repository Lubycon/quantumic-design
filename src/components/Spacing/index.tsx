import { css } from '@emotion/react';

interface Props {
  size: number;
}
export const Spacing = ({ size }: Props) => {
  return (
    <div
      css={css`
        height: ${size}px;
      `}
    />
  );
};
