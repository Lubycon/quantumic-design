import React, { useMemo } from 'react';
import classnames from 'classnames';
import { colors } from 'src/constants/colors';

/**
 * UI Kit 내부에서만 사용
 */

interface Props {
  icon: string;
  size?: number;
  type: 'outline' | 'filled';
  color?: string;
  className?: string;
}

const Icon = ({ icon, size = 16, type, color = colors.gray100, className }: Props) => {
  const svgTag = useMemo(() => {
    return icon.replace(/data:image\/svg\+xml;utf8,/, '');
  }, [icon]);

  const coloredSvg = useMemo(() => {
    const targetAttr = type === 'outline' ? 'stroke' : 'fill';
    return svgTag.replace(/(<path\s)\b/gm, `$1${targetAttr}="${color}" `);
  }, [svgTag, color]);

  return (
    <span
      className={classnames(
        'lubycon-icon',
        {
          'lubycon-icon--outline': type === 'outline',
          'lubycon-icon--filled': type === 'filled',
        },
        className
      )}
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: coloredSvg }}
    />
  );
};

export default Icon;
