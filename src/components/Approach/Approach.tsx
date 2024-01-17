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
  <Section {...props} id="approach">
    <Wrapper type={WrapperType.Dark}>
      <H2 as="h2">My approach</H2>
      <P>
        I’ve worn many hats in my 20+ years as a software engineer, leader, and
        consultant. While my knowledge and experience cover a wide-range of
        topics, I strive to embody the{' '}
        <Link
          href="https://en.wikipedia.org/wiki/T-shaped_skills"
          target="_blank"
        >
          “t-shaped”
        </Link>{' '}
        developer. I consider myself a specialist in several areas:
      </P>
      <UL as="ul">
        <LI>Team leadership and transformation</LI>
        <LI>Full-stack Javascript development</LI>
        <LI>Design systems</LI>
        <LI>Service-oriented architecture</LI>
        <LI>CI/CD and automation</LI>
      </UL>
    </Wrapper>
  </Section>
);

export default Approach;
