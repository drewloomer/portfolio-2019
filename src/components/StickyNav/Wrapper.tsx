import React, { ReactNode, forwardRef } from 'react';
import styled from '../../util/styled-components';
import { Breakpoint } from '../../config/theme';
import { breakpoint } from '../../util/breakpoint';
import { Consumer, StickyNavContext } from './Context';

export const WrapperEl = styled.div<StickyNavContext>`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 86rem;
  position: relative;
  transition: padding 100ms ease-out;
  will-change: padding;
  z-index: 5;

  ${breakpoint(Breakpoint.Small, Breakpoint.Medium)`
    left: 0;
    position: ${p => (p.fixed ? 'fixed' : 'relative')};
    top: 0;
    width: 100%;
  `}
`;

export const Wrapper = forwardRef<HTMLDivElement, { children: ReactNode }>(
  ({ children }, ref) => (
    <Consumer>
      {context => (
        <WrapperEl {...context} ref={ref}>
          {children}
        </WrapperEl>
      )}
    </Consumer>
  )
);
