import React, { FC } from 'react';
import Img from 'gatsby-image';
import styled from '../../util/styled-components';
import { Wrapper, WrapperType } from '../Wrapper';
import { Heading, Content, Caption } from '../Text';
import { queryImages } from '../../util/query-images';
import { breakpoint } from '../../util/breakpoint';
import { Breakpoint } from '../../config/theme';

const Section = styled.section``;

const H2 = styled(Heading)`
  align-items: center;
  display: flex;
  margin-bottom: 3rem;
`;

const P = styled(Content)``;

const B = styled.b`
  font-weight: bold;
`;

const Photos = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem;
`;

const Photo = styled.li`
  display: block;
  flex: 0 0 auto;
  text-align: center;
  padding: 1rem;
  width: calc(50% - 2rem);

  caption {
    display: block;
    margin-top: 1rem;
  }

  ${breakpoint(Breakpoint.Medium)`
    width: calc(25% - 2rem);
  `}
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
    'girls',
    'husband',
    'nerd',
    'flanders'
  );
  return (
    <Section {...props} id="about-me">
      <Wrapper type={WrapperType.Dark}>
        <H2 as="h2">About Me</H2>
        <P>
          I’m a hands-on front-end architect with full-stack experience and a
          passion for leadership. I love exploring new technologies and know how
          to balance them with battle-tested alternatives, seeing both the big
          picture and fine details. I pride myself on solving the business
          problems of today without sacrificing the scalability and testability
          tomorrow will need.
        </P>
        <P>
          I’ve lead teams of designers and developers in delivering over $25MM
          in complex software. I work closely with product owners and UX
          partners to translate business requirements into clear development
          tasks. I leverage my project management experience to keep teams
          focused on solving real user and business problems, translating
          designs into code and minimizing technical debt.{' '}
          <B>
            I can lead by example, or step back to provide technical oversight
            and mentorship.
          </B>
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
            <Circle fluid={dad.childImageSharp.fluid} alt="Drew's daughters" />
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
