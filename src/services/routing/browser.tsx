import { TRouter } from './types';

/**
 * Надо как-то сравнить текущий path с измененным
 */
export const router: TRouter = {
  navigate(url: string, data?: object) {
    window.history.pushState(data, '', url);
  },
  getState: () => ({
    state: window.history.state,
    path: window.location.pathname
  })
};
