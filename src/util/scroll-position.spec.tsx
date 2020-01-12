import React from 'react';
import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useFixedOnScrollBack } from './scroll-position';

const TestComponent = () => <nav />;

describe('Track scroll position', () => {
  it('should return fixed as true when the user is scrolling backwards', () => {
    const el = render(<TestComponent />);
    const { result } = renderHook(() =>
      useFixedOnScrollBack({ current: el.baseElement })
    );
    expect(result.current[0]).toBe(false);
    // @todo: test this with scrolling
  });
});
