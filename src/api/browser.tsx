import axios from 'axios';
import { TAPI } from './types';

const tokenIex = 'sk_23710eca08ee41f89b91b025174949ad';
const tokenAplha = 'JLPQJV6Z7V17CO06';
const baseUrl = 'https://cloud.iexapis.com/stable';

const api: TAPI = {
  quotes: {
    getQuote(name) {
      return axios
        .get(`${baseUrl}/stock/${name}/quote?token=${tokenIex}`)
        .then(res => res.data);
    },
    getQuoteA(symbol: string) {
      return axios
        .get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&${symbol}&interval=5min&outputsize=full&apikey=JLPQJV6Z7V17CO06`
        )
        .then(res => res.data);
    },
    getMonthlyQuote(symbol: string) {
      return axios
        .get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${tokenAplha}`
        )
        .then(res => res.data);
    },
    getPreviousDay(name: string) {
      return axios
        .get(`${baseUrl}/stock/${name}/previous?token=${tokenIex}`)
        .then(res => res.data);
    },
    getPrice(name: string) {
      return axios
        .get(`${baseUrl}/stock/${name}/price?token=${tokenIex}`)
        .then(res => res.data);
    }
  },
  crypto: {
    getCryptoPrice: (symbol: string) =>
      axios
        .get(
          `https://cloud.iexapis.com/stable/crypto/${symbol}/price?token=${tokenIex}`
        )
        .then(res => res.data)
  },
  search: {
    getSearch(fragment: string) {
      return axios
        .get(
          `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${fragment}&apikey=${tokenAplha}`
        )
        .then(res => res.data);
    }
  }
};

export default api;
