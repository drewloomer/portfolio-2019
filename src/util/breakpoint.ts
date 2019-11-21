import { Breakpoint } from '../config/theme';
import { FlattenSimpleInterpolation, Interpolation } from 'styled-components';
import { css } from './styled-components';

type TemplateFunction = (p: any) => string | FlattenSimpleInterpolation;

export const breakpoint = (
  from: Breakpoint | number,
  to?: Breakpoint | number
) => {
  // return (
  //   { raw }: TemplateStringsArray,
  //   ...placeholders: Array<string | TemplateFunction>
  // ) => {
  //   return css(raw.reduce((acc, r) => {

  //   });
  // };

  // @todo: type props so it gives type hints
  // look at how styled-components does its typing?
  return (
    { raw }: TemplateStringsArray,
    ...placeholders: Array<string | TemplateFunction> // | Interpolation<string>>
  ) => (props: any) => {
    const query = `@media (min-width: ${from}px${
      to !== undefined ? `) and (max-width: ${to - 1}px` : ''
    }) { `;
    const newRaw = [query, ...raw, '}'];
    const newPlaceholders = ['', ...placeholders, ''];
    // @ts-ignore
    return css(newRaw, ...newPlaceholders);
    // placeholders.reduce((acc: string, p: string | Function, i) => {
    //   if (typeof p === 'function') {
    //     const res = p(props);
    //     if (typeof res === 'string') {
    //       p = res;
    //     } else {
    //       console.log(acc, res);
    //       //     // p = css(res[1]);
    //       //     console.log(p);
    //       //     // `
    //       //     //   ${() => res[1].toString()}
    //       //     // `;
    //       //     // console.log(res);
    //       //     // console.log(
    //       //     //   css`
    //       //     //     ${() => res[1].toString()}
    //       //     //   `
    //       //     // );
    //       //     //   css`
    //       //     //     ${res[1]}
    //       //     //   `
    //       //     // );
    //       // @ts-ignore
    //       // p = css`
    //       //   ${p(props)}
    //       // `;
    //     }
    //   }
    //   acc += raw[i] + p;
    //   return acc;
    // }, '') + raw[raw.length - 1];
    // ret += '}';
    // return ret;
  };
};
