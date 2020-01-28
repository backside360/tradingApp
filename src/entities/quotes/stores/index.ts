import React from 'react';

import QuoteStore from '../Quotes/model';

const storeContext = React.createContext({
  QuoteStore: new QuoteStore()
});

export const useStores = () => React.useContext(storeContext);
