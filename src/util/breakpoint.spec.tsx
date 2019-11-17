import React from 'react';
import { breakpoint } from './breakpoint';
import styled, { keyframes, css } from 'styled-components';
import TestRenderer from 'react-test-renderer';

export const getCSS = (scope: Document | HTMLElement) =>
  Array.from(scope.querySelectorAll('style'))
    .map((tag: HTMLElement) => tag.innerHTML)
    .join('\n')
    .replace(/ {/g, '{')
    .replace(/:\s+/g, ':')
    .replace(/:\s+;/g, ':;');

export const stripComments = (str: string) =>
  str.replace(/\/\*.*?\*\/\n?/g, '');

export const stripWhitespace = (str: string) =>
  str
    .trim()
    .replace(/([;\{\}])/g, '$1  ')
    .replace(/\s+/g, ' ');

export const expectCSSMatches = (
  _expectation: string,
  opts: { ignoreWhitespace: boolean } = { ignoreWhitespace: true }
) => {
  // NOTE: This should normalise both CSS strings to make irrelevant mismatches less likely
  const expectation = _expectation
    .replace(/ {/g, '{')
    .replace(/:\s+/g, ':')
    .replace(/:\s+;/g, ':;');

  const css = getCSS(document);

  if (opts.ignoreWhitespace) {
    const stripped = stripWhitespace(stripComments(css));
    expect(stripped).toContain(stripWhitespace(expectation));
    return stripped;
  } else {
    expect(css).toContain(expectation);
    return css;
  }
};

describe('Breakpoint Utility', () => {
  it('should target a minimum breakpoint', () => {
    const result = breakpoint(400)`asdf`({});
    expect(result).toContain('@media (min-width: 400px) { asdf }');
  });

  it('should target a range of breakpoints', () => {
    const result = breakpoint(400, 600)`asdf`({});
    expect(result).toContain(
      '@media (min-width: 400px) and (max-width: 599px) { asdf }'
    );
  });

  it('should parse props', () => {
    const result = breakpoint(400, 600)`display: ${p =>
      p.bool ? 'block' : 'none'}; color: ${'red'};`({ bool: false });
    const result2 = breakpoint(400, 600)`display: ${p =>
      p.bool ? 'block' : 'none'};`({ bool: true });
    expect(result).toContain(
      '@media (min-width: 400px) and (max-width: 599px) { display: none; color: red; }'
    );
    expect(result2).toContain(
      '@media (min-width: 400px) and (max-width: 599px) { display: block; }'
    );
  });

  it('should work within a styled component', () => {
    const Component = styled.div`
      ${breakpoint(400, 600)`
        color: red;
      `}
    `;
    TestRenderer.create(<Component />);
    expectCSSMatches('@media (min-width:400px) and (max-width:599px)');
    expectCSSMatches('color:red;');
  });

  it.only('should work within a styled component with keyframes', () => {
    const changeColor = keyframes`
      0% {
        color: red;
      }
      100% {
        color: blue;
      }
    `;
    const animation = () => css`
      ${changeColor} 100ms;
    `;
    const Component = styled.div`
      ${breakpoint(400, 600)`
        animation: ${animation};
        color: red;
      `}
    `;
    TestRenderer.create(<Component />);
    expectCSSMatches('@media (min-width:400px) and (max-width:599px)');
    expectCSSMatches('keyframes: ');
  });
});
