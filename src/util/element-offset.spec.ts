import { offset } from './element-offset';

describe('Element Offset', () => {
  it('should return the offset position of an element relative to the window', () => {
    const el = document.createElement('div');
    el.innerHTML = '<div><div><div><span></span></div></div></div>';
    expect(offset(el.querySelector('span'))).toEqual({ left: 0, top: 0 });
  });
});
