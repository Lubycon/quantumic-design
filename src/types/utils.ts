import { ComponentProps, ElementType } from 'react';

/**
 * @description T와 K에서 T의 프로퍼티를 제거한 타입을 병합합니다.
 */
export type Combine<T, K> = T & Omit<K, keyof T>;

export type CombineElementProps<E extends ElementType, P = unknown> = Combine<P, ComponentProps<E>>;
