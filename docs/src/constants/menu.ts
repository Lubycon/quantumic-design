export interface LinkMenu {
  type: 'link';
  title: string;
  link: string;
}

export interface LabelMenu {
  type: 'label';
  title: string;
  children: LinkMenu[];
}

export type Menu = LinkMenu | LabelMenu;

export const menu: Menu[] = [
  {
    type: 'link',
    title: 'Getting Started',
    link: '/getting-started',
  },
  {
    type: 'label',
    title: 'Components',
    children: [
      { type: 'link', title: 'Alert', link: '/components/alert' },
      { type: 'link', title: 'Button', link: '/components/button' },
      { type: 'link', title: 'Card', link: '/components/card' },
    ],
  },
];
