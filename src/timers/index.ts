import { TSetTimeout } from './types';

export const setTimeout: TSetTimeout = (cb, timeout) => {
  setTimeout(cb, timeout);
};
