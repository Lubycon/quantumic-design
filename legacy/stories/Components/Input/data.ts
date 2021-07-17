import { TextInputType } from 'src/components/Input';

export const types: TextInputType[] = [
  'text',
  'email',
  'number',
  'password',
  'search',
  'tel',
  'url',
];
export const covertToTitlecase = (s: string) =>
  `${s.charAt(0).toUpperCase()}${s.slice(1, s.length)}`;
