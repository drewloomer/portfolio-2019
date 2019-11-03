import { breakpoint } from './breakpoint';

describe('Breakpoint Utility', () => {
  it('should target a minimum breakpoint', () => {
    const result = breakpoint(400)`asdf`({});
    expect(result).toContain('@media (min-width: 400px) { asdf }');
  });

  it('should target a range of breakpoints', () => {
    const result = breakpoint(400, 600)`asdf`({});
    expect(result).toContain(
      '@media (min-width: 400px and max-width: 599px) { asdf }'
    );
  });

  it('should parse props', () => {
    const result = breakpoint(400, 600)`display: ${p =>
      p.bool ? 'block' : 'none'}; color: ${'red'};`({ bool: false });
    const result2 = breakpoint(400, 600)`display: ${p =>
      p.bool ? 'block' : 'none'};`({ bool: true });
    expect(result).toContain(
      '@media (min-width: 400px and max-width: 599px) { display: none; color: red; }'
    );
    expect(result2).toContain(
      '@media (min-width: 400px and max-width: 599px) { display: block; }'
    );
  });
});
