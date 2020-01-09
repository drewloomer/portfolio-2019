import React, { FC } from 'react';
import Img from 'gatsby-image';
import styled from '../../util/styled-components';
import { Wrapper, WrapperType } from '../Wrapper';
import { Heading, Content, Caption } from '../Text';
import { queryImages } from '../../util/query-images';

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
  flex: 1 1 100%;
  margin: 1rem;
  text-align: center;

  caption {
    display: block;
    margin-top: 1rem;
  }
`;

const Circle = styled(Img)`
  border-radius: 50%;
  display: block;
  flex: 0 0 auto;
  overflow: hidden;
  width: 100%;
`;

export interface AboutMeProps {
  className?: string;
}

export const AboutMe: FC<AboutMeProps> = props => {
  const [dad, husband, nerd, flanders] = queryImages(
    'dad',
    'husband',
    'nerd',
    'flanders'
  );
  return (
    <Section {...props} id="about-me">
      <Wrapper type={WrapperType.Dark}>
        <H2 as="h2">About Me</H2>
        <P>
          I’m a hands-on front-end architect who sees both the big picture and
          fine details. I love exploring new technologies and know how to
          balance them with battle-tested alternatives. I pride myself on
          solving the business problems of today without sacrificing the
          scalability tomorrow may need.
        </P>
        <P>
          I’ve lead teams of designers and developers in delivering over $15MM
          in complex software. I work closely with product owners and UX
          designers to translate business requirements into clear development
          tasks. I leverage my SCRUM certification and practical Agile knowledge
          to keep projects focused on solving real user problems, realizing
          designs as code and minimizing technical debt.
        </P>
        <P>I’m a remote worker, beard wearer, record collector and dad.</P>
        <Photos as="ul">
          <Photo>
            <Circle
              fluid={husband.childImageSharp.fluid}
              alt="Drew with his wife"
            />
            <Caption>Husband</Caption>
          </Photo>
          <Photo>
            <Circle
              fluid={dad.childImageSharp.fluid}
              alt="Drew with his daughters"
            />
            <Caption>Dad</Caption>
          </Photo>
          <Photo>
            <Circle
              fluid={nerd.childImageSharp.fluid}
              alt="Drew playing Burgertime"
            />
            <Caption>Nerd</Caption>
          </Photo>
          <Photo>
            <Circle
              fluid={flanders.childImageSharp.fluid}
              alt="Drew as Ned Flanders for Halloween"
            />
            <Caption>Flanders</Caption>
          </Photo>
        </Photos>
      </Wrapper>
    </Section>
  );
};

export default AboutMe;
