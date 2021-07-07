import { SemanticColor } from 'src/constants/colors';

export const samples: Array<{ label: string; type?: SemanticColor }> = [
  {
    label: 'chore',
    type: undefined,
  },
  {
    label: '디자인 챕터',
    type: 'positive',
  },
  {
    label: '프론트엔드 챕터',
    type: 'informative',
  },
  {
    label: 'MVP',
    type: 'negative',
  },
  {
    label: 'feature',
    type: 'notice',
  },
];
