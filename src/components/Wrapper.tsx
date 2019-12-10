import styled from '../util/styled-components';
import { Breakpoint } from '../config/theme';
import { breakpoint } from '../util/breakpoint';

export enum WrapperType {
  Light = 'light',
  Dark = 'dark'
}

export interface WrapperProps {
  type?: WrapperType;
}

export const Wrapper = styled.div<WrapperProps>`
  background-color: ${props =>
    props.type === WrapperType.Dark
      ? props.theme.colors.gray._900
      : 'transparent'};
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 86rem;
  padding: ${props => props.theme.padding.sm};

  ${breakpoint(Breakpoint.Medium)`
  padding: ${props => props.theme.padding.md};
  `}
`;

export default Wrapper;
