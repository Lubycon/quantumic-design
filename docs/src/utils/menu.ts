import { Menu, LabelMenu, LinkMenu } from 'constants/menu';

export function isLabelMenu(menu: Menu): menu is LabelMenu {
  return menu.type === 'label';
}

export function isLinkMenu(menu: Menu): menu is LinkMenu {
  return menu.type === 'link';
}
