import { css } from '@emotion/react';

export function Box({ color }: { color: string }) {
  return (
    <div
      css={css`
        width: 100px;
        height: 100px;
        background-color: ${color};
      `}
    />
  );
}
