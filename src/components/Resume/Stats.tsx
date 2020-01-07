import React, { FC } from 'react';
import styled from '../../util/styled-components';
import { formatShortDate } from './format-date';

export interface StatsProps {
  company?: string;
  location?: string;
  startDate?: Date;
  endDate?: Date;
}

const StatsList = styled.dl`
  color: ${p => p.theme.colors.blue._500};
  margin: 1rem -0.25rem;
`;

const StatsTerm = styled.dt`
  height: 0;
  overflow: hidden;
  position: absolute;
  visibility: hidden;
  width: 0;
`;

const StatsDetail = styled.dd`
  display: inline-block;
  font-size: 1.25rem;
  line-height: 1.6;
  padding: 0 0.25rem;

  &:nth-child(2) {
    &::after {
      content: '|';
      display: inline-block;
      margin-left: 0.5rem;
    }
  }

  &:nth-child(6) {
    display: block;
  }
`;

export const Stats: FC<StatsProps> = ({
  company,
  location,
  startDate,
  endDate
}) => {
  return (
    <StatsList>
      <StatsTerm>Company</StatsTerm>
      <StatsDetail>{company}</StatsDetail>
      <StatsTerm>Location</StatsTerm>
      <StatsDetail>{location}</StatsDetail>
      <StatsTerm>Duration</StatsTerm>
      <StatsDetail>
        <time dateTime={startDate.toISOString()}>
          {formatShortDate(startDate)}
        </time>
        {endDate ? (
          <time dateTime={endDate.toISOString()}>
            - {formatShortDate(endDate)}
          </time>
        ) : (
          ' - Present'
        )}
      </StatsDetail>
    </StatsList>
  );
};
