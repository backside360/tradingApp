import React from 'react';

import { Card } from 'antd';
import { Animated } from 'react-animated-css';

export type IProps = {
  name?: string;
  exchange?: string;
  marketCapitalization?: number;
  ticker: string;
  onClick?: (symbol: string) => void;
};

export const CompanyCard: React.FC<IProps> = ({
  name,
  exchange,
  marketCapitalization,
  ticker,
  onClick,
}) => (
  <Animated
    animationIn="bounceInUp"
    animationOut="zoomOutDown"
    animationInDuration={1000}
    animationOutDuration={1000}
    isVisible={true}
  >
    <Card
      title={name}
      hoverable
      style={{ width: '400px', height: '100%', borderRadius: '10px' }}
      onClick={() => onClick && onClick(ticker)}
    >
      <Card.Meta description={exchange} />
      <p>Market Capitalization: {marketCapitalization}</p>
    </Card>
  </Animated>
);
