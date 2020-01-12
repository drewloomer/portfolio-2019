import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

export interface PageHeadProps {
  title?: string;
}
export const PageHead: FC<PageHeadProps> = ({
  title = 'Drew Loomer | Front-End Architect'
}) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
  );
};
