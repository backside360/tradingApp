import React from 'react';
import { Row, Col } from 'antd';
import { observer } from 'mobx-react';

import { IQuote } from '../../../entities/quotes/types';
import { CompanyCard } from '../../Atoms/CompanyCard';

interface IProps {
  quotes: IQuote[];
  onClick?: (symbol: string) => void;
}

const CardsList: React.FC<IProps> = ({ quotes, onClick }) => (
  <Row type="flex" justify="space-around">
    {quotes.map((company: IQuote) => (
      <Col className="card" key={company.ticker}>
        <CompanyCard
          name={company.name}
          exchange={company.exchange}
          marketCapitalization={company.marketCapitalization}
          ticker={company.ticker}
          onClick={onClick}
        />
      </Col>
    ))}
  </Row>
);

const Observed = observer(CardsList);

export { Observed as CardsList };
