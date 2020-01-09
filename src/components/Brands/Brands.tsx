import React, { FC } from 'react';
import styled from '../../util/styled-components';
import { Wrapper } from '../Wrapper';
import { Heading, Content } from '../Text';
import { BrandsList } from './BrandsList';

const Section = styled.section``;

const H2 = styled(Heading)`
  align-items: center;
  display: flex;
  margin-bottom: 3rem;
`;

const P = styled(Content)``;

export interface BrandsProps {
  className?: string;
}

export const Brands: FC<BrandsProps> = props => (
  <Section id="brands">
    <Wrapper {...props}>
      <H2 as="h2">Brands I’ve worked with</H2>
      <P>
        I consider the ability to rapidly assimilate industry context one of my
        greatest strengths. From healthcare to banking, airlines to consumer
        goods, I’ve plied my craft for a variety of companies.
      </P>
      <P>Here are just a few:</P>
      <BrandsList />
    </Wrapper>
  </Section>
);

export default Brands;
