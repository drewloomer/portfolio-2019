import React, { FC } from 'react';
import styled from '../../util/styled-components';
import { Wrapper } from '../Wrapper';
import { Heading, Content, List, ListItem, Link } from '../Text';
import { ToolsList } from './ToolsList';
import { Breakpoint } from '../../config/theme';
import { breakpoint } from '../../util/breakpoint';

const Section = styled.section``;

const H2 = styled(Heading)`
  align-items: center;
  display: flex;
  margin-bottom: 3rem;
`;

const P = styled(Content)``;
const OtherTools = styled(List)`
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

export interface ToolsProps {
  className?: string;
}

const otherTools: { text: string; link: string }[] = [
  { text: 'Styled Components', link: 'https://www.styled-components.com' },
  { text: 'LESS', link: 'http://lesscss.org/' },
  { text: 'Stylus', link: 'http://stylus-lang.com/' },
  { text: 'jQuery', link: 'https://jquery.com/' },
  { text: 'Ember', link: 'https://emberjs.com/' },
  { text: 'Backbone', link: 'https://backbonejs.org/' },
  { text: 'Handlebars', link: 'https://handlebarsjs.com/' },
  { text: 'MySQL', link: 'https://www.mysql.com/' },
  { text: 'MongoDB', link: 'https://www.mongodb.com/' },
  { text: 'Webpack', link: 'https://webpack.js.org/' },
  { text: 'Rollup', link: 'https://rollupjs.org/guide/en/' },
  { text: 'Browserify', link: 'http://browserify.org/' },
  { text: 'Gulp', link: 'https://gulpjs.com/' },
  { text: 'Grunt', link: 'https://gruntjs.com/' },
  { text: 'PHP', link: 'https://www.php.net/' },
  { text: 'Laravel', link: 'https://laravel.com/' },
  { text: 'Wordpress', link: 'https://wordpress.org/' },
  { text: 'Sketch', link: 'https://www.sketch.com/' },
  { text: 'Photoshop', link: 'https://www.adobe.com/products/photoshop.html' },
  {
    text: 'Illustrator',
    link: 'https://www.adobe.com/products/illustrator.html'
  }
];

export const Tools: FC<ToolsProps> = props => (
  <Section {...props} id="tools">
    <Wrapper>
      <H2 as="h2">Tools I Use</H2>
      <P>
        Solid foundations in vanilla Javascript, semantic HTML and scalable CSS
        have enabled me to successfully lead teams using a variety of front-end
        technologies, as well as role up my sleeves and ship lots of code
        myself.
      </P>
      <P>Here are some tools I’ve been using recently:</P>
      <ToolsList />
      <P>
        And here are some others that aren't glamorous enough to merit an icon:
      </P>
      <OtherTools as="ul">
        {otherTools.map(({ text, link }) => (
          <OtherTool key={text}>
            <OtherToolLink href={link} target="_blank" rel="noopener">
              {text}
            </OtherToolLink>
          </OtherTool>
        ))}
      </OtherTools>
    </Wrapper>
  </Section>
);

export default Tools;
