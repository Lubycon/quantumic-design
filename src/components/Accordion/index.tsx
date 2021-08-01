import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { CombineElementProps } from 'src/types/utils';
import classnames from 'classnames';
import Icon from '../Icon';
import Text from '../Text';
import { colors } from 'src/constants/colors';
import { useElementSize } from 'src';

type Props = CombineElementProps<
  'div',
  {
    label: string;
    defaultOpen?: boolean;
    onChange?: (state: boolean) => void;
    onOpen?: () => void;
    onClose?: () => void;
  }
>;
const Accordion = forwardRef<HTMLDivElement, Props>(function Accordion(
  { label, className, children, defaultOpen = false, onChange, onOpen, onClose, ...props },
  ref
) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const { height: bodyHeight } = useElementSize(contentRef);

  const toggleContentOpen = () => {
    setOpen((state) => !state);
  };

  useEffect(() => {
    onChange?.(open);
  }, [open]);

  useEffect(() => {
    if (open === true) {
      onOpen?.();
    } else {
      onClose?.();
    }
  }, [open]);

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
          name="chevron-down"
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
