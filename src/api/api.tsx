import axios from 'axios';
import React from 'react';

const tokenIex = 'sk_23710eca08ee41f89b91b025174949ad';
const tokenAplha = 'JLPQJV6Z7V17CO06';
const baseUrl = 'https://cloud.iexapis.com/stable';

interface IQuoteResponse {
  symbol?: string;
  companyName?: string;
  primaryExchange?: string;
  calculationPrice?: string;
  open?: number;
  openTime?: null;
  close?: null;
  closeTime?: null;
  high?: number;
  low?: number;
  latestPrice?: number;
  latestSource?: string;
  latestTime?: string;
  latestUpdate?: number;
  latestVolume?: null;
  iexRealtimePrice?: number;
  iexRealtimeSize?: number;
  iexLastUpdated?: number;
  delayedPrice?: null;
  delayedPriceTime?: null;
  extendedPrice?: null;
  extendedChange?: null;
  extendedChangePercent?: null;
  extendedPriceTime?: null;
  previousClose?: number;
  previousVolume?: number;
  change?: number;
  changePercent?: number;
  volume?: null;
  iexMarketPercent?: number;
  iexVolume?: number;
  avgTotalVolume?: number;
  iexBidPrice?: number;
  iexBidSize?: number;
  iexAskPrice?: number;
  iexAskSize?: number;
  marketCap?: number;
  peRatio?: number;
  week52High?: number;
  week52Low?: number;
  ytdChange?: number;
  lastTradeTime?: number;
  isUSMarketOpen?: boolean;
}

interface IMonthlyResponse {
  '1. open'?: string;
  '2. high'?: string;
  '3. low'?: string;
  '4. close'?: string;
  '5. volume'?: string;
}

interface IPriceResponse {
  number: number;
}

export interface IPreviousDayResponse {
  date?: string;
  open?: number;
  close?: number;
  high?: number;
  low?: number;
  volume?: number;
  uOpen?: number;
  uClose?: number;
  uHigh?: number;
  uLow?: number;
  uVolume?: number;
  change?: number;
  changePercent?: number;
  changeOverTime?: number;
  symbol?: string;
}

export interface ISearchResponse {
  symbol?: string;
  name?: string;
  type?: string;
  region?: string;
  marketOpen?: string;
  marketClose?: string;
  timezone?: string;
  currency?: string;
  matchScore?: string;
  bestMatches?: string[];
}

// TODO выделить в отдельный файл
type TAPI = {
  quotes: {
    getQuote: (name: string) => Promise<IQuoteResponse>;
    getQuoteA: any;
    getCompany: any;
    getMonthlyQuote: any;
    getPreviousDay: (name: string) => Promise<IPreviousDayResponse>;
    getPrice: (name: string) => Promise<IPriceResponse>;
  };
  crypto: {};
  search: {
    getSearch: (fragment: string) => Promise<ISearchResponse>;
  };
};

const api: TAPI = {
  quotes: {
    getQuote(name) {
      return axios
        .get(`${baseUrl}/stock/${name}/quote?token=${tokenIex}`)
        .then(res => res.data);
    },
    getQuoteA(symbol: string) {
      return axios
        .get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&${symbol}&interval=5min&outputsize=full&apikey=JLPQJV6Z7V17CO06`
        )
        .then(res => res.data);
    },
    getCompany(symbol: string) {
      return axios
        .get(
          `https://cloud.iexapis.com/stable/stock/${symbol}/company?token=${tokenIex}`
        )
        .then(res => res.data);
    },
    getMonthlyQuote(symbol: string) {
      return axios
        .get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=full&apikey=${tokenAplha}`
        )
        .then(res => res.data);
    },
    getPreviousDay(name: string) {
      return axios
        .get(`${baseUrl}/stock/${name}/previous?token=${tokenIex}`)
        .then(res => res.data);
    },
    getPrice(name: string) {
      return axios
        .get(`${baseUrl}/stock/${name}/price?token=${tokenIex}`)
        .then(res => res.data);
    }
  },
  crypto: {
    getCryptoPrice: (symbol: string) =>
      axios
        .get(
          `https://cloud.iexapis.com/stable/crypto/${symbol}/price?token=${tokenIex}`
        )
        .then(res => res.data)
  },
  search: {
    getSearch(fragment: string) {
      return axios
        .get(
          `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${fragment}&apikey=${tokenAplha}`
        )
        .then(res => res.data);
    }
  }
};

export default api;

export const ApiContext = React.createContext(api);
