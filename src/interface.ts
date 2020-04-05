import { TAPI } from './api/types';
import { IQuote } from './entities/quotes/types';
import { Menu } from './entities/menu';
import { TRouter } from './services/routing/types';
import { IObservableArray } from 'mobx';

export type TENV = {
  api: TAPI;
  store: {
    Quotes: IObservableArray<IQuote>;
    Menu: Menu;
  };
  router: TRouter;
};
