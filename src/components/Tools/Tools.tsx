import React, { FC } from 'react';
import styled from '../../util/styled-components';
import { Wrapper } from '../Wrapper';
import { Heading, Content, List, ListItem } from '../Text';
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
    flex: 1 1 33.3333333%;
  `}

  ${breakpoint(Breakpoint.Large)`
    flex: 0 1 25%;
  `}
`;

export interface ToolsProps {
  className?: string;
}

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
        <OtherTool>LESS</OtherTool>
        <OtherTool>Stylus</OtherTool>
        <OtherTool>jQuery</OtherTool>
        <OtherTool>Ember</OtherTool>
        <OtherTool>Backbone</OtherTool>
        <OtherTool>Handlebars</OtherTool>
        <OtherTool>MySQL</OtherTool>
        <OtherTool>MongoDB</OtherTool>
        <OtherTool>Webpack</OtherTool>
        <OtherTool>Rollup</OtherTool>
        <OtherTool>Browserify</OtherTool>
        <OtherTool>Gulp</OtherTool>
        <OtherTool>Grunt</OtherTool>
        <OtherTool>PHP</OtherTool>
        <OtherTool>Laravel</OtherTool>
        <OtherTool>Wordpress</OtherTool>
        <OtherTool>Sketch</OtherTool>
        <OtherTool>Photoshop</OtherTool>
        <OtherTool>Illustrator</OtherTool>
      </OtherTools>
    </Wrapper>
  </Section>
);

export default Tools;
