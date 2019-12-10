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
    const Component = styled.div`
      ${breakpoint(400)`
        asdf
      `}
    `;
    TestRenderer.create(<Component />);
    expectCSSMatches('@media (min-width:400px)');
    expectCSSMatches('asdf');
  });

  it('should target a range of breakpoints', () => {
    const Component = styled.div`
      ${breakpoint(400, 600)`
        asdf
      `}
    `;
    TestRenderer.create(<Component />);
    expectCSSMatches('@media (min-width:400px) and (max-width: 599px)');
    expectCSSMatches('asdf');
  });

  it('should parse props', () => {
    const Component = styled.div<{ bool?: boolean }>`
      ${breakpoint(400, 600)`display: ${p =>
        p.bool ? 'block' : 'none'}; color: ${'red'};`}
    `;
    TestRenderer.create(<Component />);
    TestRenderer.create(<Component bool={true} />);
    expectCSSMatches('@media (min-width:400px) and (max-width: 599px)');
    expectCSSMatches('display: none; color: red;');
    expectCSSMatches('display: block; color: red;');
  });

  it('should work with keyframes', () => {
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
    expectCSSMatches('animation: ');
  });
});
