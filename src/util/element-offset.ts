export interface Offset {
  left: number;
  top: number;
}

export const offset = (el: HTMLElement): Offset => {
  let left = 0;
  let top = 0;
  do {
    if (!isNaN(el.offsetLeft)) {
      left += el.offsetLeft;
      top += el.offsetTop;
    }
  } while ((el = el.offsetParent as HTMLElement));
  return { left, top };
};
