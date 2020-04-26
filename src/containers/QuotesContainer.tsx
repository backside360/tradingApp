import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useInjection } from '../services/Injection';
import { mapQuotesFromApiToStore } from '../entities/quotes/mapping';
import { IQuote } from '../entities/quotes/types';


interface IList {
  quotes: Array<IQuote>;
  onClick?: (symbol: string) => void;
}

interface IProps {
  component: React.ElementType<IList>;
}


const QuotesContainer: React.FC<IProps> = (props) => {
  const List = props.component;

  const [loading, setLoading] = useState(true);
  const {
    api,
    store: { Quotes },
    router: { navigate },
  } = useInjection();

  React.useEffect(() => {
    if (!Quotes.length) {
      Promise.all([
        api.quotes.getQuote('AAPL'),
        api.quotes.getQuote('GOOGL'),
        api.quotes.getQuote('TSLA'),
      ]).then((companies) => {
        Quotes.push(...mapQuotesFromApiToStore(companies));
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  const handleClick = React.useCallback(
    (symbol) => {
      navigate(`/stock/${symbol}`);
    },
    [navigate]
  );

  return loading ? (
    <>'Loading'</>
  ) : (
    <List quotes={Quotes} onClick={handleClick} />
  );
};

export default observer(QuotesContainer);
