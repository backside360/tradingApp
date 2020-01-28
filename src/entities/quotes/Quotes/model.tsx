import { observable, computed, toJS } from 'mobx';
import {
  fetchCo,
  fetchQuote,
  fetchPreviousDay,
  fetchPrice,
  fetchMothlyQuote
} from './fetchCompanies';

export interface ISearch {
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

export interface IQuote {
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

export interface IPreviousPrice {
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

export default class QuoteStore {
  @observable quoteSearch: ISearch[] = [];
  @observable quoteStore: IQuote = {};
  @observable previousDayStore: IPreviousPrice = {};
  @observable monthlyPriceStore = {};

  setQuoteStore = async (data: string) => {
    this.quoteStore = await fetchQuote(data);
  };
  resetQuoteStore = () => {
    this.quoteStore = {};
  };

  setPreviousDayPrice = async (data: string) => {
    this.previousDayStore = await fetchPreviousDay(data);
  };

  setMonthlyPrice = async (data: string) => {
    const monthlyData = await fetchMothlyQuote(data);
    this.monthlyPriceStore = monthlyData['Time Series (Daily)'];
  };

  @computed get getPreviousDay() {
    if (this.quoteStore.latestPrice) {
      //@ts-ignore
      return this.previousDayStore.open > this.quoteStore.latestPrice
        ? true
        : false;
    }

    return null;
  }

  // getPrice = async (name: string) => {
  //   this.previousDayStore = await fetchPrice(name);
  // };
}
