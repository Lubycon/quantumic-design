import { ComponentProps } from 'react';

export const Box = ({ children, ...rest }: ComponentProps<'div'>) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        height: 80,
        borderRadius: 8,
        backgroundColor: '#fcfcfd',
        padding: 34,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};
