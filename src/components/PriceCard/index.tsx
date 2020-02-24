import React, { useState, useContext } from 'react';

import { Card, AutoComplete, Input, Row, Col, Icon, Modal, Button } from 'antd';
import { toJS } from 'mobx';
import { Spin } from 'antd';
import { observer } from 'mobx-react';
import { Animated } from 'react-animated-css';
import './styles.css';
import 'antd/dist/antd.css';
import MontlyCard from '../MothlyCard/index';
import { useInjection } from '../../service/Injection';

const { TextArea } = Input;
const { Option } = AutoComplete;

const { Meta } = Card;

const PriceCard = observer(props => {
  const [visible, setVisible] = useState<boolean>(false);
  const {
    store: { QuoteStore }
  } = useInjection();
  const { loading } = props;

  return (
    <>
      {Object.keys(toJS(QuoteStore.quoteStore)).length === 0 ? null : (
        <Animated
          animationIn="bounceInUp"
          animationOut="zoomOutDown"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={true}
        >
          <Card
            //@ts-ignore
            title={QuoteStore.quoteStore.companyName}
            hoverable
            style={{ width: '300px', height: '100%', borderRadius: '10px' }}
          >
            {' '}
            <Meta description={QuoteStore.quoteStore.primaryExchange} />
            {loading ? (
              <Spin></Spin>
            ) : (
              <>
                <p>
                  Latest Price: {QuoteStore.quoteStore.latestPrice}
                  {Object.keys(toJS(QuoteStore.quoteStore)).length ===
                  0 ? null : QuoteStore.getPreviousDay ? (
                    <Animated
                      animationIn="bounce"
                      animationOut="zoomOutDown"
                      animationInDuration={3000}
                      animationOutDuration={3000}
                      isVisible={true}
                    >
                      <Icon
                        type="down-circle"
                        theme="twoTone"
                        twoToneColor="red"
                        style={{ fontSize: '20px', paddingLeft: '150px' }}
                      />
                    </Animated>
                  ) : (
                    <Animated
                      animationIn="bounce"
                      animationOut="zoomOutDown"
                      animationInDuration={3000}
                      animationOutDuration={3000}
                      isVisible={true}
                    >
                      <Icon
                        type="up-circle"
                        theme="twoTone"
                        twoToneColor="green"
                        style={{ fontSize: '20px', paddingLeft: '150px' }}
                      />
                    </Animated>
                  )}
                </p>
              </>
            )}
            <Button type="dashed" onClick={() => setVisible(true)}>
              Calendar prices
            </Button>
            <Modal
              title="Check this out"
              visible={visible}
              onOk={() => setVisible(false)}
              onCancel={() => setVisible(false)}
              width="600px"
            >
              <MontlyCard />
            </Modal>
          </Card>
        </Animated>
      )}
    </>
  );
});

export default PriceCard;
