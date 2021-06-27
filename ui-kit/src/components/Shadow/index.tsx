import classnames from 'classnames';
import { cloneElement, ReactElement } from 'react';

interface Props {
  level: 1 | 2 | 3 | 4 | 5;
  children: ReactElement;
}
const Shadow = ({ level, children }: Props) => {
  return cloneElement(children, {
    className: classnames(children.props.classNames ?? '', `lubycon-shadow--${level}`),
  });
};

export default Shadow;
