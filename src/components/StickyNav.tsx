import React, {
  FC,
  useState,
  useLayoutEffect,
  useRef,
  MutableRefObject,
  useEffect,
  DependencyList
} from 'react';
import styled, { keyframes, css, ThemeProps } from '../util/styled-components';
import StickyNavToggle from './StickyNavToggle';
import StickyNavMenu, { NavItem } from './StickyNavMenu';
import Drew from './Drew';
import Briefcase from '../assets/icon/briefcase.svg';
import Contact from '../assets/icon/contact.svg';
import LinkedIn from '../assets/icon/linkedin.svg';
import Twitter from '../assets/icon/twitter.svg';
import GitHub from '../assets/icon/github.svg';
import Medium from '../assets/icon/medium.svg';
import { Breakpoint, Theme } from '../config/theme';
import { breakpoint } from '../util/breakpoint';

export interface StickyNavProps {}

const items: NavItem[] = [
  {
    text: 'Resume',
    icon: Briefcase,
    link: '#resume'
  },
  {
    text: 'Contact',
    icon: Contact,
    link: '#contact'
  },
  {
    text: 'LinkedIn',
    icon: LinkedIn,
    link: 'https://www.linkedin.com/in/drewloomer/'
  },
  {
    text: 'Twitter',
    icon: Twitter,
    link: 'https://twitter.com/drewloomer'
  },
  {
    text: 'GitHub',
    icon: GitHub,
    link: 'https://github.com/drewloomer'
  },
  {
    text: 'Medium',
    icon: Medium,
    link: 'https://medium.com/@drewloomer'
  }
];
const Nav = styled.nav<{ open: boolean; fixed: boolean }>`
  ${breakpoint(Breakpoint.Small, Breakpoint.Medium)`
    ${props =>
      props.open || props.fixed
        ? `
      padding-bottom: 13.5rem;
    `
        : ``};
  `}
`;
const DrewImg = styled(Drew)<{ open: boolean; fixed: boolean }>`
  height: ${p => (p.open || p.fixed ? '4rem' : '7rem')};
  ${p => (p.fixed ? 'transition: none;' : '')}
  width: ${p => (p.open || p.fixed ? '4rem' : '7rem')};
  ${breakpoint(Breakpoint.Medium)`
    visibility: hidden;
  `}
`;
const StyledToggle = styled(StickyNavToggle)`
  justify-self: flex-end;
  margin: -2rem;
`;
const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
`;
const animateWrapper = (_: ThemeProps<Theme>) => css`
  ${slideIn} 500ms ease-out;
`;
const FixedWrapper = styled.div<{ open: boolean; fixed: boolean }>`
  ${breakpoint(Breakpoint.Small, Breakpoint.Medium)`
    animation: ${animateWrapper};
    background: transparent;
    box-shadow: ${props =>
      props.open || !props.fixed ? `none` : props.theme.shadows.box};
    width: 100%;
    will-change: box-shadow;
    z-index: 100;

    ${props =>
      props.open || props.fixed
        ? `
      animation: ${animateWrapper};
      animation-delay: 1000ms;
      background: ${props.theme.colors.gray._1000};
      left: 0;
      position: fixed;
      top: 0;
    `
        : ``};
  `}
`;
const BannerWrapper = styled.div<{ open: boolean; fixed: boolean }>`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 86rem;
  padding: 3rem;
  position: relative;
  transition: padding 100ms ease-out;
  will-change: padding;
  z-index: 5;

  ${breakpoint(0, Breakpoint.Small)`
    padding: ${props =>
      props.open || props.fixed
        ? `1rem ${props.theme.padding.sm} 1rem ${props.theme.padding.sm}`
        : `${props.theme.padding.sm}`};
    width: 100%;
  `}
`;

export const useScrollPosition = (deps: DependencyList = []) => {
  const [[x, y], setPosition] = useState([window.scrollX, window.scrollY]);
  const check = (): void => {
    setPosition([window.scrollX, window.scrollY]); // @todo: make this dynamic
  };
  useLayoutEffect(() => {
    document.addEventListener('scroll', check);
    return () => {
      document.removeEventListener('scroll', check);
    };
  }, deps);
  return [x, y];
};

export const useRefDimensions = (
  ref: MutableRefObject<HTMLElement>,
  deps: DependencyList
) => {
  const [[width, height], setDimensions] = useState([0, 0]);
  useLayoutEffect(() => {
    setDimensions([ref.current.clientWidth, ref.current.clientHeight]);
  }, deps);
  return [width, height];
};

export const useScrolledBack = (deps: DependencyList = []) => {
  const [scrollHistory, setScrollHistory] = useState<number[]>([]);
  const [isScrolledBack, setIsScrolledBack] = useState<boolean>();
  const [_, y] = useScrollPosition(deps);
  useEffect(() => {
    setScrollHistory(scrollHistory.concat([y]).slice(-5));
    setIsScrolledBack(
      scrollHistory.reverse().reduce((acc: boolean, cur, i, arr) => {
        const next = arr[i + 1];
        if (next === undefined) return acc;
        return acc !== false && cur < next;
      }, null)
    );
  }, [y, ...deps]);
  return isScrolledBack;
};

export const useFixedOnScrollBack = (
  ref: MutableRefObject<HTMLElement>
): boolean => {
  const [_, y] = useScrollPosition();
  const [__, height] = useRefDimensions(ref, [y]);
  const scrolledBack = useScrolledBack();
  return y > height && scrolledBack;
};

const StickyNav: FC<StickyNavProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const fixed = useFixedOnScrollBack(ref);
  return (
    <Nav open={open} fixed={fixed}>
      <FixedWrapper open={open} fixed={fixed} ref={ref}>
        <BannerWrapper open={open} fixed={fixed}>
          <DrewImg open={open} fixed={fixed} />
          <StyledToggle
            open={open}
            onClick={() => setOpen(!open)}
            id="menuToggle"
            aria-haspopup="true"
            aria-controls="navMenu"
          />
          <StickyNavMenu
            items={items}
            open={open}
            role="menu"
            id="navMenu"
            aria-labelledby="menuToggle"
          />
        </BannerWrapper>
      </FixedWrapper>
    </Nav>
  );
};

export default StickyNav;
