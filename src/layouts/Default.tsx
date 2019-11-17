import React, { ReactNode, FC, Fragment } from 'react';
import { Reset } from 'styled-reset';
import styled, {
  createGlobalStyle,
  ThemeProvider
} from '../util/styled-components';
import StickyNav from '../components/StickyNav';
import theme from '../config/theme';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Crimson+Text|Raleway&display=swap');

html {
  font-size: 8px;
}

body {
  font-family: ${props => props.theme.fonts.primary};
  font-size: 2rem;
  line-height: 1.5;
  margin: 0;
  padding: 0;
}
`;

const Main = styled.main``;

export interface LayoutProps {
  children: ReactNode;
}

const DefaultLayout: FC<LayoutProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Reset />
      <GlobalStyle />
      <Main>
        <StickyNav />
        {children}
      </Main>
    </Fragment>
  </ThemeProvider>
);

export default DefaultLayout;
