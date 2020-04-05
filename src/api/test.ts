import { TAPI } from './types';

const api: TAPI = {
  quotes: {
    getQuote: () => Promise.resolve({ symbol: 'APPL' })
  }
};

export default api;
