import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import drew from '../assets/drew.jpg';
import Wrapper from './Wrapper';
import StickyNavToggle from './StickyNavToggle';
import StickyNavMenu, { NavItem } from './StickyNavMenu';

export interface StickyNavProps {}

const items: NavItem[] = [
  {
    text: 'Resume',
    logo: 'briefcase',
    link: '#resume'
  },
  {
    text: 'Contact',
    logo: 'message',
    link: '#contact'
  },
  {
    text: 'LinkedIn',
    logo: 'linkedin',
    link: 'https://www.linkedin.com/in/drewloomer/'
  },
  {
    text: 'Twitter',
    logo: 'twitter',
    link: 'https://twitter.com/drewloomer'
  },
  {
    text: 'GitHub',
    logo: 'github',
    link: 'https://github.com/drewloomer'
  },
  {
    text: 'Medium',
    logo: 'medium',
    link: 'https://medium.com/@drewloomer'
  }
];
const Nav = styled.nav<{ open: boolean; fixed: boolean }>`
  box-shadow: ${props =>
    props.open || !props.fixed ? `none` : props.theme.shadows.box};
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;
const Drew = styled.img`
  border-radius: 50%;
  height: 7rem;
  overflow: hidden;
  position: relative;
  width: 7rem;
`;
const StyledToggle = styled(StickyNavToggle)`
  justify-self: flex-end;
  margin-right: -2rem;
`;
const BannerWrapper = styled(Wrapper)`
  align-items: center;
  background: ${props => props.theme.colors.gray._1000};
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  z-index: 5;
`;

export const checkFixed = (setFixed: (fixed: boolean) => void) => () => {
  const check = (): void => {
    setFixed(window.scrollY > 1);
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
    <Nav open={open} fixed={fixed}>
      <BannerWrapper>
        <Drew src={drew} />
        <StyledToggle
          open={open}
          onClick={() => setOpen(!open)}
          aria-haspopup="true"
          aria-controls="navMenu"
        />
      </BannerWrapper>
      <StickyNavMenu items={items} open={open} role="menu" id="navMenu" />
    </Nav>
  );
};

export default StickyNav;
