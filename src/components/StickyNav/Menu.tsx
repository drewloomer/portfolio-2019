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
import { MenuLink } from './MenuLink';

export interface NavItem {
  text: string;
  icon: ComponentClass;
  internal?: boolean;
  link: string;
}

export interface StickyNavMenuProps extends HTMLAttributes<HTMLUListElement> {}

// @todo: move this to graphQL
const items: NavItem[] = [
  {
    text: 'Resume',
    icon: Briefcase,
    internal: true,
    link: '#resume'
  },
  {
    text: 'Contact',
    icon: Contact,
    internal: true,
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
    position: fixed;
    right: 1rem;
    top: 2rem;
    transition: max-height 150ms ease-out, opacity 100ms linear;
    z-index: -5;
  `}

  ${breakpoint(Breakpoint.Large)`
    background: transparent;
    box-shadow: none;
    left: 50vw;
    top: 7rem;
    transform: translateX(43rem);
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
        {items.map(({ link, text, internal, icon: SVG }, i) => (
          <ListItem key={i}>
            <MenuLink link={link} internal={internal}>
              <ListIcon color={theme.colors.gray._700}>
                <SVG />
              </ListIcon>
              {text}
            </MenuLink>
          </ListItem>
        ))}
      </List>
    )}
  </Consumer>
);

export default StickyNavMenu;
