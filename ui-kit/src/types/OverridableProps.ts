import { ElementType } from 'react';
import { CombineElementProps } from './utils';

/**
 * @desc 원하는 엘리먼트로 렌더링할 수 있는 as 프로퍼티와 커스텀 Props를 병합합니다.
 */
export type OverridableProps<E extends ElementType, P = unknown> = {
  as?: E;
} & CombineElementProps<E, P>;
