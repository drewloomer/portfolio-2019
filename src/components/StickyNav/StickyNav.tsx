import React, { FC, useState, useRef } from 'react';
import styled from '../../util/styled-components';
import StickyNavMenu from './Menu';
import { Breakpoint } from '../../config/theme';
import { breakpoint } from '../../util/breakpoint';
import { Wrapper } from './Wrapper';
import { useFixedOnScrollBack } from '../../util/scroll-position';
import { NavBar } from './NavBar';
import { Provider } from './Context';

const Nav = styled.nav`
  ${breakpoint(Breakpoint.Small, Breakpoint.Medium)`
    height: 13rem;
  `}
`;

const StickyNav: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const fixed = useFixedOnScrollBack(ref);
  return (
    <Provider value={{ open, fixed, setOpen }}>
      <Nav>
        <Wrapper ref={ref}>
          <NavBar />
          <StickyNavMenu
            role="menu"
            id="navMenu"
            aria-labelledby="menuToggle"
          />
        </Wrapper>
      </Nav>
    </Provider>
  );
};

export default StickyNav;
