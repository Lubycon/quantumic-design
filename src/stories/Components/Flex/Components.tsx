import { css } from '@emotion/react';

export function Box({ color }: { color: string }) {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        background-color: ${color};
      `}
    />
  );
}
