const convertPxToRem = (rootFontSize: number) => (px: number) => `${px / rootFontSize}rem`;

export default convertPxToRem;
