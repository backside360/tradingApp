import axios from 'axios';
import { IQuoteResponse, IMargin, ICompany } from './types';

const finHubToken = 'bqmnedvrh5re7283ffp0';
const finHubUrl = 'https://finnhub.io/api/v1/';

export const api = {
  quotes: {
    getQuote(name: string) {
      return axios
        .get<IQuoteResponse>(`${finHubUrl}/quote?symbol=${name}&token=${finHubToken}`)
        .then((res) => res.data);
    },
  },
  metrics: {
    getMargin(name: string) {
      return axios
        .get<IMargin>(
          `${finHubUrl}/stock/metric?symbol=${name}&metric=margin&token=${finHubToken}`
        )
        .then((res) => res.data);
    },
  },
  company: {
    getProfile(name: string) {
      return axios
        .get<ICompany>(`${finHubUrl}/stock/profile2?symbol=${name}&token=${finHubToken}`)
        .then((res) => res.data);
    },
  },
};
