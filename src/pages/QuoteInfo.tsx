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
  volume: number | null;
  change: number | null;
  percent: number | null;
};

const QuoteInfo: React.FC<TProps> = (props) => {
  const [quote, setQuote] = useState<TState>({
    margin: null,
    volume: null,
    change: null,
    percent: null,
  });

  const { api } = useInjection();

  useEffect(() => {
    Promise.all([
      api.metrics.getMargin(props.id),
      api.quotes.getQuote(props.id),
    ]).then(([margin, apiQoute]) => {
      setQuote({
        margin: margin.metric.grossMarginAnnual,
        volume: apiQoute.volume || apiQoute.previousVolume,
        change: apiQoute.change,
        percent: apiQoute.changePercent,
      });
    });
  }, []);

  const Card = () =>
    !quote.volume || !quote.margin || !quote.percent || !quote.change ? (
      <>'Loading'</>
    ) : (
      <QuoteCard
        symbol={props.id}
        margin={quote.margin}
        volume={quote.volume}
        change={quote.change}
        changePercent={quote.percent}
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
