import React, { FC } from 'react';
import styled from '../../util/styled-components';
import { Wrapper, WrapperType } from '../Wrapper';
import { Heading, Content, Caption } from '../Text';

const Section = styled.section``;

const H2 = styled(Heading)`
  align-items: center;
  display: flex;
  margin-bottom: 3rem;
`;

const P = styled(Content)``;

const Photos = styled.ul`
  display: flex;
  margin: -1rem;
`;

const Photo = styled.li`
  display: block;
  flex: 1 1 auto;
  margin: 1rem;
  text-align: center;

  caption {
    display: block;
    margin-top: 1rem;
  }
`;

const Circle = styled.img`
  border-radius: 50%;
  display: block;
  flex: 0 0 auto;
  overflow: hidden;
  width: 100%;
`;

export interface AboutMeProps {
  className?: string;
}

export const AboutMe: FC<AboutMeProps> = props => (
  <Section {...props}>
    <Wrapper type={WrapperType.Dark}>
      <H2 as="h2">About Me</H2>
      <P>
        I’m a hands-on front-end architect who sees both the big picture and
        fine details. I love exploring new technologies and know how to balance
        them with battle-tested alternatives. I pride myself on solving the
        business problems of today without sacrificing the scalability tomorrow
        may need.
      </P>
      <P>
        I’ve lead teams of designers and developers in delivering over $15MM in
        complex software. I work closely with product owners and UX designers to
        translate business requirements into clear development tasks. I leverage
        my SCRUM certification and practical Agile knowledge to keep projects
        focused on solving real user problems, realizing designs as code and
        minimizing technical debt.
      </P>
      <P>I’m a remote worker, beard wearer, record collector and dad.</P>
      <Photos as="ul">
        <Photo>
          <Circle src="https://via.placeholder.com/300.png" />
          <Caption>Dad</Caption>
        </Photo>
        <Photo>
          <Circle src="https://via.placeholder.com/300.png" />
          <Caption>Husband</Caption>
        </Photo>
        <Photo>
          <Circle src="https://via.placeholder.com/300.png" />
          <Caption>Nerd</Caption>
        </Photo>
        <Photo>
          <Circle src="https://via.placeholder.com/300.png" />
          <Caption>Ned Flanders</Caption>
        </Photo>
      </Photos>
    </Wrapper>
  </Section>
);

export default AboutMe;
