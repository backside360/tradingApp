import axios from 'axios';
import { TAPI } from './types';

const tokenIex = 'sk_23710eca08ee41f89b91b025174949ad';
const finHubToken = 'bqmnedvrh5re7283ffp0';
const baseUrl = 'https://cloud.iexapis.com/stable';
const finHubUrl = 'https://finnhub.io/api/v1/';

const api: TAPI = {
  quotes: {
    getQuote(name) {
      return axios
        .get(`${finHubUrl}/quote?symbol=${name}&token=${finHubToken}`)
        .then((res) => res.data);
    },
  },
  metrics: {
    getMargin(name) {
      return axios
        .get(
          `${finHubUrl}/stock/metric?symbol=${name}&metric=margin&token=${finHubToken}`
        )
        .then((res) => res.data);
    },
  },
  company: {
    getProfile(name) {
      return axios
        .get(`${finHubUrl}/stock/profile2?symbol=${name}&token=${finHubToken}`)
        .then((res) => res.data);
    },
  },
};

export default api;
