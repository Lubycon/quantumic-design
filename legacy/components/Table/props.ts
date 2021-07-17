import { HTMLAttributes } from 'react';
import { Combine } from 'src/types/utils';

export type TableProps<T> = Combine<
  Omit<HTMLAttributes<T>, 'align' | 'bgcolor'>,
  {
    align?: 'left' | 'center' | 'right';
  }
>;
