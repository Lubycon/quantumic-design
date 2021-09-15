import { cloneElement, ReactElement } from 'react';

type ShadowLevel = 0 | 1 | 2 | 3 | 4 | 5;

const shadows: Record<ShadowLevel, string> = {
  0: 'none',
  1: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  2: '0px 3px 5px rgba(0, 0, 0, 0.1)',
  3: '0px 6px 10px rgba(0, 0, 0, 0.1)',
  4: '0px 8px 12px rgba(0, 0, 0, 0.1)',
  5: '0px 24px 48px rgba(0, 0, 0, 0.1)',
};

interface Props {
  level: ShadowLevel;
  children: ReactElement;
}
const Shadow = ({ level = 1, children }: Props) => {
  return cloneElement(children, {
    css: [children.props.css, { boxShadow: shadows[level] }],
  });
};

export default Shadow;
