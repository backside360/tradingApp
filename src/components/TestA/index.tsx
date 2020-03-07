import React from 'react';
import './styles.css';
import { Card, AutoComplete, Input, Row, Col, Icon, Modal, Button } from 'antd';

interface IProps {
  handleToggle: () => void;
}

const TestForm = (props: IProps) => {
  const { handleToggle } = props;
  return (
    <div className="slide_in">
      <Card hoverable>
        <Button type="primary" onClick={handleToggle}>
          Back
        </Button>
      </Card>
    </div>
  );
};

export default TestForm;
