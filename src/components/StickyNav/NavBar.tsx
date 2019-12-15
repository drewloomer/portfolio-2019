import React, { FC } from 'react';
import styled from '../../util/styled-components';
import { DrewImg } from './DrewImg';
import { Toggle } from './Toggle';
import { Breakpoint } from '../../config/theme';
import { breakpoint } from '../../util/breakpoint';
import { Consumer, StickyNavContext } from './Context';

const Container = styled.div<StickyNavContext>`
  align-items: center;
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
        <Toggle id="menuToggle" aria-haspopup="true" aria-controls="navMenu" />
      </Container>
    )}
  </Consumer>
);
