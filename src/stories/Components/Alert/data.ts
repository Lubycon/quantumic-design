import { SemanticColor } from 'src/constants/colors';

export const alerts: Array<{ type: SemanticColor; title: string }> = [
  {
    type: 'negative',
    title: '오류',
  },
  {
    type: 'notice',
    title: '경고',
  },
  {
    type: 'informative',
    title: '정보',
  },
  {
    type: 'positive',
    title: '완료',
  },
];
