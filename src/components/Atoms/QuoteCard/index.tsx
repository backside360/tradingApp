import React from 'react';
import { Card, Skeleton } from 'antd';

export type IProps = {
  symbol: string;
  margin: number;
  high: number;
  low: number;
};

export const QuoteCard: React.FC<IProps> = ({ symbol, margin, high, low }) => (
  <Card
    title={symbol}
    style={{ width: '400px', height: '100%', borderRadius: '10px' }}
  >
    {margin ? (
      <>
        <p>Margin: {margin}</p>
        <p>High: {high}</p>
        <p>Low: {low}</p>
      </>
    ) : (
      <Skeleton active />
    )}
  </Card>
);
