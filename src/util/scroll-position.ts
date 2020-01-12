import {
  useState,
  useLayoutEffect,
  MutableRefObject,
  useEffect,
  DependencyList,
  Dispatch,
  SetStateAction
} from 'react';
import { offset } from './element-offset';

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
    setPosition([window.scrollX, window.scrollY]);
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
  const scrollHistory: number[] = [];
  // const [scrollHistory, setScrollHistory] = useState<number[]>([]);
  // const [isScrolledBack, setIsScrolledBack] = useState<boolean>();
  // useEffect(() => {
  //   setScrollHistory(scrollHistory.concat([y]).slice(-5));
  //   setIsScrolledBack(
  //     scrollHistory.reverse().reduce((acc: boolean, cur, i, arr) => {
  //       const next = arr[i + 1];
  //       if (next === undefined) return acc;
  //       return acc !== false && cur < next;
  //     }, null)
  //   );
  // }, [y, ...deps]);
  return [
    (y: number) => {
      // scrollHistory.push(y);
      return false; /*scrollHistory.reverse().reduce((acc: boolean, cur, i, arr) => {
        const next = arr[i + 1];
        if (next === undefined) return acc;
        return acc !== false && cur < next;
      }, null);*/
    }
  ];
};

enum ScrollDirection {
  Up = 0,
  Down = 1
}

// How far up or down from the pivot point does the user have to scroll for a change to be considered?
const scrollGap = 150;

const monitorScrollback = (
  el: MutableRefObject<HTMLElement>,
  onChange: Dispatch<SetStateAction<boolean>>,
  onScroll: Dispatch<SetStateAction<number>>
) => {
  // Scroll position from the last time calculate was run
  let lastScrollY = 0;

  // Scroll direction from the last time calculate was run
  let lastScrollDirection: ScrollDirection = null;

  // Are we currently in a scrolled back state?
  let hasScrolledBack: boolean = null;

  // The Y coordinate of the last time the direction of the scroll changed
  let pivotY = 0;

  // Calculate if the user has scrolled back
  const calculate = (): void => {
    // How far down the page have we scrolled?
    const { scrollY } = window;

    // Are we scrolling up, down or not at all?
    const scrollDirection =
      scrollY === lastScrollY
        ? lastScrollDirection
        : scrollY > lastScrollY
        ? ScrollDirection.Down
        : ScrollDirection.Up;

    // If we've changed direction, store where we last pivoted so we can determine when we go beyond the minimum gap
    // needed to consider us scrolled back or not
    if (scrollDirection !== lastScrollDirection) {
      pivotY = scrollY;
    }

    // If the element we're monitoring isn't off the screen yet, don't consider us scrolled back
    if (scrollY < offset(el.current).top + el.current.clientHeight) {
      onChange((hasScrolledBack = null));
    }
    // If we're not considered scrolling back but the current scrollY is less than the pivot point, now we should be scrolled back
    else if (!hasScrolledBack && scrollY < pivotY - scrollGap) {
      onChange((hasScrolledBack = true));
    }
    // If we're considered scrolling back but the current scrollY is greater than the pivot point, now we should not be scrolled back
    else if (hasScrolledBack && scrollY > pivotY + scrollGap) {
      onChange((hasScrolledBack = false));
    }

    // Store some values for the next time through
    lastScrollY = scrollY;
    lastScrollDirection = scrollDirection;

    // Run the onScroll callback
    onScroll(scrollY);
  };

  // Listen for scroll and resize
  window.addEventListener('scroll', calculate);
  window.addEventListener('resize', calculate);

  // Calculate now to get an initial value
  calculate();

  return () => {
    window.removeEventListener('scroll', calculate);
    window.removeEventListener('resize', calculate);
  };
};

/**
 * Monitors scrolling on the window and set fixed to true if the user is scrolling back up the page
 * Allows for the fixed value to be overridden until scrolling starts again by calling setClearFixed
 */
export const useFixedOnScrollBack = (
  el: MutableRefObject<HTMLElement>
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [clearFixed, setClearFixed] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  useEffect(
    () =>
      monitorScrollback(
        el,
        hasScrolledBack => setIsFixed(hasScrolledBack),
        () => !clearFixed && setClearFixed(false)
      ),
    []
  );
  return [!clearFixed && isFixed, setClearFixed];
};
