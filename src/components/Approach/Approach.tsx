import React, { FC } from 'react';
import styled from '../../util/styled-components';
import { Wrapper, WrapperType } from '../Wrapper';
import { Heading, Content, List, ListItem, Link } from '../Text';

const Section = styled.section``;

const H2 = styled(Heading)`
  align-items: center;
  display: flex;
  margin-bottom: 3rem;
`;

const P = styled(Content)``;

const UL = styled(List)``;

const LI = styled(ListItem)``;

export interface ApproachProps {
  className?: string;
}

export const Approach: FC<ApproachProps> = props => (
  <Section>
    <Wrapper {...props} type={WrapperType.Dark}>
      <H2 as="h2">My approach</H2>
      <P>
        I’ve worn many hats in my 15+ years as a software developer and
        consultant, but I strive to embody the{' '}
        <Link
          href="https://en.wikipedia.org/wiki/T-shaped_skills"
          target="_blank"
        >
          “t-shaped”
        </Link>{' '}
        developer. While my knowledge and experience cover a wide-range of
        topics, I consider myself a specialist in several areas:
      </P>
      <UL as="ul">
        <LI>Front-end architecture</LI>
        <LI>Design systems/component Libraries</LI>
        <LI>Team leadership and transformation</LI>
        <LI>Agile development</LI>
        <LI>Rapid prototyping</LI>
      </UL>
    </Wrapper>
  </Section>
);

export default Approach;
