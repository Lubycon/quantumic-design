import { useEffect, useState } from 'react';
import classnames from 'classnames';
import { colors } from '../../constants/colors';
import { CombineElementProps } from '../../types/utils';
import { IconName } from '../../types/icon';
import { fetchIcon, getIconName, getIconType, getIconUrl } from './utils';

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
  type: propsType = 'outline',
  color = colors.gray100,
  className,
  ...rest
}: Props) => {
  const type = getIconType(name, propsType);
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
