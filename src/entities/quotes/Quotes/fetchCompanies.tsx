import { IQuote, IPreviousPrice } from './browser';
import { ISearchResponse, IMonthlyResponse } from '../../../api/types';
import api from '../../../api/browser';

export const fetchCo = (name: string): Promise<ISearchResponse> => {
  return api.search.getSearch(name);
};

export const fetchQuote = async (name: string): Promise<IQuote> => {
  return await api.quotes.getQuote(name);
};

//@ts-ignore
export const fetchMothlyQuote = async (name: string): Promise  => {
  return await api.quotes.getMonthlyQuote(name);
};

export const fetchPreviousDay = async (
  name: string
): Promise<IPreviousPrice> => {
  return await api.quotes.getPreviousDay(name);
};
