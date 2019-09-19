import React, { ReactNode, FC } from 'react';
import styled from 'styled-components';
import { useStaticQuery, Link, graphql } from 'gatsby';
import drew from '../assets/drew.jpg';
import Wrapper from './Wrapper';
import StickyNavToggle from './StickyNavToggle';

export interface NavItem {
  text: string;
  logo: string;
  link: string;
}

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
const Nav = styled.nav`
  padding: 1rem;
`;

const StickyNav: FC<StickyNavProps> = () => {
  return (
    <Nav>
      <Wrapper>
        <img src={drew} />
        <StickyNavToggle />
        {items.map(i => i.text)}
      </Wrapper>
    </Nav>
  );
};

export default StickyNav;
