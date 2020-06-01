import { IQuote } from '../../entities/quotes/types';
import { IQuoteResponse, ICompany } from '../../api/types';

export const mapQuotesFromApiToStore = (
  companies: Array<ICompany>
): Array<IQuote> =>
  companies.map((company) => ({
    name: company.name || '',
    exchange: company.exchange || '',
    marketCapitalization: company.marketCapitalization || 0,
    ticker: company.ticker || '',
  }));
