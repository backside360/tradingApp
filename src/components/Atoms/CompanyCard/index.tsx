import React from 'react';

import { Card } from 'antd';
import { Animated } from 'react-animated-css';

export type IProps = {
  name?: string;
  exchange?: string;
  latestPrice?: number;
};

export const CompanyCard: React.FC<IProps> = ({
  name,
  exchange,
  latestPrice
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
    >
      <Card.Meta description={exchange} />
      <p>Latest Price: {latestPrice}</p>
    </Card>
  </Animated>
);
