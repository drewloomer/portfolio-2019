import React, { FC, useState } from 'react';
import styled from '../../util/styled-components';
import { SubHeading } from '../Text';
import { Toggle } from './Toggle';
import { Stats } from './Stats';
import { Details } from './Details';

const PositionWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export interface ResumePosition {
  title?: string;
  company?: string;
  location?: string;
  startDate?: Date;
  endDate?: Date;
  details?: string[];
}

export interface PositionProps extends ResumePosition {
  className?: string;
}

export const Position: FC<PositionProps> = ({
  title,
  company,
  location,
  startDate,
  endDate,
  details,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  return (
    <PositionWrapper {...rest}>
      <Stats
        company={company}
        location={location}
        startDate={startDate}
        endDate={endDate}
      />
      <SubHeading as="h3">{title}</SubHeading>
      {details.length ? <Toggle open={open} setOpen={setOpen} /> : null}
      {details.length ? <Details content={details} open={open} /> : null}
    </PositionWrapper>
  );
};
