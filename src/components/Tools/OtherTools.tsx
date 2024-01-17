import React, { FC } from 'react';
import styled from '../../util/styled-components';
import { List, ListItem, Link } from '../Text';
import { Breakpoint } from '../../config/theme';
import { breakpoint } from '../../util/breakpoint';

const otherTools: { text: string; link: string }[] = [
  { text: 'GitHub Actions', link: 'https://github.com/features/actions' },
  { text: 'Vite', link: 'https://vitejs.dev/' },
  { text: 'Jest', link: 'https://jestjs.io/' },
  { text: 'Vitest', link: 'https://vitest.dev/' },
  { text: 'Docker', link: 'https://www.docker.com/' },
  { text: 'Helm', link: 'https://helm.sh/' },
  { text: 'Kubernetes', link: 'https://kubernetes.io/' },
  { text: 'Laravel', link: 'https://laravel.com/' },
  { text: 'AWS', link: 'https://aws.amazon.com/' },
  { text: 'Playwright', link: 'https://playwright.dev/' },
  { text: 'PHP', link: 'https://www.php.net/' },
  { text: 'Gatsby', link: 'https://www.gatsbyjs.com/' },
  { text: 'BigCommerce', link: 'https://developer.bigcommerce.com/' },
  { text: 'Contentful', link: 'https://www.contentful.com/developers/docs/' },
  { text: '.NET', link: 'https://dotnet.microsoft.com/en-us/' },
  { text: 'Redux', link: 'https://redux.js.org/' },
  { text: 'Ember', link: 'https://emberjs.com/' },
  { text: 'Mocha', link: 'https://mochajs.org/' },
  { text: 'Chai', link: 'https://www.chaijs.com/' },
  { text: 'Styled Components', link: 'https://www.styled-components.com' },
  { text: 'Sass', link: 'https://sass-lang.com/' },
  { text: 'LESS', link: 'http://lesscss.org/' },
  { text: 'Stylus', link: 'http://stylus-lang.com/' },
  { text: 'TeamCity', link: 'https://www.jetbrains.com/teamcity/' },
  { text: 'Octopus', link: 'https://octopus.com/' },
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
  { text: 'Webpack', link: 'https://webpack.js.org/' },
  { text: 'Rollup', link: 'https://rollupjs.org/guide/en/' },
  { text: 'Browserify', link: 'http://browserify.org/' },
  { text: 'Gulp', link: 'https://gulpjs.com/' },
  { text: 'jQuery', link: 'https://jquery.com/' },
  { text: 'Figma', link: 'https://www.figma.com/' },
  { text: 'InVision', link: 'https://www.invisionapp.com/' },
  { text: 'Sketch', link: 'https://www.sketch.com/' }
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
