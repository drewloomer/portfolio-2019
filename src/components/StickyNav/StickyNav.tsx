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

  ${breakpoint(Breakpoint.Medium, Breakpoint.Large)`
    height: 11rem;
  `}
`;

const StickyNav: FC = () => {
  const el = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [fixed, setClearFixed] = useFixedOnScrollBack(el);
  return (
    <Provider value={{ open, fixed, setOpen, setClearFixed }}>
      <Nav>
        <Wrapper ref={el}>
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
