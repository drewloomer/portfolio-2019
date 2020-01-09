import React, { FC } from 'react';
import styled from '../../util/styled-components';
import { Breakpoint } from '../../config/theme';
import { breakpoint } from '../../util/breakpoint';
import { createScrollTo } from '../../util/scroll-to';
import { Consumer } from './Context';

export interface MenuLinkProps {
  link?: string;
  internal?: boolean;
  className?: string;
}

const ListLink = styled.a`
  color: inherit;
  display: flex;
  justify-content: center;
  transition: color 100ms linear;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.gray._200};
    text-decoration: underline;
  }

  ${breakpoint(Breakpoint.Medium)`
    padding: 0 5rem;
  `}

  ${breakpoint(Breakpoint.Large)`
    justify-content: flex-start;
  `}
`;

const scrollDuration = 250;

export const MenuLink: FC<MenuLinkProps> = ({
  children,
  internal,
  link,
  ...props
}) => {
  const scrollTo = internal && createScrollTo({ duration: scrollDuration });
  const onClick = internal
    ? (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        scrollTo(link);
        setTimeout(
          () => (window.location.hash = link.replace('#', '')),
          scrollDuration
        );
      }
    : () => {};
  return (
    <Consumer>
      {({ setOpen, setClearFixed }) => (
        <ListLink
          href={link}
          target={!internal ? '_blank' : '_self'}
          rel={!internal ? 'noopener' : ''}
          onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            onClick(e);
            setOpen(false);
            setClearFixed(true);
          }}
          {...props}
        >
          {children}
        </ListLink>
      )}
    </Consumer>
  );
};
