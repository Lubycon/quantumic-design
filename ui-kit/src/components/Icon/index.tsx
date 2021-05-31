import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { colors } from 'src/constants/colors';
import { CombineElementProps } from 'src/types/utils';
import { IconName } from 'src/types/icon';

const iconCache: Record<string, string> = {};

export type IconType = 'outline' | 'filled' | 'sharp';
type Props = CombineElementProps<
  'span',
  {
    name: IconName;
    size?: number;
    type?: IconType;
    color?: string;
    className?: string;
  }
>;

/** ionicons의 아이콘을 사용합니다
 *  https://ionicons.com/
 */
const Icon = ({
  name,
  size = 16,
  type = 'outline',
  color = colors.gray100,
  className,
  ...rest
}: Props) => {
  const targetAttr = type === 'outline' ? 'stroke' : 'fill';
  const iconName = getIconName(name, type);

  const [iconHTML, setIconHTML] = useState<string | undefined>(iconCache[iconName]);
  const [showFallbackIcon, setShowFallbackIcon] = useState(false);

  useEffect(() => {
    if (iconHTML != null) {
      return;
    }

    let ignore = false;

    (async function () {
      try {
        const data = await fetchIcon(iconName);
        if (!ignore) {
          setIconHTML(data);
          iconCache[iconName] = data;
        }
      } catch {
        setShowFallbackIcon(true);
      }
    })();

    return () => {
      ignore = true;
    };
  }, []);

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
      {...rest}
    >
      <span
        style={{ width: size, height: size, [targetAttr]: color, color }}
        className={classnames('lubycon-icon__icon-body', {
          'lubycon-icon__icon-body--hide-origin-icon': showFallbackIcon,
        })}
        aria-label={name}
        aria-hidden={iconHTML == null}
        dangerouslySetInnerHTML={iconHTML ? { __html: iconHTML } : undefined}
        role="img"
      />
      <img
        src={getIconUrl(iconName)}
        className={classnames('lubycon-icon__fallback-icon', {
          'lubycon-icon__fallback-icon--show-fallback-icon': showFallbackIcon,
        })}
        alt={name}
      />
    </span>
  );
};

export default Icon;

async function fetchIcon(name: string) {
  const response = await fetch(getIconUrl(name));
  const body = await response.text();
  if (response.ok) {
    return body;
  } else {
    throw new Error(body);
  }
}

function getIconName(name: string, type: IconType) {
  return type === 'filled' ? name : `${name}-${type}`;
}

function getIconUrl(name: string) {
  return `https://icons.lubycon.io/${name}.svg`;
}
