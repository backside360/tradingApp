import React from 'react';
import { Row, Col } from 'antd';
import { CompanyModal } from '../../Atoms/CompanyModal';
import { IQuote } from '../../../entities/quotes/types';

interface IProps {
  quotes: IQuote[];
  symbol: string;
  onClick: (symbol: string) => void;
}

export const QuoteInfo: React.FC<IProps> = ({ quotes, onClick }) => (
  //@ts-ignore
  <CompanyModal />
);
