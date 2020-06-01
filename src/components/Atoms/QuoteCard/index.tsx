import React from 'react';
import { Card, Skeleton } from 'antd';

export type IProps = {
  symbol: string;
  margin: number;
  volume: number;
  change: number;
  changePercent: number;
};

export const QuoteCard: React.FC<IProps> = ({
  symbol,
  margin,
  volume,
  change,
  changePercent,
}) => (
  <Card
    title={symbol}
    style={{ width: '400px', height: '100%', borderRadius: '10px' }}
  >
    {changePercent ? (
      <>
        <p>Margin: {margin}</p>
        <p>Volume: {volume}</p>
        <p>Change: {change}</p>
        <p>Change Percent: {changePercent}</p>
      </>
    ) : (
      <Skeleton active />
    )}
  </Card>
);
