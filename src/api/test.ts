import React from 'react';
import { TAPI } from './types';

const api: TAPI = {
  quotes: {
    getQuote: () => Promise.resolve({ symbol: 'APPL' }),
    getPreviousDay: () => Promise.resolve({ symbol: 'APPL' }),
    getQuoteA: () => Promise.resolve({ symbol: 'APPL' }),
    getCompany: () => Promise.resolve({ symbol: 'APPL' }),
    getMonthlyQuote: () => Promise.resolve({ symbol: 'APPL' }),
    getPrice: () => Promise.resolve({ number: 480 })
  },
  crypto: {},
  search: {
    getSearch: (fragment: string) =>
      Promise.resolve({
        bestMatches: [{ '1. symbol': 'APPL', '2. name': 'Apple Inc.' }]
      })
  }
};

export default api;
