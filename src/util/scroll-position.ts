import React, {
  FC,
  useState,
  useLayoutEffect,
  useRef,
  MutableRefObject,
  useEffect,
  DependencyList
} from 'react';

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

// @todo: should allow for a couple pixels of downward movement after scrolled back
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
