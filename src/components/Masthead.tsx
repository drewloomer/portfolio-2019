import React, { FC } from 'react';
import styled from '../util/styled-components';
import { Breakpoint } from '../config/theme';
import { breakpoint } from '../util/breakpoint';
import Drew from './Drew';
import Wrapper from './Wrapper';
import { Heading, Content } from './Text';

const Section = styled.section``;
const DrewImg = styled(Drew)`
  ${breakpoint(Breakpoint.Small, Breakpoint.Medium)`
    display: none;
  `}
`;
const H1 = Heading(styled.h1``);
const P = Content(styled.p``);
const Tagline = styled.i``;

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
