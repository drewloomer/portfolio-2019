import React, { FC, ReactNode, HTMLAttributes } from 'react';
import styled from '../util/styled-components';

export interface IconProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  color?: string;
  title?: string;
}

const I = styled.i<IconProps>`
  color: ${props => props.color || '#000'};
  display: inline-block;

  svg {
    height: 100%;
  }
`;

const Icon: FC<IconProps> = ({ children, title, color, ...props }) => (
  <I color={color} title={title} {...props}>
    {children}
  </I>
);

export default Icon;
