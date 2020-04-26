import React from 'react';

import { Card, Modal } from 'antd';

export type IProps = {
  name?: string;
  exchange?: string;
  latestPrice?: number;
  symbol: string;
  onClick: (symbol: string) => void;
};

export const CompanyModal: React.FC<IProps> = ({
  name,
  exchange,
  latestPrice,
  symbol,
  onClick,
}) => (
  <Modal title="Basic Modal" visible={true}>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
);
