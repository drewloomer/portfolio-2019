export interface List<T = string> {
  [key: string]: T;
}

export enum Breakpoint {
  Small = 0,
  Medium = 688,
  Large = 1280
}

export const breakpoints = [
  Breakpoint.Small,
  Breakpoint.Medium,
  Breakpoint.Large
];

export interface Theme {
  colors: List<List>;
  fonts: List;
  padding: List;
  shadows: List;
}

const theme: Theme = {
  colors: {
    gray: {
      _100: '#3B4045',
      _150: '#4A535E',
      _200: '#586678',
      _400: '#979797',
      _700: '#ccc',
      _900: '#fbfbfb',
      _1000: '#fff'
    },
    blue: {
      _400: '#496E9B',
      _500: '#6F7780'
    }
  },
  fonts: {
    primary: "'Raleway', sans-serif",
    secondary: "'Crimson Text', serif"
  },
  padding: {
    sm: '3rem',
    md: '6rem'
  },
  shadows: {
    box: '0 1px 3px 0 rgba(172,172,172,0.50)'
  }
};

export default theme;
