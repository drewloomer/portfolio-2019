import React, { FC, ComponentClass, HTMLAttributes } from 'react';
import styled from '../../util/styled-components';

import ReactLogo from '../../assets/logo/reactjs.svg';
import AngularLogo from '../../assets/logo/angular.svg';
import ReduxLogo from '../../assets/logo/redux.svg';
import SassLogo from '../../assets/logo/sass.svg';
import nodeLogo from '../../assets/logo/node.svg';
import gitLogo from '../../assets/logo/git.svg';
import { breakpoint } from '../../util/breakpoint';
import { Breakpoint } from '../../config/theme';

export interface ToolsListProps extends HTMLAttributes<HTMLUListElement> {}

export interface ToolItem {
  text: string;
  logo: ComponentClass;
  link: string;
}

// @todo: move this to graphQL
const items: ToolItem[] = [
  {
    text: 'React',
    logo: ReactLogo,
    link: 'https://reactjs.org/'
  },
  {
    text: 'Angular',
    logo: AngularLogo,
    link: 'https://angular.io/'
  },
  {
    text: 'Redux',
    logo: ReduxLogo,
    link: 'https://redux.js.org/'
  },
  {
    text: 'Sass',
    logo: SassLogo,
    link: 'https://sass-lang.com/'
  },
  {
    text: 'node.js',
    logo: nodeLogo,
    link: 'https://nodejs.org/en/'
  },
  {
    text: 'git',
    logo: gitLogo,
    link: 'https://git-scm.com/'
  }
];

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 1rem -1.5rem;

  ${breakpoint(Breakpoint.Medium)`
    flex-wrap: nowrap;
  `}
`;
const ListItem = styled.li`
  width: 33.333333333%;
`;
const ListLink = styled.a`
  align-items: center;
  color: inherit;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  padding: 1rem 1.5rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  svg {
    height: auto;
    max-height: 12rem;
    margin-bottom: 0.5rem;
    width: 100%;
  }
`;

export const ToolsList: FC<ToolsListProps> = ({ ...props }) => (
  <List {...props}>
    {items.map(({ text, logo: Logo, link }) => (
      <ListItem key={link}>
        <ListLink href={link} target="_blank" rel="noopener">
          <Logo />
          {text}
        </ListLink>
      </ListItem>
    ))}
  </List>
);
