import pose from 'popmotion-pose';
import { offset } from './element-offset';

const el = typeof document !== 'undefined' ? document.scrollingElement : null;

export const createScrollTo = ({
  duration = 300
}: {
  el?: HTMLElement;
  duration?: number;
} = {}) => {
  if (!el) return () => {};

  const poser = pose(el, {
    scrollTo: {
      scrollTop: ({ top }: { top: number }) => top,
      transition: {
        duration
      }
    }
  });

  return (link: string) => {
    const el = document.querySelector<HTMLElement>(link);
    if (el) {
      const { top } = offset(el);
      poser.set('scrollTo', { top });
    }
  };
};
