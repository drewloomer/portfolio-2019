import styled from '../util/styled-components';
import { Theme } from '../config/theme';
import { StyledComponent } from 'styled-components';

export const Heading = (c: StyledComponent<any, Theme>) => styled(c)`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 3rem;
  line-height: 1.333333333333333;
`;
export const Content = (c: StyledComponent<any, Theme>) => styled(c)`
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1.75rem;
  line-height: 1.714285714285714;
`;
