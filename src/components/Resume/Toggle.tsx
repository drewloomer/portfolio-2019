import React, { FC } from 'react';
import { Link } from '../Text';
import styled from '../../util/styled-components';

const StyledLink = styled(Link)<{ open: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  margin: ${p => (p.open ? '1.5rem 0' : '1.5rem 0 0')};
  padding: 0;
  text-decoration: underline;
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
        Hide Details <span aria-hidden="true"> ≪</span>
      </>
    ) : (
      <>
        Show Details<span aria-hidden="true"> ≫</span>
      </>
    )}
  </StyledLink>
);
