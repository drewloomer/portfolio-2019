import { createScrollTo } from './scroll-to';

describe('Scroll to element', () => {
  it('should create a scroller', () => {
    expect(createScrollTo()).not.toBeNull();
  });
  // @todo: more tests but we have to mock the scrolling element
});
