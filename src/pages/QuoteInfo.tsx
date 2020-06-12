import React, { useState, useEffect } from 'react';
import { useInjection } from '../services/Injection';
import { QuoteCard } from '../components/Atoms/QuoteCard';
import { MainLayout } from '../components/Layouts/Main';
import MenuContainer from '../containers/MenuContainer';
import { MainMenu } from '../components/Molecules/MainMenu';

interface TProps {
  component: React.ElementType<any>;
  id: string;
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

  const { api } = useInjection();

  useEffect(() => {
    Promise.all([
      api.metrics.getMargin(props.id),
      api.quotes.getQuote(props.id),
    ]).then(([margin, apiQoute]) => {
      setQuote({
        margin: margin.metric.grossMarginAnnual,
        high: apiQoute.h,
        low: apiQoute.l,
      });
    });
  }, []);

  const Card = () =>
    !quote.margin || !quote.high || !quote.low ? (
      <>'Loading'</>
    ) : (
      <QuoteCard
        symbol={props.id}
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
