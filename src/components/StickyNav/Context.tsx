import { createContext, Dispatch, SetStateAction } from 'react';

export interface StickyNavContext {
  open?: boolean;
  fixed?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const { Provider, Consumer } = createContext<StickyNavContext>({
  open: false,
  fixed: false
});

export { Provider, Consumer };
