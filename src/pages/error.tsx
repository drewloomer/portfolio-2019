import React, { FC } from 'react';
import DefaultLayout from '../layouts/Default';
import { Link, Heading, Content } from '../components/Text';
import styled from '../util/styled-components';

const H1 = styled(Heading)`
  margin-top: 10rem;
  text-align: center;
`;
const P = styled(Content)`
  text-align: center;
`;

const Page: FC = () => {
  return (
    <DefaultLayout hideNav={true}>
      <H1>Uh oh. Something went wrong.</H1>
      <P>
        <Link href="#" onClick={() => window.history.back()}>
          Try going back.
        </Link>
      </P>
    </DefaultLayout>
  );
};

export default Page;
