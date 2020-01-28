import React from 'react';
import { Typography, Row } from 'antd';

const { Title } = Typography;

export default function Foot() {
  return (
    <div>
      <Row type="flex" justify="end">
        <Title level={2} type="warning">
          Whatever♥
        </Title>
      </Row>
    </div>
  );
}
