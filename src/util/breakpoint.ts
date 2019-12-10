import { Breakpoint } from '../config/theme';
import { FlattenSimpleInterpolation } from 'styled-components';
import { css } from './styled-components';

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
