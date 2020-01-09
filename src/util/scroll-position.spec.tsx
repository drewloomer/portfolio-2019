import React from 'react';
import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import {
  useFixedOnScrollBack,
  useScrollPosition,
  useRefDimensions,
  useScrolledBack
} from './scroll-position';

const TestComponent = () => <nav />;

describe('Track scroll position', () => {
  it('should return the scroll position', () => {
    const { result } = renderHook(() => useScrollPosition());
    expect(result.current).toEqual([0, 0]);
    // @todo: test this with scrolling
  });

  it('should return the dimensions of a reference object', () => {
    const el = render(<TestComponent />);
    const { result } = renderHook(() =>
      useRefDimensions({ current: el.baseElement })
    );
    expect(result.current).toEqual([0, 0]);
  });

  it('should return true when the user has scrolled back', () => {
    const { result } = renderHook(() => useScrolledBack());
    expect(result.current).toBe(null);
    // @todo: test this with scrolling
  });

  it('should return fixed as true when the user is scrolling backwards', () => {
    const el = render(<TestComponent />);
    const { result } = renderHook(() =>
      useFixedOnScrollBack({ current: el.baseElement })
    );
    expect(result.current[0]).toBe(false);
    // @todo: test this with scrolling
  });
});
