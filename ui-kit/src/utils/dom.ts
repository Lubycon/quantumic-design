export function getAbsoluteOffset(el: HTMLElement) {
  if (document?.body == null) {
    return {
      top: -1,
      left: -1,
    };
  }
  const bodyRect = document.body.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();

  return {
    top: elRect.top - bodyRect.top,
    left: elRect.left - bodyRect.left,
  };
}
