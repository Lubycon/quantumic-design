import React, { forwardRef, HTMLAttributes, useRef, useState } from 'react';
import { Combine } from 'src/types/utils';
import classnames from 'classnames';
import Icon from '../Icon';
import { chevronDown } from 'ionicons/icons';
import Text from '../Text';
import { useResizeObserver } from 'src/hooks/useResizeObserver';
import { colors } from 'src/constants/colors';

type Props = Combine<
  {
    label: string;
    defaultOpen?: boolean;
  },
  HTMLAttributes<HTMLDivElement>
>;
const Accordion = forwardRef<HTMLDivElement, Props>(function Accordion(
  { label, className, children, defaultOpen = false, ...props },
  ref
) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [bodyHeight, setBodyHeight] = useState(0);

  const toggleContentOpen = () => {
    setOpen((state) => !state);
  };

  const updateContentHeight = () =>
    setBodyHeight(contentRef.current?.getBoundingClientRect().height ?? 0);

  useResizeObserver(contentRef, updateContentHeight);

  return (
    <div
      ref={ref}
      className={classnames(
        'lubycon-accordion',
        {
          'lubycon-accordion--opened': open,
        },
        className
      )}
      {...props}
    >
      <div className="lubycon-accordion__label" onClick={toggleContentOpen} role="button">
        <Icon
          icon={chevronDown}
          type="outline"
          size={20}
          className="lubycon-accordion__label__icon"
          color={colors.gray90}
        />
        <Text typography="subtitle" className="lubycon-accordion__label__text">
          {label}
        </Text>
      </div>
      <div className="lubycon-accordion__cover" style={{ height: open ? bodyHeight : 0 }}>
        <div
          className="lubycon-accordion__cover__content"
          style={{ opacity: open ? 1 : 0 }}
          ref={contentRef}
        >
          {children}
        </div>
      </div>
    </div>
  );
});

export default Accordion;
