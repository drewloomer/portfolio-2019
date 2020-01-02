import { Breakpoint, breakpoints } from '../config/theme';
import { FlattenSimpleInterpolation } from 'styled-components';
import { css } from './styled-components';
import React, {
  createContext,
  useState,
  useEffect,
  FC,
  ReactNode
} from 'react';

type TemplateFunction = (p: any) => string | FlattenSimpleInterpolation;

export const breakpoint = (
  from: Breakpoint | number,
  to?: Breakpoint | number
) => {
  return (
    { raw }: TemplateStringsArray,
    ...placeholders: Array<string | TemplateFunction>
  ) => () => {
    const query = `@media (min-width: ${from}px${
      to !== undefined ? `) and (max-width: ${to - 1}px` : ''
    }) { `;
    const newRaw = [query, ...raw, '}'];
    const newPlaceholders = ['', ...placeholders, ''];
    // @todo: why are these types wrong?
    // @ts-ignore
    return css(newRaw, ...newPlaceholders);
  };
};

export const getCurrentBreakpoint = () => {
  return breakpoints.find((bp: Breakpoint, i: number) => {
    const width = window.innerWidth;
    return (
      width >= bp &&
      (breakpoints[i + 1] === undefined || width < breakpoints[i + 1])
    );
  });
};

export interface BreakpointContext {
  current: Breakpoint;
}

const { Provider, Consumer: BreakpointConsumer } = createContext<
  BreakpointContext
>({
  current: null
});

export interface BreakpointProps {
  children: ReactNode;
}

const BreakpointProvider: FC<BreakpointProps> = ({ children }) => {
  const [current, setCurrent] = useState(null);
  useEffect(() => {
    const fn = () => setCurrent(getCurrentBreakpoint());
    fn();
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  });
  return <Provider value={{ current }}>{children}</Provider>;
};

export { BreakpointProvider, BreakpointConsumer };
