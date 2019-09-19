import React, { FC } from 'react';
import styled from 'styled-components';
import colors from '../config/colors';
import drew from '../assets/drew.jpg';
import Wrapper from './Wrapper';

export interface StickyNavProps {
  open?: boolean;
}

const Button = styled.button<StickyNavProps>`
  display: flex;
  padding: 1rem;

  i {
    background: ${colors.gray._100};
    border-radius: 50%;
    display: block;
    height: 1rem;
    width: 1rem;
  }
`;

const StickyNavToggle: FC<StickyNavProps> = ({ open }) => {
  return (
    <Button open={open}>
      <i />
      <i />
      <i />
    </Button>
  );
};

export default StickyNavToggle;
