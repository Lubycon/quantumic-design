import { CSSProperties } from 'react';
import { colors } from '../../../constants/colors';

export const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const columnStyle: CSSProperties = {
  border: `1px solid ${colors.blue50}`,
  backgroundColor: colors.blue40,
  height: 100,
  color: colors.gray10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
