import React, { FC, useState, useEffect } from 'react';
import styled from '../util/styled-components';
import drew from '../assets/drew.jpg';
import StickyNavToggle from './StickyNavToggle';
import StickyNavMenu, { NavItem } from './StickyNavMenu';
import Briefcase from '../assets/icon/briefcase.svg';
import Contact from '../assets/icon/contact.svg';
import LinkedIn from '../assets/icon/linkedin.svg';
import Twitter from '../assets/icon/twitter.svg';
import GitHub from '../assets/icon/github.svg';
import Medium from '../assets/icon/medium.svg';
import { Breakpoint } from '../config/theme';
import { breakpoint } from '../util/breakpoint';

export interface StickyNavProps {}

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
  padding-bottom: 13.5rem;
`;
const Drew = styled.img<{ open: boolean; fixed: boolean }>`
  border-radius: 50%;
  height: 7rem;
  overflow: hidden;
  position: relative;
  transition: height 100ms ease-out, width 100ms ease-out;
  will-change: height, width;
  width: 7rem;

  ${breakpoint(0, Breakpoint.Small)`
      height: ${p => (p.open || p.fixed ? '4rem' : '7rem')};
      width: ${p => (p.open || p.fixed ? '4rem' : '7rem')};
  `}
`;
const StyledToggle = styled(StickyNavToggle)`
  justify-self: flex-end;
  margin: -2rem;
`;
const FixedWrapper = styled.div<{ open: boolean; fixed: boolean }>`
  background: ${props =>
    props.open || props.fixed ? props.theme.colors.gray._1000 : 'transparent'};
  box-shadow: ${props =>
    props.open || !props.fixed ? `none` : props.theme.shadows.box};

  will-change: box-shadow;
  z-index: 100;

  ${breakpoint(0, Breakpoint.Small)`
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
  `}
`;
const BannerWrapper = styled.div<{ open: boolean; fixed: boolean }>`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 86rem;
  padding: 3rem;
  position: relative;
  transition: padding 100ms ease-out;
  will-change: padding;
  z-index: 5;

  ${breakpoint(0, Breakpoint.Small)`
    padding: ${props =>
      props.open || props.fixed
        ? `1rem ${props.theme.padding.sm} 1rem ${props.theme.padding.sm}`
        : `${props.theme.padding.sm}`};
    width: 100%;
  `}
`;

export const checkFixed = (setFixed: (fixed: boolean) => void) => () => {
  const check = (): void => {
    setFixed(window.scrollY > 24); // @todo: make this dynamic
  };
  document.addEventListener('scroll', check);
  return () => {
    document.removeEventListener('scroll', check);
  };
};

const StickyNav: FC<StickyNavProps> = () => {
  const [open, setOpen] = useState(false);
  const [fixed, setFixed] = useState(false);
  useEffect(checkFixed(setFixed));
  return (
    <Nav>
      <FixedWrapper open={open} fixed={fixed}>
        <BannerWrapper open={open} fixed={fixed}>
          <Drew src={drew} open={open} fixed={fixed} />
          <StyledToggle
            open={open}
            onClick={() => setOpen(!open)}
            id="menuToggle"
            aria-haspopup="true"
            aria-controls="navMenu"
          />
          <StickyNavMenu
            items={items}
            open={open}
            role="menu"
            id="navMenu"
            aria-labelledby="menuToggle"
          />
        </BannerWrapper>
      </FixedWrapper>
    </Nav>
  );
};

export default StickyNav;
