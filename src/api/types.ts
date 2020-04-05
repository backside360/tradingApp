export interface IQuoteResponse {
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

export type TAPI = {
  quotes: {
    getQuote: (name: string) => Promise<IQuoteResponse>;
  };
};
