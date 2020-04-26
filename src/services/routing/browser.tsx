import { TRouter, Subscriber } from './types';

const observers = new Set<Subscriber>();

const getState = () => ({
  state: window.history.state,
  path: window.location.pathname,
});

const notify = () => observers.forEach((callback) => callback(getState()));

export const router: TRouter = {
  navigate(url: string, data?: object) {
    window.history.pushState(data, '', url);
    notify();
  },
  getState,
  subscribe: (fn) => {
    observers.add(fn);
  },
  back: () => {
    window.history.back();
    notify();
  },
  forward: () => {
    window.history.forward();
    notify();
  },
};

window.onpopstate = () => {
  console.log('changed history');
  notify();
};
