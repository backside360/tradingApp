import { IQuote } from '../../entities/quotes/types';
import { IQuoteResponse } from '../../api/types';

export const mapQuotesFromApiToStore = (
  companies: Array<IQuoteResponse>
): Array<IQuote> =>
  companies.map(company => ({
    name: company.companyName || '',
    exchange: company.primaryExchange || '',
    latestPrice: company.latestPrice || 0,
    symbol: company.symbol || ''
  }));
