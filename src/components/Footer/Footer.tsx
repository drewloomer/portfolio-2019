import React, { FC } from 'react';
import styled from '../../util/styled-components';
import { Wrapper } from '../Wrapper';
import { Content } from '../Text';

const Section = styled.section``;

const P = styled(Content)`
  text-align: center;
`;

export interface FooterProps {
  className?: string;
}

const year = new Date().getFullYear();

export const Footer: FC<FooterProps> = props => (
  <Section {...props}>
    <Wrapper>
      <P>©{year} Drewloomer.com LLC</P>
    </Wrapper>
  </Section>
);

export default Footer;
