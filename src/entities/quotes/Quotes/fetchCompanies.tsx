import { ISearch, IQuote, IPreviousPrice } from '../Quotes/model';
import api from '../../../api/api';

export const fetchCo = (name: string): Promise<ISearch> => {
  return api.search.getSearch(name);
};

export const fetchQuote = async (name: string): Promise<IQuote> => {
  return await api.quotes.getQuote(name);
};

//@ts-ignore
export const fetchMothlyQuote = async (name: string): Promise => {
  return await api.quotes.getMonthlyQuote(name);
};

export const fetchPreviousDay = async (
  name: string
): Promise<IPreviousPrice> => {
  return await api.quotes.getPreviousDay(name);
};

//@ts-ignore
export const fetchPrice = async (name): Promise => {
  return await api.quotes.getPrice(name);
};
