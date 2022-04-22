import React, { FC } from 'react';
import styled from '../../util/styled-components';
import { List, ListItem, Link } from '../Text';
import { Breakpoint } from '../../config/theme';
import { breakpoint } from '../../util/breakpoint';

// @todo: get this from GraphQL
const otherTools: { text: string; link: string }[] = [
  { text: 'Jest', link: 'https://jestjs.io/' },
  { text: 'Playwright', link: 'https://playwright.dev/' },
  { text: 'Mocha', link: 'https://mochajs.org/' },
  { text: 'Chai', link: 'https://www.chaijs.com/' },
  { text: 'Styled Components', link: 'https://www.styled-components.com' },
  { text: 'Sass', link: 'https://sass-lang.com/' },
  { text: 'LESS', link: 'http://lesscss.org/' },
  { text: 'Stylus', link: 'http://stylus-lang.com/' },
  { text: 'TeamCity', link: 'https://www.jetbrains.com/teamcity/' },
  { text: 'Octopus', link: 'https://octopus.com/' },
  { text: 'AWS', link: 'https://aws.amazon.com/' },
  {
    text: 'Azure DevOps',
    link: 'https://azure.microsoft.com/en-us/services/devops/'
  },
  { text: 'Jenkins', link: 'https://jenkins.io/' },
  { text: 'Capacitor', link: 'https://capacitorjs.com/' },
  { text: 'Angular', link: 'https://angular.io/' },
  { text: 'Postgres', link: 'https://www.postgresql.org/' },
  { text: 'MySQL', link: 'https://www.mysql.com/' },
  { text: 'MongoDB', link: 'https://www.mongodb.com/' },
  { text: 'Vite', link: 'https://vitejs.dev/' },
  { text: 'Webpack', link: 'https://webpack.js.org/' },
  { text: 'Rollup', link: 'https://rollupjs.org/guide/en/' },
  { text: 'Browserify', link: 'http://browserify.org/' },
  { text: 'Gulp', link: 'https://gulpjs.com/' },
  { text: 'Grunt', link: 'https://gruntjs.com/' },
  { text: 'jQuery', link: 'https://jquery.com/' },
  { text: 'Sketch', link: 'https://www.sketch.com/' },
  { text: 'PHP', link: 'https://www.php.net/' },
  { text: 'Laravel', link: 'https://laravel.com/' }
];

const OtherToolsList = styled(List)`
  display: flex;
  flex-wrap: wrap;
`;
const OtherTool = styled(ListItem)`
  box-sizing: border-box;

  ${breakpoint(Breakpoint.Small, Breakpoint.Medium)`
    padding-left: 0;
    margin-right: 1rem;
    &::before {
      display: none;
    }
  `}

  ${breakpoint(Breakpoint.Medium)`
    flex: 0 1 33.3333333%;
  `}
`;
const OtherToolLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const OtherTools: FC = () => (
  <OtherToolsList as="ul">
    {otherTools.map(({ text, link }) => (
      <OtherTool key={text}>
        <OtherToolLink href={link} target="_blank" rel="noopener">
          {text}
        </OtherToolLink>
      </OtherTool>
    ))}
  </OtherToolsList>
);
