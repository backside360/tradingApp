import { IQuote } from '../../entities/quotes/types';
import { ICompany } from '../../services/api/types';

export const mapQuotesFromApiToStore = (
  companies: Array<ICompany>
): Array<IQuote> =>
  companies.map((company) => ({
    name: company.name || '',
    exchange: company.exchange || '',
    marketCapitalization: company.marketCapitalization || 0,
    ticker: company.ticker || '',
  }));
