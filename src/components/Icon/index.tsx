import { useEffect, useState } from 'react';
import classnames from 'classnames';
import { colors } from '../../constants/colors';
import { CombineElementProps } from '../../types/utils';
import { IconName } from '../../types/icon';
import { fetchIcon, getIconName, getIconType, getIconUrl } from './utils';
import { useBooleanState, useImpression } from '@lubycon/react';

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
  type: propsType = 'filled',
  color = colors.gray100,
  className,
  ...rest
}: Props) => {
  const type = getIconType(name, propsType);
  const targetAttr = type === 'outline' ? 'stroke' : 'fill';
  const iconName = getIconName(name, type);

  const [iconHTML, setIconHTML] = useState<string | undefined>(iconCache[iconName]);
  const [needShowFallbackIcon, showFallbackIcon] = useBooleanState(false);
  const [isVisible, visible] = useBooleanState(false);

  useEffect(() => {
    if (iconHTML != null || isVisible === false) {
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
        showFallbackIcon();
      }
    })();

    return () => {
      ignore = true;
    };
  }, [isVisible, iconHTML]);

  const impressionRef = useImpression({
    onImpressionStart: visible,
  });

  return (
    <span
      className={classnames('lubycon-icon', className)}
      style={{ width: size, height: size }}
      ref={impressionRef}
      {...rest}
    >
      <span
        style={{ width: size, height: size, [targetAttr]: color, color }}
        className={classnames('lubycon-icon__icon-body', {
          'lubycon-icon__icon-body--hide-origin-icon': needShowFallbackIcon,
        })}
        aria-label={name}
        aria-hidden={iconHTML == null}
        dangerouslySetInnerHTML={iconHTML ? { __html: iconHTML } : undefined}
        role="img"
      />
      <img
        src={getIconUrl(iconName)}
        className={classnames('lubycon-icon__fallback-icon', {
          'lubycon-icon__fallback-icon--show-fallback-icon': needShowFallbackIcon,
        })}
        alt={name}
      />
    </span>
  );
};

export default Icon;
