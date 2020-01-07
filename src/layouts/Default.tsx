import React, { ReactNode, FC, Fragment } from 'react';
import { Reset } from 'styled-reset';
import styled, {
  createGlobalStyle,
  ThemeProvider
} from '../util/styled-components';
import StickyNav from '../components/StickyNav/StickyNav';
import theme from '../config/theme';
import { BreakpointProvider } from '../util/breakpoint';
import Footer from '../components/Footer/Footer';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Crimson+Text|Raleway&display=swap');

html {
  font-size: 8px;
}

body {
  color: ${props => props.theme.colors.gray._150};
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
    <BreakpointProvider>
      <Fragment>
        <Reset />
        <GlobalStyle />
        <Main>
          <StickyNav />
          {children}
          <Footer />
        </Main>
      </Fragment>
    </BreakpointProvider>
  </ThemeProvider>
);

export default DefaultLayout;
