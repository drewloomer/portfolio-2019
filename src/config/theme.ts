export interface List<T = string> {
  [key: string]: T;
}

export interface Theme {
  colors: List<List>;
  fonts: List;
  shadows: List;
  padding: List;
}

const theme = (): Theme => ({
  colors: {
    gray: {
      _100: '#3B4045',
      _1000: '#fff'
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
});

export default theme;
