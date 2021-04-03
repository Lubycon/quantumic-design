const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};
type MediaQueryKeys = keyof typeof breakpoints;

/**
 * 미디어쿼리가 주어진 쿼리 키에 지정된 width보다 클 경우 true를 반환한다.
 **/
function isMatchMinWidth(key: MediaQueryKeys) {
  if (window == null) {
    return null;
  }

  return window.matchMedia(`screen and (min-width: ${breakpoints[key]}px)`).matches;
}

export function isMatchedXS() {
  return !isMatchMinWidth('xs');
}
export function isMatchedSM() {
  console.log(!isMatchMinWidth('sm'));
  return !isMatchMinWidth('sm');
}
export function isMatchedMD() {
  return !isMatchMinWidth('md');
}
export function isMatchedLG() {
  return !isMatchMinWidth('lg');
}
export function isMatchedXL() {
  return !isMatchMinWidth('xs');
}
