import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { api } from '../services/api';
import { mapQuotesFromApiToStore } from '../entities/quotes/mapping';
import { IQuote } from '../entities/quotes/types';
import { Quotes } from '../entities/quotes';

interface IList {
  quotes: Array<IQuote>;
  onClick?: (symbol: string) => void;
}

interface IProps {
  component: React.ElementType<IList>;
}

const QuotesContainer: React.FC<IProps> = ({ component: List }) => {
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  React.useEffect(() => {
    if (!Quotes.length) {
      Promise.all([
        api.company.getProfile('AAPL'),
        api.company.getProfile('GOOGL'),
        api.company.getProfile('TSLA'),
      ]).then((companies) => {
        Quotes.push(...mapQuotesFromApiToStore(companies));
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []); // eslint-disable-line

  const handleClick = React.useCallback(
    (symbol) => history.push(`/stock/${symbol}`),
    [history]
  );

  return loading ? (
    <>'Loading'</>
  ) : (
    <List quotes={Quotes} onClick={handleClick} />
  );
};

export default QuotesContainer;
