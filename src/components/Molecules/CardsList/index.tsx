import React from 'react';
import { Row, Col } from 'antd';
import { IQuote } from '../../../entities/quotes/types';
import { CompanyCard } from '../../Atoms/CompanyCard';

interface IProps {
  quotes: IQuote[];
}

export const CardsList: React.FC<IProps> = ({ quotes }) => (
  <Row type="flex" justify="space-around">
    {quotes.map((company: IQuote) => (
      <Col className="card" key={company.symbol}>
        <CompanyCard
          name={company.name}
          exchange={company.exchange}
          latestPrice={company.latestPrice}
        />
      </Col>
    ))}
  </Row>
);
