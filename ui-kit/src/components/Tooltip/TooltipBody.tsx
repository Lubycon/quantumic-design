import React from 'react';

interface Props {
  children: string;
}
const TooltipBody = ({ children }: Props) => {
  return <div className="lubycon-tooltip__body">{children}</div>;
};

export default TooltipBody;
