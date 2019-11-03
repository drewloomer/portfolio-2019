export interface List<T = string> {
  [key: string]: T;
}

export enum Breakpoint {
  Small = 0,
  Medium = 688,
  Large = 1280
}

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
      _700: '#ccc',
      _1000: '#fff'
    },
    blue: {
      _400: '#496E9B'
    }
  },
  fonts: {
    primary: "'Raleway', sans-serif",
    secondary: "'Crimson Text', serif"
  },
  padding: {
    sm: '3rem'
  },
  shadows: {
    box: '0 1px 3px 0 rgba(172,172,172,0.50)'
  }
};

export default theme;
