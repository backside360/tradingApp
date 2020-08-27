import React, { useState } from 'react';

import { Card, AutoComplete, Input, Icon, Modal, Button } from 'antd';
import { toJS } from 'mobx';
import { Spin } from 'antd';
import { observer } from 'mobx-react';

import './styles.css';
import 'antd/dist/antd.css';
import MontlyCard from '../MothlyCard/index';
import TestForm from '../TestA/index';
import { useInjection } from '../../service/Injection';

const { TextArea } = Input;
const { Option } = AutoComplete;

const { Meta } = Card;

const PriceCard = observer((props) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const {
    store: { QuoteStore },
  } = useInjection();
  const { loading } = props;

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {Object.keys(toJS(QuoteStore.quoteStore)).length === 0 ? null : (
        <div className="price_card">
          <Card
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
                    <div className="bounce_top">
                      <Icon
                        type="down-circle"
                        theme="twoTone"
                        twoToneColor="red"
                        style={{ fontSize: '20px', paddingLeft: '150px' }}
                      />
                    </div>
                  ) : (
                    <div className="bounce_bottom">
                      <Icon
                        type="up-circle"
                        theme="twoTone"
                        twoToneColor="green"
                        style={{ fontSize: '20px', paddingLeft: '150px' }}
                      />
                    </div>
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
              {!toggle ? (
                <MontlyCard handleToggle={handleToggle} />
              ) : (
                <TestForm handleToggle={handleToggle} />
              )}
            </Modal>
          </Card>
        </div>
      )}
    </>
  );
});

export default PriceCard;
