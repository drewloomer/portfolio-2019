import React, { FC } from 'react';
import styled, {
  keyframes,
  ThemeProps,
  css
} from '../../util/styled-components';
import { DrewImg } from './DrewImg';
import { StickyNavToggle } from './StickyNavToggle';
import { Breakpoint, Theme } from '../../config/theme';
import { breakpoint } from '../../util/breakpoint';
import { Consumer, StickyNavContext } from './Context';

const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
`;
const animateWrapper = (_: ThemeProps<Theme>) => css`
  animation: ${slideIn} 500ms ease-out;
`;

const Container = styled.div<StickyNavContext>`
  display: flex;
  justify-content: space-between;
  padding: 3rem;
  width: 100%;

  ${breakpoint(Breakpoint.Small, Breakpoint.Medium)`
    background: ${p =>
      p.fixed || p.open ? p.theme.colors.gray._1000 : 'transparent'};
    box-sizing: border-box;
    position: relative;
    z-index: 10;

    ${p =>
      p.fixed &&
      `
      ${animateWrapper}
      box-shadow: ${!p.open ? p.theme.shadows.box : 'none'};
      left: 0;
      top: 0;
      width: 100%;
    `}
  `}
`;

export const NavBar: FC = () => (
  <Consumer>
    {({ ...props }) => (
      <Container {...props}>
        <DrewImg />
        <StickyNavToggle
          id="menuToggle"
          aria-haspopup="true"
          aria-controls="navMenu"
        />
      </Container>
    )}
  </Consumer>
);
