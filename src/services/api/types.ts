export interface IQuoteResponse {
  c: number;
  h: number;
  l: number;
  o: number;
  pc: number;
  t: number;
}

export interface IMargin {
  metric: {
    'freeOperatingCashFlow/revenue5Y': number;
    'freeOperatingCashFlow/revenueTTM': number;
    grossMargin5Y: number;
    grossMarginAnnual: number;
    grossMarginTTM: number;
    'netProfitMargin%Annual': number;
    netProfitMargin5Y: number;
    netProfitMarginTTM: number;
    operatingMargin5Y: number;
    operatingMarginAnnual: number;
    operatingMarginTTM: number;
    pretaxMargin5Y: number;
    pretaxMarginAnnual: number;
    pretaxMarginTTM: number;
  };
}

export interface ICompany {
  country: string;
  currency: string;
  exchange: string;
  ipo: string;
  marketCapitalization: number;
  name: string;
  phone: string;
  shareOutstanding: number;
  ticker: string;
  weburl: string;
  logo: string;
  finnhubIndustry: string;
}
