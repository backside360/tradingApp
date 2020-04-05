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
    }
  }
};

export default api;
