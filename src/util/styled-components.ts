import * as styledComponents from 'styled-components';
import { ThemeProps, Keyframes } from 'styled-components';

import { Theme } from '../config/theme';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ThemeProps,
  Keyframes
};
export default styled;
