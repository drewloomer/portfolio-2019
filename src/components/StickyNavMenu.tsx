import React, { FC, HTMLAttributes, ComponentClass } from 'react';
import styled from '../util/styled-components';
import Icon from './Icon';
import theme, { Breakpoint } from '../config/theme';
import { breakpoint } from '../util/breakpoint';

export interface NavItem {
  text: string;
  icon: ComponentClass;
  link: string;
}

export interface StickyNavMenuProps extends HTMLAttributes<HTMLUListElement> {
  items?: NavItem[];
  open?: boolean;
}

const List = styled.ul<StickyNavMenuProps>`
  background: ${props => props.theme.colors.gray._1000};
  box-shadow: ${props => props.theme.shadows.box};
  box-sizing: border-box;
  margin: 0;
  overflow: hidden;
  padding: 0 ${props => props.theme.padding.sm};
  position: absolute;

  ${breakpoint(0, Breakpoint.Small)`
    left: 0;
    max-height: ${props => (props.open ? '60rem' : '0')};
    transition: max-height 150ms ease-out;
    width: 100%;
  `}

  ${breakpoint(Breakpoint.Medium)`
    right: 0;
    left: auto;
    top: 2rem;
    padding-top: 10rem;
    z-index: 0;
  `}
`;
const ListItem = styled.li`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 3rem;
  line-height: 1.5;
  list-style-type: none;
  margin-bottom: 2rem;
  text-align: center;
  text-decoration: underline;
  transition: transform 100ms ease-out;

  &:nth-child(1) {
    margin-top: 1rem;
  }

  &:last-child {
    ${breakpoint(0, Breakpoint.Small)`
      margin-bottom: 6rem;
    `}
  }
`;
const ListLink = styled.a`
  color: inherit;
  display: flex;
  justify-content: center;
`;
const ListIcon = styled(Icon)`
  height: 2rem;
  margin-right: 1rem;
`;

const StickyNavMenu: FC<StickyNavMenuProps> = ({ items, ...props }) => (
  <List as="ul" {...props}>
    {items.map(({ link, text, icon }, i) => {
      const SVG = icon;
      return (
        <ListItem key={i}>
          <ListLink href={link}>
            <ListIcon color={theme.colors.gray._700}>
              <SVG />
            </ListIcon>
            {text}
          </ListLink>
        </ListItem>
      );
    })}
  </List>
);

export default StickyNavMenu;
