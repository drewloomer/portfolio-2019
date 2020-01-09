import React, { FC } from 'react';
import Img from 'gatsby-image';
import styled from '../util/styled-components';
import { queryImages } from '../util/query-images';

const DrewImg = styled(Img)`
  border-radius: 50%;
  height: 7rem;
  overflow: hidden;
  position: relative;
  transition: height 100ms ease-out, width 100ms ease-out;
  will-change: height, width;
  width: 7rem;
`;

export interface DrewProps {
  className?: string;
}

export const Drew: FC<DrewProps> = ({ className }) => {
  const [drew] = queryImages('drew');
  return (
    <DrewImg
      fluid={drew.childImageSharp.fluid}
      className={className}
      alt="Headshot of Drew Loomer"
    />
  );
};

export default Drew;
