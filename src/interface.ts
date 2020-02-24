import { TSetTimeout } from './timers/types';
import { TAPI } from './api/types';
import QuoteStore from './entities/quotes/Quotes/browser';

export type TENV = {
  api: TAPI;
  setTimeout: TSetTimeout;
  store: {
    QuoteStore: QuoteStore;
  };
};
