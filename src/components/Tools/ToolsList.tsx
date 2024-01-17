import React, { FC, ComponentClass, HTMLAttributes } from 'react';
import styled from '../../util/styled-components';

import ReactLogo from '../../assets/logo/reactjs.svg';
import TailwindLogo from '../../assets/logo/tailwind.svg';
import NodeLogo from '../../assets/logo/node.svg';
import ExpressLogo from '../../assets/logo/express.svg';
import GitLogo from '../../assets/logo/git.svg';
import NextLogo from '../../assets/logo/nextjs.svg';
import { breakpoint } from '../../util/breakpoint';
import { Breakpoint } from '../../config/theme';

export interface ToolsListProps extends HTMLAttributes<HTMLUListElement> {}

export interface ToolItem {
  text: string;
  logo: ComponentClass;
  link: string;
}

const items: ToolItem[] = [
  {
    text: 'React',
    logo: ReactLogo,
    link: 'https://react.dev/'
  },
  {
    text: 'Next.js',
    logo: NextLogo,
    link: 'https://nextjs.org/'
  },
  {
    text: 'Tailwind',
    logo: TailwindLogo,
    link: 'https://tailwindcss.com/'
  },
  {
    text: 'Express',
    logo: ExpressLogo,
    link: 'https://expressjs.com/'
  },
  {
    text: 'node.js',
    logo: NodeLogo,
    link: 'https://nodejs.org/en/'
  },
  {
    text: 'git',
    logo: GitLogo,
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
