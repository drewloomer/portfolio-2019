import React, { FC, HTMLAttributes, ComponentClass } from 'react';
import styled from '../../util/styled-components';
import Icon from '../Icon';
import theme, { Breakpoint } from '../../config/theme';
import { breakpoint } from '../../util/breakpoint';
import { Consumer, StickyNavContext } from './Context';

import Briefcase from '../../assets/icon/briefcase.svg';
import Contact from '../../assets/icon/contact.svg';
import LinkedIn from '../../assets/icon/linkedin.svg';
import Twitter from '../../assets/icon/twitter.svg';
import GitHub from '../../assets/icon/github.svg';
import Medium from '../../assets/icon/medium.svg';

export interface NavItem {
  text: string;
  icon: ComponentClass;
  link: string;
}

export interface StickyNavMenuProps extends HTMLAttributes<HTMLUListElement> {}

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

const List = styled.ul<StickyNavMenuProps & StickyNavContext>`
  background: ${props => props.theme.colors.gray._1000};
  box-shadow: ${props => props.theme.shadows.box};
  box-sizing: border-box;
  margin: 0;
  overflow: hidden;
  padding: 0 ${props => props.theme.padding.sm};
  position: absolute;

  ${breakpoint(Breakpoint.Small, Breakpoint.Medium)`
    left: 0;
    max-height: ${props => (props.open ? '60rem' : '0')};
    top: 100%;
    transition: max-height 150ms ease-out;
    width: 100%;
  `}

  ${breakpoint(Breakpoint.Medium, Breakpoint.Large)`
    left: auto;
    max-height: ${props => (props.open ? '60rem' : '0')};
    opacity: ${props => (props.open ? '1' : '0')};
    padding-top: 10rem;
    right: 1rem;
    top: 2rem;
    transition: max-height 150ms ease-out, opacity 100ms linear;
    z-index: 0;
  `}

  ${breakpoint(Breakpoint.Large)`
    background: transparent;
    box-shadow: none;
    position: fixed;
    left: 0;
    top: 7rem;
    z-index: 10;
  `}
`;
const ListItem = styled.li`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 3rem;
  line-height: 1.5;
  list-style-type: none;
  margin-bottom: 2rem;
  transition: transform 100ms ease-out;

  &:nth-child(1) {
    margin-top: 1rem;
  }

  &:last-child {
    margin-bottom: 6rem;
  }

  ${breakpoint(Breakpoint.Medium)`
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  `}
`;
const ListLink = styled.a`
  color: inherit;
  display: flex;
  justify-content: center;
  transition: color 100ms linear;

  &:hover {
    color: ${props => props.theme.colors.gray._200};
  }

  ${breakpoint(Breakpoint.Medium)`
    padding: 0 5rem;
  `}

  ${breakpoint(Breakpoint.Large)`
    justify-content: flex-start;
  `}
`;
const ListIcon = styled(Icon)`
  height: 2rem;
  margin-right: 1rem;

  ${breakpoint(Breakpoint.Medium)`
    height: 1.5rem;
    margin-right: .75rem;
  `}
`;

const StickyNavMenu: FC<StickyNavMenuProps> = () => (
  <Consumer>
    {({ ...props }) => (
      <List as="ul" {...props}>
        {items.map(({ link, text, icon: SVG }, i) => (
          <ListItem key={i}>
            <ListLink href={link}>
              <ListIcon color={theme.colors.gray._700}>
                <SVG />
              </ListIcon>
              {text}
            </ListLink>
          </ListItem>
        ))}
      </List>
    )}
  </Consumer>
);

export default StickyNavMenu;
