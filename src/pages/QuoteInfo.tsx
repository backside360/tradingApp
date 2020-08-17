import React, { useState, useEffect } from 'react';
import { match as IMatch } from 'react-router-dom';

import { QuoteCard } from '../components/Atoms/QuoteCard';
import { MainLayout } from '../components/Layouts/Main';
import MenuContainer from '../containers/MenuContainer';
import { MainMenu } from '../components/Molecules/MainMenu';
import { api } from '../services/api';

interface TProps {
  component: React.ElementType<any>;
  match: IMatch<{ id: string }>;
}

type TState = {
  margin: number | null;
  high: number | null;
  low: number | null;
};

const QuoteInfo: React.FC<TProps> = (props) => {
  const [quote, setQuote] = useState<TState>({
    margin: null,
    high: null,
    low: null,
  });

  useEffect(() => {
    Promise.all([
      api.metrics.getMargin(props.match.params.id),
      api.quotes.getQuote(props.match.params.id),
    ]).then(([margin, apiQoute]) => {
      setQuote({
        margin: margin.metric.grossMarginAnnual,
        high: apiQoute.h,
        low: apiQoute.l,
      });
    });
  }, []); // eslint-disable-line

  const Card = () =>
    !quote.margin || !quote.high || !quote.low ? (
      <>'Loading'</>
    ) : (
      <QuoteCard
        symbol={props.match.params.id}
        margin={quote.margin}
        high={quote.high}
        low={quote.low}
      />
    );

  return (
    <MainLayout
      header={() => <MenuContainer component={MainMenu} />}
      body={Card}
    />
  );
};

export default QuoteInfo;
