import { TRouter } from './types';

export const router: TRouter = {
  navigate(url: string, data?: object) {
    window.history.pushState(data, '', url);
  },
  getState: () => ({
    state: window.history.state,
    path: window.location.pathname
  })
};
