import React, { FC } from 'react';
import styled from '../util/styled-components';
import { Breakpoint } from '../config/theme';
import { breakpoint } from '../util/breakpoint';
import Drew from './Drew';
import Wrapper from './Wrapper';
import { Heading, Content } from './Text';

const Section = styled.section`
  margin-top: -1rem;

  ${breakpoint(Breakpoint.Medium, Breakpoint.Large)`
    margin-top: -8rem;
  `}
`;

const DrewImg = styled(Drew)`
  ${breakpoint(Breakpoint.Small, Breakpoint.Medium)`
    display: none;
  `}

  ${breakpoint(Breakpoint.Medium)`
    margin-bottom: 2rem;
    margin-right: 2rem;
  `}
`;

const H1 = Heading(styled.h1`
  align-items: center;
  display: flex;
  margin-bottom: 3rem;
`);

const P = Content(styled.p`
  margin-bottom: 2rem;
`);

const Tagline = styled.i`
  font-style: italic;
`;

export interface MastheadProps {
  className?: string;
}

const Masthead: FC<MastheadProps> = props => (
  <Section {...props}>
    <Wrapper>
      <H1>
        <DrewImg />
        <span>My name is Drew.</span>
      </H1>
      <P>
        I’m a front-end craftsman focused on making software that matters and
        tools that empower designers and developers.
      </P>
      <P>
        <Tagline>Let’s build something together.</Tagline>
      </P>
    </Wrapper>
  </Section>
);

export default Masthead;
