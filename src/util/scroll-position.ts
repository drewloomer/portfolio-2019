import {
  useState,
  useLayoutEffect,
  MutableRefObject,
  useEffect,
  DependencyList,
  Dispatch,
  SetStateAction
} from 'react';

/**
 * Track the current scroll position
 */
export const useScrollPosition = (
  onChange: (x: number, y: number) => void = () => {},
  deps: DependencyList = []
) => {
  const [[x, y], setPosition] =
    typeof window !== 'undefined'
      ? useState([window.scrollX, window.scrollY])
      : useState([0, 0]);
  const check = (): void => {
    onChange(window.scrollX, window.scrollY);
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

/**
 * Track the dimensions of a reference element
 */
export const useRefDimensions = (
  ref: MutableRefObject<HTMLElement>,
  deps: DependencyList = []
) => {
  const [[width, height], setDimensions] = useState([0, 0]);
  useLayoutEffect(() => {
    setDimensions([ref.current.clientWidth, ref.current.clientHeight]);
  }, deps);
  return [width, height];
};

/**
 * Monitors scrolling on the window to see if the user has scrolled backwards
 * @todo: should allow for a couple pixels of downward movement after scrolled back
 */
export const useScrolledBack = (deps: DependencyList = []) => {
  const [scrollHistory, setScrollHistory] = useState<number[]>([]);
  const [isScrolledBack, setIsScrolledBack] = useState<boolean>();
  const [_, y] = useScrollPosition(undefined, deps);
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

/**
 * Monitors scrolling on the window and set fixed to true if the user is scrolling back up the page
 * Allows for the fixed value to be overridden until scrolling starts again by calling setClearFixed
 */
export const useFixedOnScrollBack = (
  ref: MutableRefObject<HTMLElement>
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [clearFixed, setClearFixed] = useState(false);
  const [_, y] = useScrollPosition(() => setClearFixed(false));
  const [__, height] = useRefDimensions(ref, [y]);
  const scrolledBack = useScrolledBack();
  return [!clearFixed && y > height && scrolledBack, setClearFixed];
};
