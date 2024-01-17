import React, { FC } from 'react';
import { Link } from '../Text';
import styled from '../../util/styled-components';

const StyledLink = styled(Link)<{ open: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  margin: ${p => (p.open ? '1rem 0' : '1rem 0 0')};
  padding: 0;
  transition: margin 100ms;
`;

export const Toggle: FC<{ open: boolean; setOpen: (_: boolean) => void }> = ({
  open,
  setOpen
}) => (
  <StyledLink
    as="button"
    open={open}
    onClick={() => setOpen(!open)}
    aria-hidden="true"
  >
    {open ? (
      <>
        Hide Details <span aria-hidden="true">⬆</span>
      </>
    ) : (
      <>
        Show Details <span aria-hidden="true">⬇</span>
      </>
    )}
  </StyledLink>
);
