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

export interface IPreviousDayPrice {
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

export interface IMonthlyPrice {
  '1. open'?: string;
  '2. high'?: string;
  '3. low'?: string;
  '4. close'?: string;
  '5. volume'?: string;
}

export type TSTORE = {
  quoteSearch: ISearch[];
  quoteStore: IQuote;
  previousDayStore: IPreviousDayPrice;
  monthlyPriceStore: IMonthlyPrice;
  setQuoteStore: (data: IQuote) => IQuote;
  setPreviousDayPrice: (data: string) => Promise<IPreviousDayPrice>;
  setMonthlyPrice: (data: string) => Promise<IMonthlyPrice>;
};
