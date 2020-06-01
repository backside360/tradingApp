import React from 'react';
import { Row, Col } from 'antd';
import { QuoteCard } from '../../Atoms/QuoteCard';
import { IQuote } from '../../../entities/quotes/types';

interface IProps {
  quotes: IQuote[];
  symbol: string;
  onClick: (symbol: string) => void;
}

export const QuoteInfo: React.FC<IProps> = ({ quotes, onClick }) => (
  //@ts-ignore
  <QuoteCard symbol={symbol} />
);
