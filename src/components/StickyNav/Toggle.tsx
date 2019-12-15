import React, { FC, ButtonHTMLAttributes } from 'react';
import styled from '../../util/styled-components';
import { Consumer } from './Context';
import { breakpoint } from '../../util/breakpoint';
import { Breakpoint } from '../../config/theme';

export interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  controls?: string;
  className?: string;
  open?: boolean;
}

const Button = styled.button<ToggleProps>`
  background: transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
  padding: 0;
  position: relative;
  z-index: 5;

  span {
    align-items: center;
    display: flex;
    height: 6rem;
    justify-content: center;
    position: relative;
    transform: rotate(0deg);
    transition: transform 100ms ease-out 100ms;
    width: 6rem;
  }

  i {
    flex: 0 0 auto;

    & {
      background: ${props => props.theme.colors.gray._100};
      border-radius: 0.5rem;
      display: block;
      height: 1rem;
      position: relative;
      transition: transform 100ms ease-out 100ms, opacity 100ms linear 100ms;
      width: 1rem;
    }

    &:nth-child(1) {
      transform: translateX(-0.25rem);
    }

    &:nth-child(3) {
      transform: translateX(0.25rem);
    }
  }

  ${props =>
    props.open &&
    `
    span {
      transform: rotate(135deg) scale(.5);
    }

    i {
      transition: height 100ms ease-out, width 100ms ease-out, transform 100ms ease-out;
      transition-delay: 100ms;

      &:nth-child(1) {
        transform: translate(3.5rem, 0);
        width: 6rem;
      }

      &:nth-child(3) {
        transform: rotate(90deg) translate(0, 3.5rem);
        width: 6rem;
      }
    }
  `}

  ${breakpoint(Breakpoint.Large)`
    display: none;
  `}
`;

export const Toggle: FC<ToggleProps> = props => {
  return (
    <Consumer>
      {({ open, setOpen }) => (
        <Button
          {...props}
          open={open}
          onClick={() => setOpen(!open)}
          title={`${open ? 'Close' : 'Open'} Main Menu`}
        >
          <span>
            <i />
            <i />
            <i />
          </span>
        </Button>
      )}
    </Consumer>
  );
};
