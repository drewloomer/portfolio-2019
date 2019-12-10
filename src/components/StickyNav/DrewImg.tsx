import React, { FC } from 'react';
import styled from '../../util/styled-components';
import Drew from '../Drew';
import { Breakpoint } from '../../config/theme';
import { breakpoint } from '../../util/breakpoint';
import { Consumer, StickyNavContext } from './Context';

export const StyledDrew = styled(Drew)<StickyNavContext>`
  height: 7rem;
  width: 7rem;

  ${breakpoint(Breakpoint.Small, Breakpoint.Medium)`
    height: ${p => (p.open || p.fixed ? '4rem' : '7rem')};
    ${p => (p.fixed ? 'transition: none;' : '')}
    width: ${p => (p.open || p.fixed ? '4rem' : '7rem')};
  `}

  ${breakpoint(Breakpoint.Medium)`
    visibility: hidden;
  `}

  ${breakpoint(Breakpoint.Large)`
    display: none;
  `}
`;

export const DrewImg: FC = () => (
  <Consumer>{({ ...props }) => <StyledDrew {...props} />}</Consumer>
);
