import React, { FC } from 'react';
import styled from '../../util/styled-components';
import { Wrapper } from '../Wrapper';
import { Heading, Content } from '../Text';
import { ToolsList } from './ToolsList';
import { OtherTools } from './OtherTools';

const Section = styled.section``;

const H2 = styled(Heading)`
  align-items: center;
  display: flex;
  margin-bottom: 3rem;
`;

const P = styled(Content)``;

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
        And here are some others that either accentuate the gray in my beard or
        aren't glamorous enough to merit an icon:
      </P>
      <OtherTools />
    </Wrapper>
  </Section>
);

export default Tools;
