import { SnackbarAlign } from '.';

export const getTranslateAnimation = (align: SnackbarAlign) => {
  switch (align) {
    case 'left':
      return {
        from: 'translateX(-100%)',
        to: 'translateX(0)',
      };
    case 'center':
      return {
        from: 'translateY(100%)',
        to: 'translateY(0)',
      };
    case 'right':
      return {
        from: 'translateX(100%)',
        to: 'translateX(0)',
      };
  }
};
