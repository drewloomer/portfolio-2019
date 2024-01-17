import React, { FC, ComponentClass, HTMLAttributes } from 'react';
import styled from '../../util/styled-components';

import GoogleLogo from '../../assets/logo/google.svg';
import MicrosoftLogo from '../../assets/logo/microsoft.svg';
import CapitalOneLogo from '../../assets/logo/capital-one.svg';
import TargetLogo from '../../assets/logo/target.svg';
import SprintLogo from '../../assets/logo/sprint.svg';
import KraftLogo from '../../assets/logo/kraft.svg';
import ToyotaLogo from '../../assets/logo/toyota.svg';
import GMLogo from '../../assets/logo/gm.svg';
import JimmyJohnsLogo from '../../assets/logo/jjs.svg';
import FiveGuysLogo from '../../assets/logo/fiveguys.svg';
import SwaLogo from '../../assets/logo/swa.svg';
import SabreLogo from '../../assets/logo/sabre.svg';
import { breakpoint } from '../../util/breakpoint';
import { Breakpoint } from '../../config/theme';

export interface BrandsListProps extends HTMLAttributes<HTMLUListElement> {}

export interface BrandItem {
  text: string;
  logo: ComponentClass;
}

const items: BrandItem[] = [
  {
    text: 'Google',
    logo: GoogleLogo
  },
  {
    text: 'Microsoft',
    logo: MicrosoftLogo
  },
  {
    text: "Jimmy John's",
    logo: JimmyJohnsLogo
  },
  {
    text: 'CapitalOne',
    logo: CapitalOneLogo
  },
  {
    text: 'Target',
    logo: TargetLogo
  },
  {
    text: 'Sprint.js',
    logo: SprintLogo
  },
  {
    text: 'Five Guys',
    logo: FiveGuysLogo
  },
  {
    text: 'Kraft',
    logo: KraftLogo
  },
  {
    text: 'Toyota',
    logo: ToyotaLogo
  },
  {
    text: 'GM',
    logo: GMLogo
  },
  {
    text: 'Southwest',
    logo: SwaLogo
  },
  {
    text: 'Sabre',
    logo: SabreLogo
  }
];

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 1rem -0.75rem;
`;
const ListItem = styled.li`
  box-sizing: border-box;
  font-size: 1.5rem;
  padding: 0.75rem;
  width: 50%;

  ${breakpoint(Breakpoint.Medium)`
    width: 33.333333333%;
  `}
`;
const ListImage = styled.div`
  background-color: ${p => p.theme.colors.gray._900};
  position: relative;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  svg {
    height: auto;
    max-height: 10rem;
    max-width: 20rem;
    margin-bottom: 0.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    width: 85%;

    ${breakpoint(Breakpoint.Medium)`
      max-width: 15rem;
    `}
  }
`;

export const BrandsList: FC<BrandsListProps> = ({ ...props }) => (
  <List {...props}>
    {items.map(({ text, logo: Logo }) => (
      <ListItem title={text} key={text}>
        <ListImage>
          <Logo />
        </ListImage>
      </ListItem>
    ))}
  </List>
);
