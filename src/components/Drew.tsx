import React, { FC } from 'react';
import drew from '../assets/drew.jpg';
import styled from '../util/styled-components';

const Img = styled.img`
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

export const Drew: FC<DrewProps> = props => (
  <Img src={drew} {...props} alt="Headshot of Drew Loomer" />
);

export default Drew;
