type IHistoryParams = {
  path: string;
  state?: object;
};

export type Subscriber = (history: IHistoryParams) => void;

export type TRouter = {
  navigate: (url: string, data?: object) => void;
  getState: () => { state: object; path: string };
  subscribe: (fn: Subscriber) => void;
  back: () => void;
  forward: () => void;
};
