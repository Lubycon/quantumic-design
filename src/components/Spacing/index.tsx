import { css } from '@emotion/react';

interface Props {
  size: number;
}
export const Spacing = ({ size }: Props) => {
  return (
    <div
      css={css`
        width: 0;
        display: 'block';
        height: ${size};
      `}
    />
  );
};
