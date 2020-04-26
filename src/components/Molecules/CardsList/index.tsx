import React from 'react';
import { Row, Col } from 'antd';
import { IQuote } from '../../../entities/quotes/types';
import { CompanyCard } from '../../Atoms/CompanyCard';

interface IProps {
  quotes: IQuote[];
  onClick?: (symbol: string) => void;
}

export const CardsList: React.FC<IProps> = ({ quotes, onClick }) => (
  <Row type="flex" justify="space-around">
    {quotes.map((company: IQuote) => (
      <Col className="card" key={company.symbol}>
        <CompanyCard
          name={company.name}
          exchange={company.exchange}
          latestPrice={company.latestPrice}
          symbol={company.symbol}
          onClick={onClick}
        />
      </Col>
    ))}
  </Row>
);
