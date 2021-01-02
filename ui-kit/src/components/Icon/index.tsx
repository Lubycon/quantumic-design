import React, { useMemo } from 'react';
import classnames from 'classnames';
import { Colors, colors } from 'src/constants/colors';

/**
 * UI Kit 내부에서만 사용
 */

interface Props {
  icon: string;
  size?: number;
  type: 'outline' | 'filled';
  color?: Colors;
}

const Icon = ({ icon, size = 16, type, color = colors.gray100 }: Props) => {
  const svg = useMemo(() => {
    const tag = icon.replace(/data:image\/svg\+xml;utf8,/, '');
    const targetAttr = type === 'outline' ? 'stroke' : 'fill';
    return tag.replace(/(<path\s)\b/gm, `$1${targetAttr}="${color}" `);
  }, [icon]);

  return (
    <span
      className={classnames('lubycon-icon', {
        'lubycon-icon--outline': type === 'outline',
        'lubycon-icon--filled': type === 'filled',
      })}
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default Icon;
