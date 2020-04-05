export type TRouter = {
  navigate: (url: string, data?: object) => void;
  getState: () => { state: object; path: string };
};
