import { useEffect, useState } from 'react';
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
  }
>;

/**
 * @deprecated
 * ionicons의 아이콘을 사용합니다
 *  https://ionicons.com/
 */
const Icon = ({
  name,
  size = 16,
  type: propsType = 'filled',
  color = colors.gray100,
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
      ref={impressionRef}
      css={{
        width: size,
        height: size,
        display: 'inline-block',
        fill: 'currentColor',
        '& svg': {
          width: '100%',
          verticalAlign: 'top',
        },
      }}
      {...rest}
    >
      <span
        css={{
          display: needShowFallbackIcon ? 'none' : 'inline-block',
          width: size,
          height: size,
          [targetAttr]: color,
          color,
        }}
        aria-label={name}
        aria-hidden={iconHTML == null}
        dangerouslySetInnerHTML={iconHTML ? { __html: iconHTML } : undefined}
        role="img"
      />
      <img
        src={getIconUrl(iconName)}
        css={{
          display: needShowFallbackIcon ? 'inline-block' : 'none',
          verticalAlign: 'top',
        }}
        alt={name}
      />
    </span>
  );
};

export default Icon;
