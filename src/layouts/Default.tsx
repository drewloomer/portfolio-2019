import React, { ReactNode, FC, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import StickyNav from '../components/StickyNav';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Crimson+Text|Raleway&display=swap');

html {
  font-size: 8px;
}

body {
  font-family: 'Raleway', sans-serif;
  font-size: 2rem;
  line-height: 1.5;
}
`;

const Main = styled.main`
  padding: 1rem;
`;

export interface LayoutProps {
  children: ReactNode;
}

const DefaultLayout: FC<LayoutProps> = ({ children }) => (
  <Fragment>
    <GlobalStyle />
    <Main>
      <StickyNav />
      {children}
    </Main>
  </Fragment>
);

export default DefaultLayout;
