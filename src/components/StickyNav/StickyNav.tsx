import React, { FC, useState, useRef } from 'react';
import styled from '../../util/styled-components';
import StickyNavMenu, { NavItem } from './Menu';
import Briefcase from '../../assets/icon/briefcase.svg';
import Contact from '../../assets/icon/contact.svg';
import LinkedIn from '../../assets/icon/linkedin.svg';
import Twitter from '../../assets/icon/twitter.svg';
import GitHub from '../../assets/icon/github.svg';
import Medium from '../../assets/icon/medium.svg';
import { Breakpoint } from '../../config/theme';
import { breakpoint } from '../../util/breakpoint';
import { Wrapper } from './Wrapper';
import { useFixedOnScrollBack } from '../../util/scroll-position';
import { NavBar } from './NavBar';
import { Provider } from './Context';

// @todo: move this to graphQL
const items: NavItem[] = [
  {
    text: 'Resume',
    icon: Briefcase,
    link: '#resume'
  },
  {
    text: 'Contact',
    icon: Contact,
    link: '#contact'
  },
  {
    text: 'LinkedIn',
    icon: LinkedIn,
    link: 'https://www.linkedin.com/in/drewloomer/'
  },
  {
    text: 'Twitter',
    icon: Twitter,
    link: 'https://twitter.com/drewloomer'
  },
  {
    text: 'GitHub',
    icon: GitHub,
    link: 'https://github.com/drewloomer'
  },
  {
    text: 'Medium',
    icon: Medium,
    link: 'https://medium.com/@drewloomer'
  }
];
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
            items={items}
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
