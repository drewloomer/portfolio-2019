import { Breakpoint } from '../config/theme';

type TemplateFunction = (p: any) => string;

export const breakpoint = (
  from: Breakpoint | number,
  to?: Breakpoint | number
) => {
  // @todo: type props so it gives type hints
  // look at how styled-components does its typing?
  return (
    { raw }: TemplateStringsArray,
    ...placeholders: Array<string | TemplateFunction>
  ) => (props: any) => `
      @media (min-width: ${from}px${
    to !== undefined ? ` and max-width: ${to - 1}px` : ''
  }) { ${placeholders.reduce((acc: string, p: string | Function, i) => {
    if (typeof p === 'function') {
      p = p(props);
    }
    acc += raw[i] + p;
    return acc;
  }, '') + raw[raw.length - 1]} }
    `;
};
