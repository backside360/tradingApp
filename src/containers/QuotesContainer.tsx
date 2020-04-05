import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useInjection } from '../services/Injection';
import { mapQuotesFromApiToStore } from '../entities/quotes/mapping';

interface IProps {
  component: React.ElementType;
}

const QuotesContainer: React.FC<IProps> = ({ component: List }) => {
  const [loading, setLoading] = useState(true);
  const {
    api,
    store: { Quotes }
  } = useInjection();

  React.useEffect(() => {
    if (!Quotes.length) {
      Promise.all([
        api.quotes.getQuote('AAPL'),
        api.quotes.getQuote('GOOGL'),
        api.quotes.getQuote('TSLA')
      ]).then(companies => {
        Quotes.push(...mapQuotesFromApiToStore(companies));
        setLoading(false);
      });
    } else {
      setLoading(true);
    }
  }, []);

  return loading ? <>'Loading'</> : <List quotes={Quotes} />;
};

export default observer(QuotesContainer);
