import React, { FC, HTMLAttributes } from 'react';
import styled from '../util/styled-components';
import Wrapper from './Wrapper';

export interface NavItem {
  text: string;
  logo: string;
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
  left: 0;
  margin: 0;
  max-height: ${props => (props.open ? '60rem' : '0')};
  overflow: hidden;
  padding: 0 ${props => props.theme.padding.sm};
  position: absolute;
  transition: max-height 150ms ease-out;
  width: 100%;
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
    margin-bottom: 6rem;
  }
`;
const ListLink = styled.a`
  color: inherit;
`;

const StickyNavMenu: FC<StickyNavMenuProps> = ({ items, ...props }) => {
  return (
    <List as="ul" {...props}>
      {items.map(i => (
        <ListItem>
          <ListLink href={i.link}>{i.text}</ListLink>
        </ListItem>
      ))}
    </List>
  );
};

export default StickyNavMenu;
